import { OpenAI } from 'openai';

// Inicializar perezosamente para no romper el build de Next.js si la variable no está en el entorno local
let openaiInstance: OpenAI | null = null;
function getOpenAI() {
  if (!openaiInstance) {
    openaiInstance = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || 'dummy_key_for_build',
    });
  }
  return openaiInstance;
}

export type GeneratedPost = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  seo_title: string;
  seo_description: string;
  cover_image_alt: string;
  cover_image_prompt: string; // Prompt used for DALL-E image generation
};

/**
 * Genera un artículo de blog SEO-optimizado con imagen de portada
 */
export async function generateBlogPost(topic: string, keywords: string[]): Promise<GeneratedPost & { cover_image: string }> {
  const prompt = `
    Actúa como experto SEO y redactor técnico para Webunica.cl, agencia líder en Shopify y Next.js en Chile.
    
    TEMA: ${topic}
    PALABRAS CLAVE: ${keywords.join(', ')}
    
    REGLAS:
    1. Artículo de mínimo 1000 palabras en HTML (solo <p>, <h2>, <h3>, <ul>, <li>, <strong>, <em>, <blockquote>).
    2. Incluir al menos 3 subtítulos H2 con variantes de las words clave.
    3. Tono profesional y persuasivo, orientado a conversión hacia Webunica.cl.
    4. Intro atractiva + conclusión con CTA hacia servicios de Webunica.
    5. Densidad natural de keywords (sin keyword stuffing).
    
    RESPONDE ÚNICAMENTE EN JSON:
    {
      "title": "Título H1 atractivo con keyword principal",
      "slug": "url-amigable-seo",
      "excerpt": "Resumen de 150 chars máx para listing",
      "content": "<p>HTML del artículo...</p>",
      "seo_title": "Título SEO (máx 60 chars)",
      "seo_description": "Meta descripción SEO (máx 160 chars) con keyword + CTA",
      "cover_image_alt": "Alt descriptivo SEO para imagen (máx 120 chars)",
      "cover_image_prompt": "Prompt en inglés para DALL-E 3: modern flat design illustration of [tema], Chilean tech startup, purple and green brand colors, clean background, no text"
    }
  `;

  const openai = getOpenAI();
  // 1. Generamos el texto del artículo
  const textResponse = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }],
    response_format: { type: 'json_object' },
    temperature: 0.7,
  });

  const textContent = textResponse.choices[0].message.content;
  if (!textContent) throw new Error('No se generó contenido de texto');

  const postData = JSON.parse(textContent) as GeneratedPost;

  // 2. Generamos la imagen de portada con DALL-E 3
  let cover_image = '';
  try {
    const openai = getOpenAI();
    const imageResponse = await openai.images.generate({
      model: 'dall-e-3',
      prompt: postData.cover_image_prompt || 
        `Modern flat design illustration about "${topic}" for a web development agency in Chile. Purple #8B5CF6 and green #10B981 brand colors, minimalist, professional, no text in image.`,
      n: 1,
      size: '1792x1024', // Landscape para imagen de portada de blog
      quality: 'standard',
    });
    cover_image = imageResponse.data[0]?.url || '';
  } catch (imgError) {
    console.warn('[openai] DALL-E generation failed, using placeholder:', imgError);
    // Fallback: imagen genérica de Unsplash con query relevante
    const query = encodeURIComponent(keywords[0] || topic);
    cover_image = `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80`;
  }

  return {
    ...postData,
    cover_image,
  };
}
