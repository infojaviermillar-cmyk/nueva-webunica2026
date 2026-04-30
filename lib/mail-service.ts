import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = 'javier@webunica.cl';

export async function sendLeadNotification(leadData: {
  name: string;
  email: string;
  service: string;
  phone: string;
}) {
  try {
    // 1. Email para el Cliente (Persuasivo y Mágico)
    await resend.emails.send({
      from: 'Javier de Webunica <consultas@webunica.cl>',
      to: leadData.email,
      subject: `🚀 Un regalo para tu proyecto de ${leadData.service}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; color: #18181b; border: 1px solid #e4e4e7; border-radius: 24px; overflow: hidden; shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
          <div style="background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); padding: 40px 20px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 28px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.025em;">¡Bienvenido a la élite digital!</h1>
            <p style="margin-top: 10px; opacity: 0.9; font-size: 16px;">Estamos listos para elevar tu marca al siguiente nivel.</p>
          </div>
          
          <div style="padding: 40px 30px; background: white;">
            <p style="font-size: 18px; margin-bottom: 20px;">Hola <strong>${leadData.name}</strong>,</p>
            <p style="line-height: 1.6; font-size: 16px;">Soy Javier Millar. Recibí tu interés en <strong>${leadData.service}</strong> y déjame decirte algo: has llegado al lugar correcto si buscas resultados fuera de lo común.</p>
            
            <p style="line-height: 1.6; font-size: 16px;">Para que comencemos con el pie derecho, he activado un beneficio exclusivo para tu proyecto:</p>
            
            <div style="background: #fdf2f8; border: 2px dashed #db2777; padding: 25px; text-align: center; border-radius: 20px; margin: 30px 0;">
              <p style="margin: 0; font-size: 12px; text-transform: uppercase; font-weight: bold; color: #db2777; letter-spacing: 0.1em;">Tu Código de Descuento (7 días):</p>
              <h2 style="margin: 10px 0; font-size: 36px; letter-spacing: 4px; color: #db2777;">WEBUNICA10</h2>
              <p style="margin: 0; font-size: 14px; font-weight: 600; color: #db2777;">10% OFF DIRECTO EN TU PLAN</p>
            </div>

            <p style="line-height: 1.6; font-size: 16px; margin-bottom: 30px;">¿Hablamos ahora mismo? Estoy disponible para resolver tus dudas por WhatsApp o podemos agendar una sesión técnica detallada.</p>
            
            <div style="text-align: center; margin-bottom: 40px;">
              <a href="https://wa.me/56984410379" style="display: inline-block; background: #25d366; color: #fff; padding: 18px 35px; border-radius: 50px; text-decoration: none; font-weight: 900; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 10px 15px -3px rgba(37, 211, 102, 0.3); margin-bottom: 15px;">Hablemos por WhatsApp Directo</a>
              <br />
              <a href="https://calendly.com/javiermillar/reunion-webunica" style="display: inline-block; color: #7c3aed; text-decoration: none; font-weight: 700; font-size: 14px; border-bottom: 2px solid #7c3aed; padding-bottom: 2px;">O agendar sesión técnica por Calendly</a>
            </div>

            <hr style="border: 0; border-top: 1px solid #f4f4f5; margin-bottom: 30px;" />

            <div style="display: flex; align-items: center; gap: 15px;">
              <img src="https://webunica.cl/javier-avatar.jpg" alt="Javier Millar" style="width: 60px; h-60px; border-radius: 50%; border: 2px solid #7c3aed; object-fit: cover;" width="60" height="60" />
              <div>
                <p style="margin: 0; font-weight: 900; font-size: 16px; color: #18181b;">Javier Millar</p>
                <p style="margin: 0; font-size: 13px; color: #71717a; font-weight: 600;">Director de Proyectos Web</p>
                <p style="margin: 0; font-size: 12px; color: #a1a1aa;">Webunica.cl</p>
              </div>
            </div>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e4e4e7;">
            <p style="font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; margin: 0;">Ingeniería y Diseño de Alto Vuelo en Chile 🇨🇱</p>
          </div>
        </div>
      `
    });

    // 2. Email para el Admin (Alerta de Negocio)
    await resend.emails.send({
      from: 'Webunica Leads <leads@webunica.cl>',
      to: ADMIN_EMAIL,
      subject: `🚨 NUEVO LEAD: ${leadData.service} - ${leadData.name}`,
      html: `
        <div style="font-family: sans-serif; color: #18181b; padding: 20px; border: 1px solid #e4e4e7; border-radius: 12px;">
          <h2 style="color: #7c3aed; margin-top: 0;">¡Nuevo prospecto capturado!</h2>
          <p>Se ha recibido una nueva solicitud de información desde el Funnel de WhatsApp.</p>
          <div style="background: #f4f4f5; padding: 20px; border-radius: 10px;">
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 10px;"><strong>Nombre:</strong> ${leadData.name}</li>
              <li style="margin-bottom: 10px;"><strong>Email:</strong> ${leadData.email}</li>
              <li style="margin-bottom: 10px;"><strong>Interés:</strong> ${leadData.service}</li>
              <li><strong>Teléfono:</strong> ${leadData.phone || 'No proporcionado'}</li>
            </ul>
          </div>
          <div style="margin-top: 30px; text-align: center;">
            <a href="https://wa.me/56984410379" style="background: #25d366; color: #fff; padding: 15px 30px; border-radius: 10px; text-decoration: none; font-weight: bold; display: inline-block;">Contactar Lead</a>
          </div>
        </div>
      `
    });

    return { success: true };
  } catch (error) {
    console.error('[sendLeadNotification] Error:', error);
    return { success: false, error };
  }
}
