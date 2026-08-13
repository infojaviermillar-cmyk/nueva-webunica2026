// =====================================================================
// WEBUNICA INTELLIGENCE — TypeScript Types (Etapa 1)
// =====================================================================

// ─── Data Provenance ─────────────────────────────────────────────────
export type DataSource = 
  | 'MEASURED'      // Dato medido directamente (crawl, HTTP response)
  | 'IMPORTED'      // Importado desde API externa (GSC, DataForSEO)
  | 'CALCULATED'    // Calculado determinísticamente desde datos medidos
  | 'AI_INFERRED'   // Interpretado/inferido por IA — NUNCA mezclar con MEASURED
  | 'ESTIMATED';    // Estimación documentada

// ─── Organizations ───────────────────────────────────────────────────
export type OrgPlan = 'free' | 'pro' | 'agency';

export interface IntelOrganization {
  id: string;
  owner_id: string;
  name: string;
  slug: string;
  plan: OrgPlan;
  settings: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

// ─── Projects ────────────────────────────────────────────────────────
export type ProjectType = 'website' | 'ecommerce' | 'blog';
export type ProjectStatus = 'active' | 'paused' | 'archived';

export interface IntelProject {
  id: string;
  org_id: string;
  name: string;
  domain: string;
  industry?: string;
  country: string;
  language: string;
  description?: string;
  objective?: string;
  project_type: ProjectType;
  status: ProjectStatus;
  settings: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface CreateProjectInput {
  org_id: string;
  name: string;
  domain: string;
  industry?: string;
  country?: string;
  language?: string;
  description?: string;
  objective?: string;
  project_type?: ProjectType;
}

// ─── Analysis Jobs ───────────────────────────────────────────────────
export type JobType = 'full_analysis' | 'crawl_only' | 'seo_only';
export type JobStatus = 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';

export interface IntelAnalysisJob {
  id: string;
  project_id: string;
  org_id: string;
  job_type: JobType;
  status: JobStatus;
  progress: number;      // 0-100
  pages_found?: number;
  pages_crawled?: number;
  started_at?: string;
  completed_at?: string;
  error_message?: string;
  metadata: Record<string, unknown>;
  result?: JobResult;
  estimated_cost_usd?: number;
  created_at: string;
  updated_at: string;
}

export interface JobResult {
  score?: number;
  pages_analyzed?: number;
  issues_critical?: number;
  issues_warning?: number;
  keywords_found?: number;
  opportunities_count?: number;
  summary?: string;   // AI_INFERRED — siempre marcado
}

// ─── Job Logs ────────────────────────────────────────────────────────
export type LogLevel = 'info' | 'warn' | 'error' | 'debug';

export interface IntelJobLog {
  id: string;
  job_id: string;
  level: LogLevel;
  message: string;
  data?: Record<string, unknown>;
  created_at: string;
}

// ─── Crawl Pages ─────────────────────────────────────────────────────
export type PageType = 'homepage' | 'category' | 'product' | 'blog_post' | 'contact' | 'about' | 'legal' | 'other';

export interface SEOIssue {
  code: string;            // 'MISSING_TITLE', 'DUPLICATE_H1', etc.
  severity: 'critical' | 'warning' | 'info';
  message: string;
  recommendation: string;
  data_source: 'MEASURED' | 'CALCULATED';
}

export interface IntelCrawlPage {
  id: string;
  job_id: string;
  project_id: string;
  url: string;
  url_normalized: string;
  status_code?: number;
  redirect_url?: string;
  depth: number;
  response_time_ms?: number;
  word_count?: number;
  is_indexable?: boolean;
  canonical_url?: string;
  robots_directive?: string;
  page_type?: PageType;
  crawled_at: string;

  // SEO On-Page
  title?: string;
  title_length?: number;
  meta_description?: string;
  meta_desc_length?: number;
  h1?: string[];
  h2?: string[];
  h3?: string[];
  images_total?: number;
  images_missing_alt?: number;
  links_internal?: number;
  links_external?: number;
  links_broken?: number;

  // Score
  seo_score?: number;     // 0-100 CALCULATED
  seo_issues: SEOIssue[];
  raw_data_source: 'crawler'; // always MEASURED
}

// ─── Raw Crawl Data (antes de persistir) ────────────────────────────
export interface CrawledPageData {
  url: string;
  url_normalized: string;
  status_code: number;
  redirect_url?: string;
  depth: number;
  response_time_ms: number;
  html?: string;
  word_count: number;
  is_indexable: boolean;
  canonical_url?: string;
  robots_directive?: string;
  page_type: PageType;

  title?: string;
  title_length: number;
  meta_description?: string;
  meta_desc_length: number;
  h1: string[];
  h2: string[];
  h3: string[];
  images_total: number;
  images_missing_alt: number;
  links_internal: string[];    // hrefs internos
  links_external: string[];    // hrefs externos
  error?: string;

