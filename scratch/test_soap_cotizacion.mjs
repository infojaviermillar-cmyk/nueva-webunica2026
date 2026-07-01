async function run() {
  const username = '76371864-6/abda';
  const password = '39c3542401c5a6392ace44edbb533d7e';
  const authHeader = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:server">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:emitirDocumento soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
         <documento xsi:type="urn:emitir_dte">
            <encabezado xsi:type="urn:encabezado">
               <tipo_dte xsi:type="xsd:string">102</tipo_dte>
               <fecha_emision xsi:type="xsd:date">2026-05-25</fecha_emision>
               <receptor_rut xsi:type="xsd:string">76371864-6</receptor_rut>
               <receptor_razon xsi:type="xsd:string">Cliente de Prueba SOAP</receptor_razon>
               <receptor_direccion xsi:type="xsd:string">Alameda 123</receptor_direccion>
               <receptor_comuna xsi:type="xsd:string">Santiago</receptor_comuna>
               <receptor_ciudad xsi:type="xsd:string">Santiago</receptor_ciudad>
               <receptor_email xsi:type="xsd:string">contacto@webunica.cl</receptor_email>
               <condiciones_pago xsi:type="xsd:string">1</condiciones_pago>
            </encabezado>
            <detalles xsi:type="urn:detalles">
               <detalle xsi:type="urn:detalle">
                  <cantidad xsi:type="xsd:decimal">1</cantidad>
                  <glosa xsi:type="xsd:string">Servicio de Desarrollo Web SOAP</glosa>
                  <monto_unitario xsi:type="xsd:decimal">500000</monto_unitario>
                  <exento_afecto xsi:type="xsd:int">1</exento_afecto>
               </detalle>
            </detalles>
            <totales xsi:type="urn:totales">
               <total_exento xsi:type="xsd:int">0</total_exento>
               <total_afecto xsi:type="xsd:int">500000</total_afecto>
               <total_iva xsi:type="xsd:int">95000</total_iva>
               <total_final xsi:type="xsd:int">595000</total_final>
            </totales>
         </documento>
      </urn:emitirDocumento>
   </soapenv:Body>
</soapenv:Envelope>`;

  try {
    console.log('Sending SOAP request to Facto...');
    const res = await fetch('https://conexion.facto.cl/documento.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
        'SOAPAction': 'https://conexion.facto.cl/documento.php/emitirDocumento',
        'Authorization': authHeader
      },
      body: xml
    });

    console.log('Status:', res.status, res.statusText);
    const text = await res.text();
    console.log('Response Body:');
    console.log(text);

  } catch (err) {
    console.error('Error:', err);
  }
}

run();
