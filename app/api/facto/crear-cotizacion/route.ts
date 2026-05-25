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

    // 3. Verify Facto API Key
    const apiKey = process.env.FACTO_API_KEY;
    if (!apiKey) {
      // Elegant Sandbox/Mock mode if the production API Key is not set in environment variables yet.
      // This allows the user to test the visual flow instantly without crashing the application.
      return NextResponse.json({
        success: true,
        isMock: true,
        docNumber: `CO-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 900) + 100)}`,
        docUrl: 'https://facto.cl/producto/integracion-facto-api/',
        message: '¡Sincronización simulada con éxito! Para emitir documentos tributarios reales en tu cuenta de Facto.cl, configura la variable de entorno FACTO_API_KEY en tu servidor.'
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
        document_type_id: 110, // 110 is standard code for Quote (Cotización) in Facto/Koywe billing system
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
    const factoResponse = await fetch('https://api.facto.cl/V1/documents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(factoPayload)
    });

    if (!factoResponse.ok) {
      const errorText = await factoResponse.text();
      console.error('Error from Facto REST API:', errorText);
      return NextResponse.json({ 
        error: `Facto API Error: ${factoResponse.statusText}. Detalle: ${errorText}` 
      }, { status: 502 });
    }

    const resData = await factoResponse.json();
    
    return NextResponse.json({
      success: true,
      isMock: false,
      docNumber: resData.document_number || resData.id || `FACTO-${quoteNumber}`,
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
