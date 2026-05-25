import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // 1. Authenticate the administrator session
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    const isAllowedAdmin = user?.email === 'javiermillarv@gmail.com' || user?.email?.endsWith('@webunica.cl');
    if (!user || !isAllowedAdmin) {
      return NextResponse.json({ error: 'No autorizado. Se requiere sesión de administrador.' }, { status: 401 });
    }

    // 2. Parse request payload
    const body = await req.json();
    const { clientInfo, selectedPlans, discountPercent, quoteNumber, total } = body;

    if (!clientInfo?.name || !selectedPlans || selectedPlans.length === 0) {
      return NextResponse.json({ error: 'Faltan campos obligatorios: nombre de cliente o servicios seleccionados.' }, { status: 400 });
    }

    // 3. Verify Facto Credentials
    const clientId = process.env.FACTO_CLIENT_ID;
    const clientSecret = process.env.FACTO_CLIENT_SECRET;
    const username = process.env.FACTO_USERNAME;
    const password = process.env.FACTO_PASSWORD;
    const apiKeyFallback = process.env.FACTO_API_KEY;

    let accessToken = '';

    if (clientId && clientSecret && username && password) {
      // Execute authentication request to get a dynamic access token
      const authResponse = await fetch('https://api-billing.koywe.com/V1/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          grant_type: 'password',
          client_id: clientId,
          client_secret: clientSecret,
          username: username,
          password: password,
        }),
      });

      if (!authResponse.ok) {
        const authErrorText = await authResponse.text();
        console.error('Facto Authentication Failed:', {
          status: authResponse.status,
          statusText: authResponse.statusText,
          body: authErrorText,
        });
        return NextResponse.json({
          error: `Error de autenticación en Facto (HTTP ${authResponse.status}): ${authResponse.statusText}. Detalle: ${authErrorText || 'Sin detalle'}`
        }, { status: 502 });
      }

      const authData = await authResponse.json();
      accessToken = authData.access_token || authData.token;
    } else if (apiKeyFallback) {
      accessToken = apiKeyFallback;
    } else {
      // Elegant Sandbox/Mock mode if the production API Key is not set in environment variables yet.
      // This allows the user to test the visual flow instantly without crashing the application.
      return NextResponse.json({
        success: true,
        isMock: true,
        docNumber: `CO-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 900) + 100)}`,
        docUrl: 'https://facto.cl/producto/integracion-facto-api/',
        message: '¡Sincronización simulada con éxito! Para emitir documentos tributarios reales en tu cuenta de Facto.cl, configura las credenciales de la API en tu servidor.'
      });
    }

    // 4. Clean RUT formatting (Chilean RUT format standard: XXXXXXXX-X)
    let clientRut = '76.371.864-6'; // Fallback generic RUT if client has none
    if (clientInfo.rut) {
      clientRut = clientInfo.rut.replace(/[^0-9kK]/g, '');
      if (clientRut.length > 1) {
        clientRut = clientRut.slice(0, -1) + '-' + clientRut.slice(-1);
      }
    }

    // 5. Structure payload for Facto.cl REST API V1
    const factoPayload = {
      header: {
        document_type_id: 2, // 2 is standard code for Factura Electrónica Afecta (DTE 33) in Facto/Koywe billing system
        issue_date: new Date().toISOString().split('T')[0],
        customer: {
          tax_id: clientRut,
          name: clientInfo.company || clientInfo.name,
          email: clientInfo.email || 'contacto@webunica.cl',
          phone: clientInfo.phone || '+56984410379'
        }
      },
      items: selectedPlans.map((p: any) => {
        const netPrice = p.price;
        const discountAmt = Math.round(netPrice * ((discountPercent || 0) / 100));
        const finalNet = netPrice - discountAmt;

        return {
          description: p.name,
          quantity: 1,
          price: finalNet // Send final net price per item to Facto
        };
      })
    };

    // 6. Execute POST request to Facto REST API
    const factoResponse = await fetch('https://api-billing.koywe.com/V1/documents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(factoPayload)
    });

    if (!factoResponse.ok) {
      const errorText = await factoResponse.text();
      console.error('Error from Facto REST API:', {
        status: factoResponse.status,
        statusText: factoResponse.statusText,
        body: errorText,
        headers: Object.fromEntries(factoResponse.headers.entries())
      });
      return NextResponse.json({ 
        error: `Facto API Error (HTTP ${factoResponse.status}): ${factoResponse.statusText || 'Error'}. Detalle: ${errorText || 'Sin detalle del servidor'}` 
      }, { status: 502 });
    }

    const resData = await factoResponse.json();
    console.log('Facto Success Response Body:', JSON.stringify(resData));
    
    return NextResponse.json({
      success: true,
      isMock: false,
      docNumber: resData.document_number || resData.sequence_number || resData.header?.sequence_number || resData.id || resData.document_id || `FACTO-${quoteNumber}`,
      docUrl: resData.pdf_url || resData.url || 'https://facto.cl',
      message: 'Cotización creada en Facto.cl de forma exitosa.'
    });

  } catch (error: any) {
    console.error('Unexpected error in Facto integration handler:', error);
    return NextResponse.json({ 
      error: `Error interno de servidor: ${error.message || 'Error desconocido'}` 
    }, { status: 500 });
  }
}
