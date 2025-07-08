import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for:
  // - /api, /trpc, /_next, /_vercel
  // - any path with a dot (e.g. favicon.ico)
  // - /docs (để không bị locale hóa)
  matcher: '/((?!api|trpc|_next|_vercel|docs|.*\\..*).*)',
};
