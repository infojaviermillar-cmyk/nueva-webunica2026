export interface ContractData {
  // Cotización
  cotizacionNumero: string;
  
  // Proveedor (Webunica)
  proveedorRazonSocial: string;
  proveedorRut: string;
  proveedorRepresentante: string;
  proveedorRepresentanteRut: string;
  proveedorDireccion: string;

  // Cliente
  clienteRazonSocial: string;
  clienteRut: string;
  clienteRepresentante: string;
  clienteRepresentanteRut: string;
  clienteDireccion: string;

  // Servicio / Plan
  planNombre: string;
  planDescripcion: string;
  valorNeto: number;
  ivaPorcentaje: number;

  // Fechas y duracion
  fechaContrato: string; // ISO date 'YYYY-MM-DD'
  duracionSemanas: number;
  holguraSemanas: number;
  sistemaFacturacion: string; // Wasabil, etc.

  // Hitos de pago
  hitosPago: {
    nombre: string;
    porcentaje: number;
    montoNeto: number;
    montoIva: number;
    montoTotal: number;
  }[];

  // Gantt Milestones
  ganttEtapas: {
    semana: string;
    fechas: string;
    disenoUxUi: string;
    desarrolloShopify: string;
    entregable: string;
    pagoPct: string;
  }[];
}

export const PACIFIC_COLOR_PRESET: ContractData = {
  cotizacionNumero: "WU_2026-1770",
  
  proveedorRazonSocial: "WEBUNICA CHILE E.I.R.L.",
  proveedorRut: "76.371.864-6",
  proveedorRepresentante: "JOSE JAVIER MILLAR VELÁSQUEZ",
  proveedorRepresentanteRut: "12.933.896-2",
  proveedorDireccion: "Merced 838-A, Oficina 117, Santiago",

  clienteRazonSocial: "IMPORTADORA PACIFIC COLOR S.A.",
  clienteRut: "77.525.500-5",
  clienteRepresentante: "RODOLFO ARIAS TUTERA",
  clienteRepresentanteRut: "9.955.576-9",
  clienteDireccion: "Cerro El Plomo 3780, Placilla, Valparaíso",

  planNombre: "Shopify CUSTOM ELITE",
  planDescripcion: "Desarrollo e implementación de tienda online Shopify Custom Elite con diseño UX/UI en Figma, integraciones de pago locales, envíos, facturación electrónica y optimización CRO + SEO.",
  valorNeto: 2200000,
  ivaPorcentaje: 19,

  fechaContrato: "2026-07-27",
  duracionSemanas: 6,
  holguraSemanas: 2,
  sistemaFacturacion: "Wasabil",

  hitosPago: [
    { nombre: "Inicio del proyecto", porcentaje: 25, montoNeto: 550000, montoIva: 104500, montoTotal: 654500 },
    { nombre: "Aprobación UX/UI", porcentaje: 25, montoNeto: 550000, montoIva: 104500, montoTotal: 654500 },
    { nombre: "Desarrollo e integraciones", porcentaje: 25, montoNeto: 550000, montoIva: 104500, montoTotal: 654500 },
    { nombre: "Puesta en producción", porcentaje: 25, montoNeto: 550000, montoIva: 104500, montoTotal: 654500 }
  ],

  ganttEtapas: [
    { semana: "Semana 0", fechas: "27-07-2026", disenoUxUi: "Reunión kickoff y levantamiento de marca", desarrolloShopify: "Creación de cuenta Shopify Partner e invitación", entregable: "Cuenta Shopify creada y accesos solicitados", pagoPct: "-" },
    { semana: "Semana 1", fechas: "27-07 al 02-08", disenoUxUi: "Wireframes, referencias e identidad visual", desarrolloShopify: "Recepción de accesos WordPress/WooCommerce y exportación de productos", entregable: "Arquitectura del sitio y catálogo exportado", pagoPct: "25%" },
    { semana: "Semana 2", fechas: "03-08 al 09-08", disenoUxUi: "Diseño Figma de Home, categorías y ficha de producto", desarrolloShopify: "Configuración Shopify: dominio, impuestos y checkout", entregable: "Diseño UX/UI aprobado", pagoPct: "25%" },
    { semana: "Semana 3", fechas: "10-08 al 16-08", disenoUxUi: "Ajustes de diseño y QA visual", desarrolloShopify: "Implementación del theme Shopify", entregable: "Avance funcional de la tienda", pagoPct: "-" },
    { semana: "Semana 4", fechas: "17-08 al 23-08", disenoUxUi: "Soporte al desarrollo", desarrolloShopify: "Integraciones de ERP, pagos, logística y facturación electrónica Wasabil o equivalente; carga de productos", entregable: "Integraciones completas", pagoPct: "25%" },
    { semana: "Semana 5", fechas: "24-08 al 30-08", disenoUxUi: "QA visual final", desarrolloShopify: "SEO técnico, GA4, GTM, Meta Pixel y Google Merchant Center", entregable: "QA técnico y analítica implementada", pagoPct: "-" },
    { semana: "Semana 6", fechas: "31-08 al 06-09", disenoUxUi: "Validación final con EL CLIENTE", desarrolloShopify: "Puesta en producción y capacitación", entregable: "Sitio publicado y capacitación realizada", pagoPct: "25%" },
    { semana: "Semana 7", fechas: "07-09 al 13-09", disenoUxUi: "Ajustes menores", desarrolloShopify: "Holgura operacional y soporte posterior a publicación", entregable: "Soporte post publicación", pagoPct: "-" },
    { semana: "Semana 8", fechas: "14-09 al 20-09", disenoUxUi: "Ajustes menores", desarrolloShopify: "Holgura operacional", entregable: "Cierre administrativo del proyecto", pagoPct: "-" }
  ]
};

