export const prerender = false;
import type { APIRoute } from 'astro';
import { readInvite, setPassword, sessionCookieHeader, redirectHtml, SITE_ID } from '../../lib/cms-auth';

export const POST: APIRoute = async (context) => {
  const form = await context.request.formData();
  const token = String(form.get('invite') || '');
  const password = String(form.get('password') || '');
  const password2 = String(form.get('password2') || '');

  const back = (msg: string) => redirectHtml(`/acceso?invite=${encodeURIComponent(token)}&error=${encodeURIComponent(msg)}`);

  const invite = readInvite(token);
  if (!invite || invite.site !== SITE_ID) {
    return redirectHtml('/acceso?error=' + encodeURIComponent('Invitación no válida o caducada'));
  }
  if (password.length < 8) return back('La contraseña debe tener al menos 8 caracteres');
  if (password !== password2) return back('Las contraseñas no coinciden');

  try {
    await setPassword(invite.email, SITE_ID, password);
  } catch {
    return back('Error de servidor al guardar');
  }

  return redirectHtml('/keystatic', { 'Set-Cookie': sessionCookieHeader(invite.email, SITE_ID) });
};
