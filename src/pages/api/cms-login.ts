export const prerender = false;
import type { APIRoute } from 'astro';
import { getUser, verifyPassword, sessionCookieHeader, redirectHtml, SITE_ID } from '../../lib/cms-auth';

export const POST: APIRoute = async (context) => {
  const form = await context.request.formData();
  const email = String(form.get('email') || '').trim().toLowerCase();
  const password = String(form.get('password') || '');
  const next = String(form.get('next') || '/keystatic');
  const dest = next.startsWith('/') ? next : '/keystatic';
  const nextParam = next.startsWith('/') ? `&next=${encodeURIComponent(next)}` : '';

  const fail = (msg: string) => redirectHtml(`/acceso?error=${encodeURIComponent(msg)}${nextParam}`);

  if (!email || !password) return fail('Faltan datos');

  let user: Awaited<ReturnType<typeof getUser>> = null;
  try {
    user = await getUser(email, SITE_ID);
  } catch {
    return fail('Error de servidor');
  }
  if (!user || !user.password_hash || !verifyPassword(password, user.password_hash)) {
    return fail('Email o contraseña incorrectos');
  }

  return redirectHtml(dest, { 'Set-Cookie': sessionCookieHeader(email, SITE_ID) });
};
