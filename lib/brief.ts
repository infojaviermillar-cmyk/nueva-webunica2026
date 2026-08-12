import { supabase } from '@/lib/supabase/client';
import { BriefProject, BriefStatus } from '@/types/brief';

const STORAGE_KEY_PREFIX = 'webunica_brief_';

export function createEmptyBrief(companyName = 'Nuevo Proyecto', token?: string): BriefProject {
  const generatedToken = token || companyName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `brief-${Date.now()}`;
  const now = new Date().toISOString();

  return {
    id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `brief_${Date.now()}`,
    token: generatedToken,
    createdAt: now,
    updatedAt: now,
    status: 'Cliente completando',
    projectInfo: {
      companyName: companyName === 'Nuevo Proyecto' ? '' : companyName,
      currentWebsite: '',
      newStoreDomain: '',
      projectLeadName: '',
      projectLeadRole: '',
      email: '',
      phone: '',
      projectType: 'Nueva tienda Shopify',
      projectDescription: '',
    },
    brandIdentity: {
      hasBrandManual: 'No',
      brandManualFiles: [],
      logoFiles: [],
      colors: [
        { hex: '#7850FA', name: 'Morado Corporativo' },
        { hex: '#09090B', name: 'Negro Fondo' }
      ],
      typography: {
        primary: 'Inter / Outfit',
        secondary: 'Roboto / sans-serif',
      },
      mandatoryElements: '',
      elementsToChange: '',
    },
    brandPersonality: {
      attributes: ['Moderna', 'Profesional', 'Confiable'],
      threeWords: ['', '', ''],
    },
    targetAudience: {
      primaryCustomer: '',
      ageRange: '25–34',
      purchaseMotivations: ['Calidad', 'Confianza', 'Rapidez'],
      productKnowledge: 'Tiene una idea, pero necesita orientación',
    },
    valueProposition: {
      whyBuyHere: '',
      strengths: ['Calidad', 'Despacho rápido', 'Atención'],
    },
    visualDirection: {
      generalDesign: 3,
      personality: 3,
      positioning: 4,
      photoUsage: 3,
      colorUsage: 3,
      informationDensity: 2,
      promotionsProminence: 2,
      shoppingExperience: 4,
      navigationStyle: 4,
    },
    references: {
      positiveReferences: [],
      negativeReferences: [],
      competitors: [],
    },
    homepagePriorities: {
      orderedModules: [
        'Hero principal',
        'Categorías',
        'Productos destacados',
        'Más vendidos',
        'Beneficios',
        'Ofertas',
        'Marcas',
        'Testimonios',
        'Novedades',
        'Productos recomendados',
        'Servicios',
        'Contenido / Blog',
        'Newsletter',
        'Tiendas físicas',
        'Redes sociales',
        'Promociones',
        'Historia de la empresa'
      ],
      topFiveModules: ['Hero principal', 'Categorías', 'Productos destacados', 'Más vendidos', 'Beneficios'],
    },
    heroPreferences: {
      mainMessage: 'Promoción',
      visualProtagonist: 'Productos',
      useSlider: 'No',
      maxSlides: 3,
    },
    categoriesAndBrands: {
      priorityCategories: ['Categoría Principal A', 'Categoría Principal B'],
      discoveryMethods: ['Categoría', 'Buscador', 'Recomendaciones'],
      brandImportanceScale: 3,
      priorityBrands: [],
      showBrandsOnHome: 'Por definir',
    },
    productPagePriorities: {
      featuredElements: [
        'Fotografías',
        'Nombre',
        'Precio',
        'Precio oferta',
        'Variantes',
        'Características',
        'Despacho',
        'Opiniones'
      ],
      aboveTheFoldElements: ['Fotografías', 'Nombre', 'Precio', 'Precio oferta', 'Variantes', 'Despacho'],
    },
    clientDoubts: {
      commonPrePurchaseQuestions: '',
      abandonmentReasons: ['Precio', 'Despacho', 'Falta de información'],
      trustElements: ['Reseñas', 'Garantía', 'Compra segura', 'Medios de pago', 'Despacho', 'WhatsApp'],
      mobileKeyActions: ['Buscar', 'Navegar categorías', 'Agregar al carrito', 'WhatsApp'],
    },
    contentAndScope: {
      contentTypes: ['Guías', 'Preguntas frecuentes'],
      contentRole: 'Todas las anteriores',
      priorityScreens: ['Home desktop', 'Ficha producto desktop', 'Home mobile', 'Ficha producto mobile'],
      additionalNotes: '',
      additionalFiles: [],
    },
  };
}

