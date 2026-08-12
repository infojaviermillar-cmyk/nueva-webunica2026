export type BriefStatus = 
  | 'Borrador'
  | 'Cliente completando'
  | 'Revisión Webunica'
  | 'Aprobado'
  | 'En diseño'
  | 'Cerrado';

export type ProjectType = 
  | 'Nueva tienda Shopify'
  | 'Rediseño Shopify'
  | 'Migración a Shopify'
  | 'Optimización de tienda existente'
  | 'Otro';

export interface ProjectInfo {
  companyName: string;
  currentWebsite: string;
  newStoreDomain: string;
  projectLeadName: string;
  projectLeadRole: string;
  email: string;
  phone: string;
  projectType: ProjectType;
  projectDescription: string;
}

export interface BrandIdentity {
  hasBrandManual: 'Sí' | 'No' | 'Está en desarrollo';
  brandManualFiles?: string[];
  logoFiles?: string[];
  colors: { hex: string; name?: string }[];
  typography: {
    primary: string;
    secondary: string;
    others?: string;
  };
  mandatoryElements: string;
  elementsToChange: string;
}

export interface BrandPersonality {
  attributes: string[]; // max 5
  threeWords: [string, string, string];
}

export interface TargetAudience {
  primaryCustomer: string;
  ageRange: '18–24' | '25–34' | '35–44' | '45–54' | '55+' | 'Muy amplio';
  purchaseMotivations: string[];
  productKnowledge: 'Sí, sabe exactamente lo que busca' | 'Tiene una idea, pero necesita orientación' | 'Necesita bastante ayuda para decidir' | 'Depende de la categoría';
}

export interface ValueProposition {
  whyBuyHere: string;
  strengths: string[]; // max 5
}

export interface VisualDirectionScales {
  generalDesign: number; // 1 Minimalista <-> 5 Visual/Llamativo
  personality: number; // 1 Corporativo <-> 5 Cercano
  positioning: number; // 1 Masivo <-> 5 Premium
  photoUsage: number; // 1 Producto <-> 5 Lifestyle
  colorUsage: number; // 1 Sobrio <-> 5 Colorido
  informationDensity: number; // 1 Muy limpia <-> 5 Muy informativa
  promotionsProminence: number; // 1 Discretas <-> 5 Muy protagonistas
  shoppingExperience: number; // 1 Marketplace <-> 5 Boutique especializada
  navigationStyle: number; // 1 Inspiracional <-> 5 Orientada a búsqueda y categorías
}

export interface SiteReference {
  id: string;
  url: string;
  likedElements: string[];
  comments: string;
}

export interface CompetitorReference {
  id: string;
  companyName: string;
  url: string;
  whatTheyDoWell: string;
  whatWeCouldDoBetter: string;
  isBenchmark: boolean;
  benchmarkComments?: string;
}

export interface ReferencesSection {
  positiveReferences: SiteReference[];
  negativeReferences: { url: string; comments: string }[];
  competitors: CompetitorReference[];
}

export interface HomepagePriorities {
  orderedModules: string[];
  topFiveModules: string[]; // max 5
}

export interface HeroPreferences {
  mainMessage: 'Marca' | 'Promoción' | 'Categoría' | 'Producto' | 'Temporada' | 'Beneficio' | 'Campaña' | 'Lifestyle' | 'Otro';
  visualProtagonist: 'Productos' | 'Personas' | 'Mascotas' | 'Fotografías lifestyle' | 'Ilustraciones' | 'Promoción' | 'Marca' | 'Combinación';
  useSlider: 'Sí' | 'No' | 'Por definir';
  maxSlides: number;
}

export interface CategoriesAndBrands {
  priorityCategories: string[];
  discoveryMethods: string[];
  brandImportanceScale: number; // 1-5
  priorityBrands: string[];
  showBrandsOnHome: 'Sí' | 'No' | 'Por definir';
}

export interface ProductPagePriorities {
  featuredElements: string[];
  aboveTheFoldElements: string[]; // max 8
}

export interface ClientDoubtsAndConversion {
  commonPrePurchaseQuestions: string;
  abandonmentReasons: string[];
  trustElements: string[];
  mobileKeyActions: string[]; // max 5
}

export interface ContentAndScope {
  contentTypes: string[];
  contentRole: 'SEO' | 'Educar' | 'Inspirar' | 'Generar confianza' | 'Vender' | 'Soporte' | 'Todas las anteriores';
  priorityScreens: string[];
  additionalNotes: string;
  additionalFiles?: string[];
}

export interface AIAnalysisResult {
  executiveSummary: string;
  designPrinciples: string[];
  uxPriorities: string[];
  risksToAvoid: string[];
  generatedAt: string;
}

export interface BriefProject {
  id: string;
  token: string;
  createdAt: string;
  updatedAt: string;
  status: BriefStatus;
  
  // Data Etapas
  projectInfo: ProjectInfo;
  brandIdentity: BrandIdentity;
  brandPersonality: BrandPersonality;
  targetAudience: TargetAudience;
  valueProposition: ValueProposition;
  visualDirection: VisualDirectionScales;
  references: ReferencesSection;
  homepagePriorities: HomepagePriorities;
  heroPreferences: HeroPreferences;
  categoriesAndBrands: CategoriesAndBrands;
  productPagePriorities: ProductPagePriorities;
  clientDoubts: ClientDoubtsAndConversion;
  contentAndScope: ContentAndScope;
  
  // IA & Brief generado
  aiAnalysis?: AIAnalysisResult;
}
