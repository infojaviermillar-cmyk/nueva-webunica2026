export interface ContractData {
  // Cotización
  cotizacionNumero: string;
  nombreMarca: string;
  
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

  // Parámetros Dinámicos Solicitados
  cantidadProductos: number;  // Ej: 1000
  diasGarantia: number;       // Ej: 90
  nombreErp: string;          // Ej: "Nebula", "Bsale", "Obuma"
  sistemaFacturacion: string; // Ej: "Wasabil", "Haulmer", "Lioren"

  // Fechas y duracion
  fechaContrato: string; // ISO date 'YYYY-MM-DD'
  duracionSemanas: number;
  holguraSemanas: number;

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
  nombreMarca: "Maxxgo",
  
  proveedorRazonSocial: "SERVICIOS INFORMÁTICOS Y DESARROLLO DE SITIOS WEB JOSÉ JAVIER MILLAR VELÁSQUEZ E.I.R.L.",
  proveedorRut: "76.371.864-6",
  proveedorRepresentante: "JOSÉ JAVIER MILLAR VELÁSQUEZ",
  proveedorRepresentanteRut: "12.933.896-2",
  proveedorDireccion: "Merced 838-A, Oficina 117, Santiago",

  clienteRazonSocial: "IMPORTADORA PACIFIC COLOR S.A.",
  clienteRut: "77.525.500-5",
  clienteRepresentante: "RODOLFO ARIAS TUTERA",
  clienteRepresentanteRut: "9.955.576-9",
  clienteDireccion: "Cerro El Plomo 3780, Placilla, Valparaíso",

  planNombre: "SHOPIFY CUSTOM ELITE",
  planDescripcion: "Desarrollo e implementación de tienda online Shopify Custom Elite con diseño UX/UI en Figma, migración de productos, integración técnica con ERP e integración de facturación electrónica.",
  valorNeto: 2200000,
  ivaPorcentaje: 19,

  cantidadProductos: 1000,
  diasGarantia: 90,
  nombreErp: "Nebula",
  sistemaFacturacion: "Wasabil",

  fechaContrato: "2026-08-10",
  duracionSemanas: 6,
  holguraSemanas: 2,

  hitosPago: [
    { nombre: "Reserva e inicio del Proyecto (25%)", porcentaje: 25, montoNeto: 550000, montoIva: 104500, montoTotal: 654500 },
    { nombre: "Aprobación UX/UI (25%)", porcentaje: 25, montoNeto: 550000, montoIva: 104500, montoTotal: 654500 },
    { nombre: "Desarrollo, migración e integraciones (25%)", porcentaje: 25, montoNeto: 550000, montoIva: 104500, montoTotal: 654500 },
    { nombre: "Puesta en producción y capacitación (25%)", porcentaje: 25, montoNeto: 550000, montoIva: 104500, montoTotal: 654500 }
  ],

  ganttEtapas: [
    { semana: "0", fechas: "10-08-2026", disenoUxUi: "Kickoff y levantamiento de marca", desarrolloShopify: "Cuenta Shopify Partner, accesos y revisión técnica", entregable: "Inicio efectivo y anticipo pagado", pagoPct: "-" },
    { semana: "1", fechas: "10-08 al 16-08", disenoUxUi: "Wireframes, arquitectura e identidad visual", desarrolloShopify: "Exportación y diagnóstico del catálogo; revisión ERP / Facturación", entregable: "Arquitectura y catálogo preparados", pagoPct: "-" },
    { semana: "2", fechas: "17-08 al 23-08", disenoUxUi: "Diseño Figma de Home, colección y ficha", desarrolloShopify: "Configuración base: dominio, impuestos, navegación y checkout", entregable: "Propuesta UX/UI para aprobación", pagoPct: "25%" },
    { semana: "3", fechas: "24-08 al 30-08", disenoUxUi: "Ajustes consolidados y QA visual", desarrolloShopify: "Implementación del theme y componentes", entregable: "Diseño aprobado y avance funcional", pagoPct: "-" },
    { semana: "4", fechas: "31-08 al 06-09", disenoUxUi: "Soporte visual al desarrollo", desarrolloShopify: "Migración de productos; pagos, despacho, ERP y Facturación", entregable: "Migración e integraciones en pruebas", pagoPct: "25%" },
    { semana: "5", fechas: "07-09 al 13-09", disenoUxUi: "QA visual final", desarrolloShopify: "SEO técnico, GA4, GTM, Meta, Search Console y Merchant Center", entregable: "QA técnico y analítica configurada", pagoPct: "-" },
    { semana: "6", fechas: "14-09 al 20-09", disenoUxUi: "Validación final", desarrolloShopify: "Pruebas, publicación, capacitación y transferencia", entregable: "Puesta en producción y cuarto hito", pagoPct: "25%" },
    { semana: "7", fechas: "21-09 al 27-09", disenoUxUi: "Ajustes menores", desarrolloShopify: "Holgura y soporte posterior a publicación", entregable: "Corrección de incidencias menores", pagoPct: "-" },
    { semana: "8", fechas: "28-09 al 04-10", disenoUxUi: "Ajustes menores", desarrolloShopify: "Holgura operacional y cierre", entregable: "Cierre administrativo y recepción", pagoPct: "-" }
  ]
};

