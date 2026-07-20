// Muro de acceso al CMS (middleware node). Protege /keystatic y /api/keystatic:
// sin sesión válida → /acceso; con sesión → inyecta el token de GitHub para que
// Keystatic pueda guardar. El cliente entra con email+contraseña, nunca GitHub.
import { defineMiddleware } from 'astro:middleware';
import { readSession, SITE_ID, COOKIES, SESSION_MAX_AGE } from './lib/cms-auth';

export const onRequest = defineMiddleware(async (context, next) => {
  const path = context.url.pathname;
  const isCms = path === '/keystatic' || path.startsWith('/keystatic/') || path.startsWith('/api/keystatic');
  if (!isCms) return next();

  const session = readSession(context.cookies.get(COOKIES.SESSION)?.value);
  if (!session || session.site !== SITE_ID) {
    context.cookies.delete(COOKIES.GH, { path: '/' });
    return context.redirect(`/acceso?next=${encodeURIComponent(path)}`);
  }

  const gh = process.env.KEYSTATIC_GH_TOKEN || (import.meta.env as any).KEYSTATIC_GH_TOKEN;
  if (gh) {
    context.cookies.set(COOKIES.GH, gh, {
      path: '/', httpOnly: true, secure: true, sameSite: 'lax', maxAge: SESSION_MAX_AGE,
    });
  }
  return next();
});
