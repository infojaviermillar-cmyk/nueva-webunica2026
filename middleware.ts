import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export default async function middleware(request: NextRequest) {
  // 1. Parse hostname (strip port number)
  const host = request.headers.get('host') || '';
  const forwardedHost = request.headers.get('x-forwarded-host') || '';
  const hostname = (forwardedHost || host).split(':')[0].toLowerCase();
  
  // 1. Manejo de dominios para EMD (Desarrollo Shopify)
  if (
    hostname === 'desarrolloshopify.cl' || 
    hostname === 'www.desarrolloshopify.cl' ||
    hostname.includes('desarrolloshopify')
  ) {
    const url = request.nextUrl.clone();
    if (url.pathname === '/') {
      url.pathname = '/landing-shopify-emd';
      return NextResponse.rewrite(url);
    }
  }

  // 2. Manejo de dominios para Webunica Intelligence (intelligence.webunica.cl)
  if (
    hostname === 'intelligence.webunica.cl' ||
    hostname.startsWith('intelligence.') ||
    hostname.includes('intelligence')
  ) {
    const url = request.nextUrl.clone();
    if (url.pathname === '/') {
      url.pathname = '/intelligence';
      return NextResponse.rewrite(url);
    }
    if (
      !url.pathname.startsWith('/intelligence') &&
      !url.pathname.startsWith('/api') &&
      !url.pathname.startsWith('/auth') &&
      !url.pathname.startsWith('/login')
    ) {
      url.pathname = `/intelligence${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // 4. Manejo de autenticación global (Supabase)
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey) {
    const supabase = createServerClient(
      supabaseUrl,
      supabaseKey,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            request.cookies.set({
              name,
              value,
              ...options,
            })
            response = NextResponse.next({
              request: {
                headers: request.headers,
              },
            })
            response.cookies.set({
              name,
              value,
              ...options,
            })
          },
          remove(name: string, options: CookieOptions) {
            request.cookies.set({
              name,
              value: '',
              ...options,
            })
            response = NextResponse.next({
              request: {
                headers: request.headers,
              },
            })
            response.cookies.set({
              name,
              value: '',
              ...options,
            })
          },
        },
      }
    )

    const { data: { user } } = await supabase.auth.getUser()

    // Protect /admin, /mi-cuenta, and /intelligence routes
    const protectedPaths = ['/admin', '/mi-cuenta', '/intelligence']
    const isProtectedPath = protectedPaths.some(path => request.nextUrl.pathname.startsWith(path))

    if (isProtectedPath && !user) {
      return NextResponse.redirect(new URL('/login?next=' + request.nextUrl.pathname, request.url))
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - api (API routes)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
