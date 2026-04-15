import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export type GeneratedPost = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  seo_title: string;
  seo_description: string;
};

/**
 * Genera un artículo de blog SEO-optimizado basado en un tema/keywords
 */
export async function generateBlogPost(topic: string, keywords: string[]): Promise<GeneratedPost> {
  const prompt = `
    Actúa como un experto en SEO y Redacción de Contenidos Técnicos para Webunica.cl, una agencia líder en desarrollo Shopify y Next.js en Chile.
    
    TEMA DEL ARTÍCULO: ${topic}
    PALABRAS CLAVE: ${keywords.join(', ')}
    
    INSTRUCCIONES:
    1. Genera un artículo de blog de al menos 1000 palabras en formato HTML (solo etiquetas de contenido como <p>, <h2>, <h3>, <ul>, <li>, <strong>, <em>).
    2. El tono debe ser profesional, experto y persuasivo (enfocado a conversión).
    3. Asegura una densidad natural de las palabras clave.
    4. Estructura el contenido con subtítulos (H2, H3) que incluyan variantes de las palabras clave.
    5. Incluye una introducción atractiva y una conclusión con un Call to Action hacia los servicios de Webunica.
    6. Genera también metadatos específicos para SEO.
    
    RESPONDE ÚNICAMENTE EN FORMATO JSON con la siguiente estructura:
    {
      "title": "Título H1 atractivo",
      "slug": "url-amigable-del-post",
      "excerpt": "Resumen corto de 150 caracteres para la lista de blogs",
      "content": "Contenido completo en HTML",
      "seo_title": "Título SEO (máx 60 caracteres)",
      "seo_description": "Meta descripción SEO (máx 160 caracteres)"
    }
  `;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o', // Usamos el modelo más capaz para SEO
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
      temperature: 0.7,
    });

    const content = response.choices[0].message.content;
    if (!content) throw new Error('No se generó contenido');

    return JSON.parse(content) as GeneratedPost;
  } catch (error) {
    console.error('Error in OpenAI generation:', error);
    throw new Error('Fallo al generar el artículo. Verifica tu API Key.');
  }
}
