import { BriefProject, AIAnalysisResult } from '@/types/brief';

/**
 * Genera un análisis estratégico guiado por IA o reglas avanzadas de diseño UX/UI.
 */
export function generateAIAnalysis(brief: BriefProject): AIAnalysisResult {
  const company = brief.projectInfo.companyName || 'La Marca';
  const personalityStr = brief.brandPersonality.attributes.join(', ') || 'Moderna, Profesional';
  const targetAudience = brief.targetAudience.primaryCustomer || 'clientes exigentes en Chile';
  
  // 1. Resumen Ejecutivo
  const positioning = brief.visualDirection.positioning >= 4 ? 'premium y exclusivo' : 'accesible y masivo';
  const designStyle = brief.visualDirection.generalDesign <= 2 ? 'minimalista y limpio' : 'visual y de alto impacto';
  const navigationType = brief.visualDirection.navigationStyle >= 4 ? 'orientada a búsqueda rápida y estructura de categorías' : 'inspiracional y orientada a descubrimiento';
  
  const executiveSummary = `${company} busca posicionarse con un e-commerce de carácter ${positioning}, con una estética ${designStyle} y atributos clave de marca: ${personalityStr}. La experiencia de usuario debe priorizar una navegación ${navigationType}, dirigida a ${targetAudience}. El Home combinará descubrimiento de productos ganadores con una sólida arquitectura de elementos de confianza local.`;

  // 2. 5 Principios de Diseño
  const designPrinciples: string[] = [
    `1. ${brief.visualDirection.generalDesign <= 2 ? 'Espacio blanco generoso y tipografía clara' : 'Visuales de alto impacto y jerarquía audaz'}: Destacar la propuesta de valor de ${company} sin saturar la atención.`,
    `2. Descubrimiento de producto eficiente: Acceso rápido a las categorías principales (${brief.categoriesAndBrands.priorityCategories.slice(0, 3).join(', ') || 'Catálogo general'}) en menos de 2 clics.`,
    `3. Jerarquía visual transparente: Priorizar el precio, las variantes y los llamados a la acción (${brief.productPagePriorities.aboveTheFoldElements.slice(0, 3).join(', ') || 'Compra inmediata'}) antes de hacer scroll.`,
    `4. Confianza local omnipresente: Visibilidad destacada de pasarelas de pago chilenas, despacho expreso y canales de soporte directo (WhatsApp).`,
    `5. Enfoque Mobile-First nativo: Optimización de touch-targets, filtros flotantes y checkout ultra-rápido en smartphones.`,
  ];

  // 3. Prioridades UX (5 a 10)
  const uxPriorities: string[] = [
    `Construir un Hero Section que comunique inmediatamente la propuesta de valor y dirija al producto estrella.`,
    `Organizar los primeros 5 módulos del Home en el orden estratégico: ${brief.homepagePriorities.topFiveModules.join(' → ')}.`,
    `Garantizar la visibilidad instantánea de información crítica pre-compra: ${brief.productPagePriorities.aboveTheFoldElements.slice(0, 4).join(', ')}.`,
    `Implementar sellos de confianza visuales para mitigar objeciones comunes (${brief.clientDoubts.abandonmentReasons.slice(0, 3).join(', ')}).`,
    `Optimizar el flujo de interacción móvil para: ${brief.clientDoubts.mobileKeyActions.slice(0, 4).join(', ')}.`,
    `Incluir prueba social y opiniones destacadas en la ficha de producto para acelerar la conversión.`,
  ];

  // 4. Riesgos a Evitar
  const risksToAvoid: string[] = [
    `Sobrecargar el Home con sliders innecesarios o más de 5 módulos promocionales competidores.`,
    `Esconder las especificaciones técnicas o costos de despacho detrás de pestañas de difícil acceso.`,
    `Crear categorías ambiguas o menús desplegables complejos que aumenten la fricción en teléfonos móviles.`,
    `Usar fotografías inconsistentes o de baja resolución que comprometan la percepción de marca.`,
    `Inconsistencia visual entre la versión Desktop y Mobile de los elementos interactivos clave.`,
  ];

  return {
    executiveSummary,
    designPrinciples,
    uxPriorities,
    risksToAvoid,
    generatedAt: new Date().toISOString(),
  };
}
