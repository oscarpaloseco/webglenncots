// Muro de acceso propio para el CMS (/keystatic) de esta web.
//
// Idea: el CLIENTE entra con su email + contraseña (nunca con GitHub). Tras
// validarlo, el middleware inyecta el token de GitHub (server-side) para que
// Keystatic pueda guardar. Cada web solo acepta usuarios de SU `site`, así que
// un cliente jamás ve el CMS de otro.
//
// Sin dependencias externas: scrypt para la contraseña y HMAC-SHA256 para las
// cookies/enlaces firmados (mismo patrón que el ps_sso del portal).

import { scryptSync, randomBytes, createHmac, timingSafeEqual } from 'node:crypto';

// Identificador de esta web. Debe coincidir con el `site` de los usuarios en la
// tabla cms_users. Se puede sobreescribir por env (CMS_SITE_ID).
export const SITE_ID = env('CMS_SITE_ID') || 'pedro-seo-astro';

const SESSION_COOKIE = 'ps_cms';
const GH_COOKIE = 'keystatic-gh-access-token'; // el nombre que Keystatic lee
const SESSION_TTL_S = 60 * 60 * 12; // 12 h
const INVITE_TTL_S = 60 * 60 * 24 * 7; // 7 días

const enc = new TextEncoder();

// Lee variables de entorno tanto en build (import.meta.env) como en runtime
// serverless de Vercel (process.env). Los secretos se resuelven en runtime.
function env(name: string): string {
  return (process.env?.[name] as string) || ((import.meta.env as any)?.[name] as string) || '';
}

function b64url(buf: Buffer | Uint8Array): string {
  return Buffer.from(buf).toString('base64').replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '');
}
function fromB64url(s: string): Buffer {
  return Buffer.from(s.replaceAll('-', '+').replaceAll('_', '/'), 'base64');
}

function secret(): string {
  const s = env('CMS_AUTH_SECRET');
  if (!s) throw new Error('CMS_AUTH_SECRET no configurado');
  return s;
}

// ---- Contraseñas (scrypt) ----
export function hashPassword(password: string): string {
  const salt = randomBytes(16);
  const hash = scryptSync(password, salt, 32);
  return `scrypt$${b64url(salt)}$${b64url(hash)}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  try {
    const [scheme, saltB64, hashB64] = stored.split('$');
    if (scheme !== 'scrypt') return false;
    const salt = fromB64url(saltB64);
    const expected = fromB64url(hashB64);
    const actual = scryptSync(password, salt, expected.length);
    return actual.length === expected.length && timingSafeEqual(actual, expected);
  } catch {
    return false;
  }
}

// ---- Tokens firmados (sesión e invitación) ----
type Payload = { email: string; site: string; exp: number; kind: 'session' | 'invite' };

function sign(payload: Payload): string {
  const body = b64url(enc.encode(JSON.stringify(payload)));
  const sig = b64url(createHmac('sha256', secret()).update(body).digest());
  return `${body}.${sig}`;
}

function verify(token: string | undefined): Payload | null {
  if (!token) return null;
  const [body, sig] = token.split('.');
  if (!body || !sig) return null;
  const expected = b64url(createHmac('sha256', secret()).update(body).digest());
  const a = enc.encode(sig);
  const b = enc.encode(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  try {
    const p = JSON.parse(fromB64url(body).toString('utf-8')) as Payload;
    if (typeof p.exp !== 'number' || p.exp < Date.now() / 1000) return null;
    return p;
  } catch {
    return null;
  }
}

export function makeSession(email: string, site: string): string {
  return sign({ email, site, kind: 'session', exp: Math.floor(Date.now() / 1000) + SESSION_TTL_S });
}
export function makeInvite(email: string, site: string): string {
  return sign({ email, site, kind: 'invite', exp: Math.floor(Date.now() / 1000) + INVITE_TTL_S });
}
export function readSession(token: string | undefined): Payload | null {
  const p = verify(token);
  return p && p.kind === 'session' ? p : null;
}
export function readInvite(token: string | undefined): Payload | null {
  const p = verify(token);
  return p && p.kind === 'invite' ? p : null;
}

// ---- Cookies ----
export const COOKIES = { SESSION: SESSION_COOKIE, GH: GH_COOKIE };
export const SESSION_MAX_AGE = SESSION_TTL_S;

// Cabecera Set-Cookie de la sesión (explícita, para respuestas manuales).
export function sessionCookieHeader(email: string, site: string): string {
  return `${SESSION_COOKIE}=${makeSession(email, site)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${SESSION_TTL_S}`;
}

// Redirección devuelta como 200 + redirect por cliente. Necesario porque las
// respuestas 3xx de los endpoints se pierden al pasar por el middleware edge.
export function redirectHtml(url: string, extraHeaders: Record<string, string> = {}): Response {
  const safe = JSON.stringify(url);
  return new Response(
    `<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${url}"><script>location.replace(${safe})</script>`,
    { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8', ...extraHeaders } },
  );
}

// ---- Acceso a la tabla cms_users (Supabase REST, solo server) ----
function sb() {
  const url = env('CMS_SUPABASE_URL');
  const key = env('CMS_SUPABASE_SERVICE_KEY');
  if (!url || !key) throw new Error('CMS_SUPABASE_URL / CMS_SUPABASE_SERVICE_KEY no configurados');
  return { url: url.replace(/\/$/, ''), key };
}

export async function getUser(email: string, site: string): Promise<{ email: string; site: string; password_hash: string | null } | null> {
  const { url, key } = sb();
  const q = `${url}/rest/v1/cms_users?select=email,site,password_hash&email=eq.${encodeURIComponent(email.toLowerCase())}&site=eq.${encodeURIComponent(site)}&limit=1`;
  const res = await fetch(q, { headers: { apikey: key, Authorization: `Bearer ${key}` } });
  if (!res.ok) throw new Error(`cms_users read ${res.status}`);
  const rows = (await res.json()) as any[];
  return rows[0] || null;
}

export async function setPassword(email: string, site: string, password: string): Promise<void> {
  const { url, key } = sb();
  const body = { email: email.toLowerCase(), site, password_hash: hashPassword(password), updated_at: new Date().toISOString() };
  const res = await fetch(`${url}/rest/v1/cms_users?on_conflict=email,site`, {
    method: 'POST',
    headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', Prefer: 'resolution=merge-duplicates' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`cms_users upsert ${res.status}: ${await res.text()}`);
}