  // Added during SEO analysis phase
  seo_score?: number;
  seo_issues?: SEOIssue[];
}

// ─── Keywords ────────────────────────────────────────────────────────
export type KeywordIntent = 'informational' | 'commercial' | 'transactional' | 'navigational' | 'local';

export interface IntelKeyword {
  id: string;
  project_id: string;
  job_id: string;
  keyword: string;
  keyword_normalized: string;
  intent?: KeywordIntent;
  intent_source: DataSource;
  frequency: number;
  pages_count: number;
  found_in: string[];
  cluster?: string;
  // Métricas externas — NULL = Sin datos (nunca inventar)
  volume?: number;
  volume_source?: string;
  volume_retrieved_at?: string;
  difficulty?: number;
  cpc?: number;
  created_at: string;
}

// ─── Intelligence Scores ─────────────────────────────────────────────
export interface IntelScore {
  id: string;
  project_id: string;
  job_id: string;
  score: number;               // 0-100 global
  score_version: string;       // 'v1'
  score_technical_seo?: number;
  score_content?: number;
  score_on_page?: number;
  score_architecture?: number;
  score_opportunity?: number;
  score_components: ScoreComponents;
  pages_analyzed: number;
  issues_critical: number;
  issues_warning: number;
  keywords_found: number;
  opportunities_count: number;
  calculated_at: string;
}

export interface ScoreComponents {
  technical_seo: ScoreComponent;
  content: ScoreComponent;
  on_page: ScoreComponent;
  architecture: ScoreComponent;
  opportunity: ScoreComponent;
}

export interface ScoreComponent {
  score: number;           // 0-100
  weight: number;          // 0-1, suma de pesos = 1
  issues: string[];        // códigos de issues que afectaron
  positives: string[];     // factores positivos detectados
  explanation: string;     // texto legible
}

// ─── Recommendations ─────────────────────────────────────────────────
export type RecommendationCategory = 'technical_seo' | 'content' | 'on_page' | 'architecture' | 'opportunity';
export type RecommendationPriority = 'critical' | 'high' | 'medium' | 'low';
export type RecommendationStatus = 'detected' | 'planned' | 'in_progress' | 'completed' | 'dismissed';

export interface IntelRecommendation {
  id: string;
  project_id: string;
  job_id: string;
  category: RecommendationCategory;
  priority: RecommendationPriority;
  status: RecommendationStatus;
  title: string;
  problem: string;
  recommendation: string;
  impact: 'Alto' | 'Medio' | 'Bajo';
  effort: 'Bajo' | 'Medio' | 'Alto';
  affected_url?: string;
  affected_urls?: string[];
  data_source: DataSource;
  ai_explanation?: string;   // presente solo si data_source === 'AI_INFERRED'
  created_at: string;
  updated_at: string;
}

// ─── AI Analysis Result ───────────────────────────────────────────────
// SIEMPRE marcado como AI_INFERRED — nunca mezclar con datos medidos
export interface AIAnalysisResult {
  source: 'AI_INFERRED';
  model: string;             // 'gpt-4o'
  generated_at: string;
  executive_summary: string;
  main_strengths: string[];
  main_problems: string[];
  opportunities: string[];
  recommended_pages: Array<{ title: string; reason: string }>;
  recommended_content: Array<{ topic: string; intent: KeywordIntent; reason: string }>;
  priorities: string[];
  tokens_used: number;
  estimated_cost_usd: number;
}

// ─── Crawler Config ───────────────────────────────────────────────────
export interface CrawlerConfig {
  max_pages: number;         // default: 50
  max_depth: number;         // default: 4
  timeout_ms: number;        // default: 10000
  rate_limit_ms: number;     // default: 500 ms entre requests
  follow_redirects: boolean; // default: true
  max_redirects: number;     // default: 5
  respect_robots: boolean;   // default: true — NUNCA deshabilitar en prod
  user_agent: string;
}

// ─── Dashboard Summary ────────────────────────────────────────────────
export interface ProjectDashboard {
  project: IntelProject;
  latest_job?: IntelAnalysisJob;
  latest_score?: IntelScore;
  pages_summary: {
    total: number;
    indexable: number;
    with_issues: number;
    avg_response_ms?: number;
  };
  keywords_summary: {
    total: number;
    by_intent: Record<KeywordIntent, number>;
  };
  recommendations_summary: {
    critical: number;
    high: number;
    medium: number;
    low: number;
  };
  score_history: Array<{ score: number; calculated_at: string }>;
}

// ─── API Response Types ───────────────────────────────────────────────
export interface APISuccess<T> {
  success: true;
  data: T;
}

export interface APIError {
  success: false;
  error: string;
  code?: string;
}

export type APIResponse<T> = APISuccess<T> | APIError;