/**
 * Carga un brief por su token (vía Supabase o localStorage fallback).
 */
export async function getBriefByToken(token: string): Promise<BriefProject | null> {
  // 1. Intentar cargar desde localStorage
  if (typeof window !== 'undefined') {
    const localData = localStorage.getItem(`${STORAGE_KEY_PREFIX}${token}`);
    if (localData) {
      try {
        return JSON.parse(localData) as BriefProject;
      } catch (e) {
        console.error('Error parseando localStorage brief:', e);
      }
    }
  }

  // 2. Intentar cargar desde Supabase si cliente existe
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('webunica_briefs')
        .select('*')
        .eq('token', token)
        .maybeSingle();

      if (data && !error) {
        const project: BriefProject = {
          id: data.id,
          token: data.token,
          createdAt: data.created_at,
          updatedAt: data.updated_at,
          status: data.status as BriefStatus,
          projectInfo: data.project_info || {},
          brandIdentity: data.brand_identity || {},
          brandPersonality: data.brand_personality || {},
          targetAudience: data.target_audience || {},
          valueProposition: data.value_proposition || {},
          visualDirection: data.visual_direction || {},
          references: data.references_data || {},
          homepagePriorities: data.homepage_priorities || {},
          heroPreferences: data.hero_preferences || {},
          categoriesAndBrands: data.categories_and_brands || {},
          productPagePriorities: data.product_page_priorities || {},
          clientDoubts: data.client_doubts || {},
          contentAndScope: data.content_and_scope || {},
          aiAnalysis: data.ai_analysis || undefined,
        };

        // Guardar copia local de respaldo
        if (typeof window !== 'undefined') {
          localStorage.setItem(`${STORAGE_KEY_PREFIX}${token}`, JSON.stringify(project));
        }

        return project;
      }
    } catch (e) {
      console.warn('Supabase no disponible o error:', e);
    }
  }

  return null;
}

/**
 * Guarda o actualiza un brief (vía Supabase y localStorage).
 */
