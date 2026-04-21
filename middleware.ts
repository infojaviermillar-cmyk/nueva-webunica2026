import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the hostname from the request headers
  const hostname = request.headers.get('host') || '';

  // Check if it's the specific Exact Match Domain for Shopify
  if (
    hostname === 'desarrolloshopify.cl' || 
    hostname === 'www.desarrolloshopify.cl' ||
    // Permite probarlo localmente pasándole un host falso en postman si fuera necesario
    hostname.includes('desarrolloshopify') 
  ) {
    // Rewrite traffic so the URL remains desarrolloshopify.cl/ 
    // but the app serves the hidden internal landing page.
    const url = request.nextUrl.clone();
    
    // Si están entrando al root (/) de desarrolloshopify.cl
    if (url.pathname === '/') {
      url.pathname = '/landing-shopify-emd';
      return NextResponse.rewrite(url);
    }
    
    // Opcional: si intentan entrar a sub-rutas, puedes redirigirlos al root del EMD o dejarlos pasar.
    // Actualmente si entran a /contacto en desarrolloshopify.cl cargarían el contacto de webunica.
  }

  // If not the target domain, continue normal execution for Webunica.cl
  return NextResponse.next();
}

// Opcional: Especificar en qué paths corre el middleware 
// (en este caso lo dejamos amplio para capturar todo el host)
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