export const PRESET_FULL_SHOPIFY: ContractData = {
  cotizacionNumero: "WU_2026-FULL",
  
  proveedorRazonSocial: "WEBUNICA CHILE E.I.R.L.",
  proveedorRut: "76.371.864-6",
  proveedorRepresentante: "JOSE JAVIER MILLAR VELÁSQUEZ",
  proveedorRepresentanteRut: "12.933.896-2",
  proveedorDireccion: "Merced 838-A, Oficina 117, Santiago",

  clienteRazonSocial: "MI EMPRESA SPA",
  clienteRut: "76.000.000-0",
  clienteRepresentante: "NOMBRE REPRESENTANTE",
  clienteRepresentanteRut: "15.000.000-0",
  clienteDireccion: "Av. Providencia 1234, Santiago",

  planNombre: "Shopify / WooCommerce Full",
  planDescripcion: "Desarrollo de tienda online completa con plantilla optimizada, pasarelas de pago chilenas, despacho e integración de boleta SII.",
  valorNeto: 850000,
  ivaPorcentaje: 19,

  fechaContrato: new Date().toISOString().split('T')[0],
  duracionSemanas: 3,
  holguraSemanas: 1,
  sistemaFacturacion: "Wasabil / Bsale",

  hitosPago: [
    { nombre: "Inicio del proyecto", porcentaje: 50, montoNeto: 425000, montoIva: 80750, montoTotal: 505750 },
    { nombre: "Puesta en producción y entrega", porcentaje: 50, montoNeto: 425000, montoIva: 80750, montoTotal: 505750 }
  ],

  ganttEtapas: [
    { semana: "Semana 1", fechas: "Días 1 al 7", disenoUxUi: "Levantamiento de marca y catálogo", desarrolloShopify: "Setup Shopify, dominio y medios de pago", entregable: "Estructura inicial de tienda", pagoPct: "50%" },
    { semana: "Semana 2", fechas: "Días 8 al 14", disenoUxUi: "Diseño de banners e identidad", desarrolloShopify: "Carga de catálogo e integraciones de despacho", entregable: "Tienda funcional para revisión", pagoPct: "-" },
    { semana: "Semana 3", fechas: "Días 15 al 21", disenoUxUi: "QA visual y pruebas de pago", desarrolloShopify: "SEO inicial, capacitación y publicación", entregable: "Sitio publicado y capacitación", pagoPct: "50%" }
  ]
};

export function formatCLP(amount: number): string {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
  }).format(amount);
}
