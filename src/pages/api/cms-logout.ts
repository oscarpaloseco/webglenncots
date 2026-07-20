export const prerender = false;
import type { APIRoute } from 'astro';

const expire = (name: string) => `${name}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;

export const GET: APIRoute = async () => {
  const h = new Headers({ 'Content-Type': 'text/html; charset=utf-8' });
  h.append('Set-Cookie', expire('ps_cms'));
  h.append('Set-Cookie', expire('keystatic-gh-access-token'));
  return new Response(
    '<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=/acceso"><script>location.replace("/acceso")</script>',
    { status: 200, headers: h },
  );
};
export const POST = GET;