export async function saveBrief(brief: BriefProject): Promise<boolean> {
  const updatedBrief = {
    ...brief,
    updatedAt: new Date().toISOString(),
  };

  // 1. Guardar en localStorage inmediatamente
  if (typeof window !== 'undefined') {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}${brief.token}`, JSON.stringify(updatedBrief));
    // Guardar también en la lista general de briefs
    saveToBriefListIndex(updatedBrief);
  }

  // 2. Intentar guardar en Supabase si está disponible
  if (supabase) {
    try {
      const row = {
        id: updatedBrief.id,
        token: updatedBrief.token,
        company_name: updatedBrief.projectInfo.companyName || 'Sin Nombre',
        status: updatedBrief.status,
        project_info: updatedBrief.projectInfo,
        brand_identity: updatedBrief.brandIdentity,
        brand_personality: updatedBrief.brandPersonality,
        target_audience: updatedBrief.targetAudience,
        value_proposition: updatedBrief.valueProposition,
        visual_direction: updatedBrief.visualDirection,
        references_data: updatedBrief.references,
        homepage_priorities: updatedBrief.homepagePriorities,
        hero_preferences: updatedBrief.heroPreferences,
        categories_and_brands: updatedBrief.categoriesAndBrands,
        product_page_priorities: updatedBrief.productPagePriorities,
        client_doubts: updatedBrief.clientDoubts,
        content_and_scope: updatedBrief.contentAndScope,
        ai_analysis: updatedBrief.aiAnalysis || {},
        updated_at: updatedBrief.updatedAt,
      };

      const { error } = await supabase.from('webunica_briefs').upsert(row, { onConflict: 'token' });
      if (error) {
        console.warn('Advertencia al guardar en Supabase:', error.message);
      }
    } catch (e) {
      console.warn('Error al guardar en Supabase (usando local fallback):', e);
    }
  }

  return true;
}

/**
 * Obtiene la lista completa de briefs para el dashboard administrativo (`/briefs`).
 */
export async function getAllBriefs(): Promise<BriefProject[]> {
  let list: BriefProject[] = [];

  // Cargar de Supabase si está disponible
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('webunica_briefs')
        .select('*')
        .order('updated_at', { ascending: false });

      if (data && !error && data.length > 0) {
        list = data.map((data: any) => ({
          id: data.id,
          token: data.token,
          createdAt: data.created_at,
          updatedAt: data.updated_at,
          status: data.status as BriefStatus,
          projectInfo: data.project_info || {},
          brandIdentity: data.brand_identity || {},
          brandPersonality: data.brand_personality || {},
          targetAudience: data.target_audience || {},
          valueProposition: data.value_proposition || {},
          visualDirection: data.visual_direction || {},
          references: data.references_data || {},
          homepagePriorities: data.homepage_priorities || {},
          heroPreferences: data.hero_preferences || {},
          categoriesAndBrands: data.categories_and_brands || {},
          productPagePriorities: data.product_page_priorities || {},
          clientDoubts: data.client_doubts || {},
          contentAndScope: data.content_and_scope || {},
          aiAnalysis: data.ai_analysis || undefined,
        }));
      }
    } catch (e) {
      console.warn('Error consultando briefs de Supabase:', e);
    }
  }

  // Combinar con localStorage
  if (typeof window !== 'undefined') {
    const indexData = localStorage.getItem('webunica_briefs_index');
    if (indexData) {
      try {
        const localIndex = JSON.parse(indexData) as BriefProject[];
        const dbTokens = new Set(list.map(b => b.token));
        const missingLocals = localIndex.filter(b => !dbTokens.has(b.token));
        list = [...list, ...missingLocals];
      } catch (e) {
        console.error('Error parseando webunica_briefs_index:', e);
      }
    }
  }

  // Si la lista está vacía, crear uno inicial de ejemplo
  if (list.length === 0) {
    const defaultBrief = createEmptyBrief('Gerolamo Ecommerce', 'gerolamo-2026');
    defaultBrief.projectInfo.companyName = 'Gerolamo Chile';
    defaultBrief.projectInfo.projectLeadName = 'Javier Millar';
    defaultBrief.projectInfo.email = 'contacto@gerolamo.cl';
    defaultBrief.projectInfo.projectDescription = 'Tienda especializada en calzado y cuero de alta gama en Chile.';
    defaultBrief.status = 'Aprobado';
    saveBrief(defaultBrief);
    list.push(defaultBrief);
  }

  return list;
}

function saveToBriefListIndex(brief: BriefProject) {
  if (typeof window === 'undefined') return;
  try {
    const indexData = localStorage.getItem('webunica_briefs_index');
    let list: BriefProject[] = indexData ? JSON.parse(indexData) : [];
    const index = list.findIndex(b => b.token === brief.token || b.id === brief.id);
    if (index >= 0) {
      list[index] = brief;
    } else {
      list.unshift(brief);
    }
    localStorage.setItem('webunica_briefs_index', JSON.stringify(list));
  } catch (e) {
    console.error('Error actualizando índice local de briefs:', e);
  }
}