export const PRESET_FULL_SHOPIFY: ContractData = {
  cotizacionNumero: "WU_2026-FULL",
  nombreMarca: "Mi Marca",
  
  proveedorRazonSocial: "SERVICIOS INFORMÁTICOS Y DESARROLLO DE SITIOS WEB JOSÉ JAVIER MILLAR VELÁSQUEZ E.I.R.L.",
  proveedorRut: "76.371.864-6",
  proveedorRepresentante: "JOSÉ JAVIER MILLAR VELÁSQUEZ",
  proveedorRepresentanteRut: "12.933.896-2",
  proveedorDireccion: "Merced 838-A, Oficina 117, Santiago",

  clienteRazonSocial: "MI EMPRESA SPA",
  clienteRut: "76.000.000-0",
  clienteRepresentante: "NOMBRE REPRESENTANTE",
  clienteRepresentanteRut: "15.000.000-0",
  clienteDireccion: "Av. Providencia 1234, Santiago",

  planNombre: "FULL SHOPIFY",
  planDescripcion: "Desarrollo de tienda online completa con plantilla optimizada, pasarelas de pago chilenas, despacho e integración de boleta SII.",
  valorNeto: 850000,
  ivaPorcentaje: 19,

  cantidadProductos: 300,
  diasGarantia: 60,
  nombreErp: "Bsale",
  sistemaFacturacion: "Wasabil",

  fechaContrato: new Date().toISOString().split('T')[0],
  duracionSemanas: 3,
  holguraSemanas: 1,

  hitosPago: [
    { nombre: "Inicio del proyecto (50%)", porcentaje: 50, montoNeto: 425000, montoIva: 80750, montoTotal: 505750 },
    { nombre: "Puesta en producción y entrega (50%)", porcentaje: 50, montoNeto: 425000, montoIva: 80750, montoTotal: 505750 }
  ],

  ganttEtapas: [
    { semana: "1", fechas: "Días 1 al 7", disenoUxUi: "Levantamiento de marca y catálogo", desarrolloShopify: "Setup Shopify, dominio y medios de pago", entregable: "Estructura inicial de tienda", pagoPct: "50%" },
    { semana: "2", fechas: "Días 8 al 14", disenoUxUi: "Diseño de banners e identidad", desarrolloShopify: "Carga de catálogo e integraciones de despacho", entregable: "Tienda funcional para revisión", pagoPct: "-" },
    { semana: "3", fechas: "Días 15 al 21", disenoUxUi: "QA visual y pruebas de pago", desarrolloShopify: "SEO inicial, capacitación y publicación", entregable: "Sitio publicado y capacitación", pagoPct: "50%" }
  ]
};

export function formatCLP(amount: number): string {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
  }).format(amount);
}
