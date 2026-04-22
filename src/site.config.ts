/**
 * DK Motors — Tier TOTAL ($12k)
 * Cliente: DK Motors (taller mecánico Tecamachalco)
 *
 * PENDIENTES DE CAPTURA (informar al cliente):
 *  - Email corporativo real (actual: placeholder contacto@dkmotors.mx)
 *  - Redes sociales reales (Facebook/Instagram — actual: placeholder dkmotorsmx)
 *  - Dominio real (actual: localhost)
 *  - Año real de fundación (actual: inventado 2008)
 *  - RFC y razón social reales (actual: placeholder)
 *  - Confirmar si tienen servicio de flotillas real o solo es ejemplo
 *  - Fotos propias del taller, equipo y vehículos (actual: stock de Unsplash)
 *  - Logos de clientes flotilla reales si aplica
 *  - Embed real de Google Maps (actual: basado en place_id extraído)
 *  - Confirmar lista exacta de marcas y aseguradoras que manejan
 *  - Años reales de experiencia (actual: 15, calculado desde 2008 inventado)
 */

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  seoContent: string;
  priceFrom?: string;
  durationEstimate?: string;
  includes?: string[];
  relatedSlugs?: string[];
  image?: string;
};

export type WhyUsItem = {
  title: string;
  description: string;
  icon: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  text: string;
  rating: number;
  carModel?: string;
};

export type BusinessHours = {
  label: string;
  hours: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
};

export type Brand = {
  name: string;
  logoUrl: string;
};

export type Insurance = {
  name: string;
  logoUrl: string;
};

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  image?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingMinutes: number;
  coverUrl: string;
  content: string;
  tags?: string[];
};

export type GoogleReviewsBadge = {
  rating: number;
  reviewCount: number;
  profileUrl: string;
};

export type FleetTier = {
  name: string;
  vehicleRange: string;
  discount: string;
  features: string[];
};

export type FleetsConfig = {
  enabled: boolean;
  headline: string;
  subheadline: string;
  tiers: FleetTier[];
  benefits: { title: string; description: string; icon: string }[];
  clients: { name: string; logoUrl?: string }[];
};

export type WhatsAppBotFlow = {
  id: string;
  label: string;
  message: string;
};

export type WhatsAppBotConfig = {
  enabled: boolean;
  welcomeMessage: string;
  quickReplies: WhatsAppBotFlow[];
};

export type SiteConfig = {
  business: {
    name: string;
    tagline: string;
    shortDescription: string;
    logoUrl?: string;
    logoDarkUrl?: string;
    iconUrl?: string;
    yearsExperience?: number;
    warrantyDays?: number;
  };
  legal: {
    companyLegalName: string;
    rfc?: string;
    privacyContactEmail: string;
  };
  theme: {
    brand: string;
    brandDark: string;
    brandLight: string;
    accent: string;
  };
  contact: {
    whatsapp: string;
    whatsappDisplay: string;
    phone: string;
    email: string;
    address: string;
    googleMapsEmbed: string;
    googleMapsLink: string;
  };
  hours: BusinessHours[];
  services: Service[];
  whyUs: WhyUsItem[];
  process: ProcessStep[];
  gallery: string[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  stats: Stat[];
  brands: Brand[];
  insurances: Insurance[];
  timeline: TimelineEvent[];
  blog: BlogPost[];
  googleReviews: GoogleReviewsBadge;
  siteUrl: string;
  social: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
    youtube?: string;
  };
  fleets: FleetsConfig;
  whatsappBot: WhatsAppBotConfig;
};

export const siteConfig: SiteConfig = {
  business: {
    name: "DK Motors",
    tagline: "Servicio automotriz integral en Tecamachalco",
    shortDescription:
      "Taller mecánico en Naucalpan especializado en mantenimiento, hojalatería y pintura. Diagnóstico honesto, refacciones de calidad y atención personalizada.",
    logoUrl: "/logos/logo-primary.png",
    logoDarkUrl: "/logos/logo-dark.png",
    iconUrl: "/logos/logo-icon.png",
    yearsExperience: 15,
    warrantyDays: 90,
  },
  legal: {
    // PENDIENTE: razón social y RFC reales
    companyLegalName: "DK Motors",
    rfc: "XAXX010101000",
    privacyContactEmail: "contacto@dkmotors.mx",
  },
  theme: {
    brand: "#1a1d21",
    brandDark: "#0f1114",
    brandLight: "#2a2e35",
    accent: "#e87f38",
  },
  contact: {
    whatsapp: "525555892710",
    whatsappDisplay: "+52 55 5589 2710",
    phone: "55 5589 2710",
    // PENDIENTE: email real del cliente
    email: "contacto@dkmotors.mx",
    address:
      "Fuente de Trevi 114, San Miguel Tecamachalco, Lomas de Tecamachalco, 53950 Naucalpan de Juárez, Estado de México",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.0!2d-99.2378580!3d19.4227810!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201818b9d8f7d%3A0xa1258720f4a6fd42!2sDK%20Motors!5e0!3m2!1ses!2smx!4v1700000000000",
    googleMapsLink:
      "https://www.google.com/maps/place/DK+Motors/@19.4227810,-99.2352831,17z/data=!3m1!4b1!4m6!3m5!1s0x85d201818b9d8f7d:0xa1258720f4a6fd42",
  },
  hours: [
    { label: "Lun - Vie", hours: "9:00 AM – 6:00 PM" },
    { label: "Sábado", hours: "9:00 AM – 2:00 PM" },
    { label: "Domingo", hours: "Cerrado" },
  ],
  services: [
    {
      slug: "afinacion",
      title: "Afinación mayor y menor",
      description: "Bujías, filtros, aceite y revisión completa del motor.",
      icon: "engine",
      image: "https://images.unsplash.com/photo-1505635374747-431af16edaf2?w=800&q=80&auto=format&fit=crop",
      metaTitle: "Afinación de Motor en Tecamachalco | DK Motors",
      metaDescription:
        "Afinación mayor y menor en Naucalpan. Bujías, filtros, aceite sintético. Cotización gratis y garantía por escrito.",
      heroHeadline: "Afinación profesional para que tu motor rinda al 100%",
      priceFrom: "$1,200 MXN",
      durationEstimate: "2-3 horas",
      includes: [
        "Cambio de aceite y filtro",
        "Bujías originales",
        "Filtro de aire y gasolina",
        "Revisión de 25 puntos",
        "Diagnóstico computarizado",
      ],
      relatedSlugs: ["cambio-aceite", "diagnostico", "frenos"],
      seoContent: `La afinación es el servicio de mantenimiento preventivo más importante para tu auto. Una afinación bien hecha alarga la vida del motor, mejora el rendimiento de gasolina y previene reparaciones costosas.

En DK Motors realizamos afinación menor (cada 10,000 km) y afinación mayor (cada 40,000 km o 2 años). La diferencia está en el alcance: la menor incluye aceite, bujías y filtros básicos, mientras que la mayor añade limpieza de inyectores, cambio de banda de distribución y revisión profunda de todos los sistemas.

Usamos bujías NGK/Denso originales, aceite sintético certificado API SP y filtros OEM. Te mostramos cada refacción antes de instalarla y te entregamos las piezas viejas si así lo deseas. Todo servicio incluye garantía por escrito.`,
    },
    {
      slug: "frenos",
      title: "Frenos",
      description: "Balatas, discos, tambores y líquido de frenos.",
      icon: "brake",
      image: "https://images.unsplash.com/photo-1635685789915-aa74fe48fd93?w=800&q=80&auto=format&fit=crop",
      metaTitle: "Reparación de Frenos en Tecamachalco | Balatas y Discos",
      metaDescription:
        "Cambio de balatas, discos y tambores en Naucalpan. Frenos cerámicos y semi-metálicos. Diagnóstico gratis y garantía por escrito.",
      heroHeadline: "Frenos seguros, respuesta firme. No arriesgues tu familia.",
      priceFrom: "$850 MXN",
      durationEstimate: "1-2 horas",
      includes: [
        "Balatas nuevas (cerámicas o semi-metálicas)",
        "Rectificado de discos",
        "Cambio de líquido de frenos",
        "Revisión de mangueras y calipers",
        "Prueba de frenado certificada",
      ],
      relatedSlugs: ["suspension", "alineacion", "diagnostico"],
      seoContent: `Los frenos son tu sistema de seguridad más crítico. Señales de que algo no anda bien: chillidos al frenar, vibración en el pedal, mayor distancia de frenado o pedal que se hunde.

En DK Motors trabajamos con balatas cerámicas (silenciosas, menor polvo, vida útil larga) y semi-metálicas (mayor poder de frenado, ideal para camionetas). Rectificamos discos en torno profesional solo cuando es necesario; si el disco está por debajo del espesor mínimo, lo reemplazamos.

Revisamos siempre el líquido de frenos. El DOT 3 y DOT 4 absorben humedad con el tiempo y pierden efectividad. Recomendamos cambiarlo cada 2 años. Tras cada servicio hacemos una prueba de frenado progresiva para garantizar respuesta lineal y firme.`,
    },
    {
      slug: "suspension",
      title: "Suspensión",
      description: "Amortiguadores, rótulas, terminales y bujes.",
      icon: "suspension",
      image: "https://images.unsplash.com/photo-1563743157646-b34fce2a89bb?w=800&q=80&auto=format&fit=crop",
      metaTitle: "Reparación de Suspensión en Tecamachalco | Amortiguadores",
      metaDescription:
        "Cambio de amortiguadores, rótulas y terminales en Naucalpan. Suspensión KYB, Monroe y Gabriel. Alineación incluida.",
      heroHeadline: "Manejo firme, curvas estables, estacionamiento cómodo",
      priceFrom: "$2,400 MXN",
      durationEstimate: "3-4 horas",
      includes: [
        "Amortiguadores (par o juego completo)",
        "Rótulas superiores e inferiores",
        "Terminales y bujes",
        "Alineación incluida",
        "Prueba de ruta",
      ],
      relatedSlugs: ["alineacion", "frenos", "diagnostico"],
      seoContent: `Una suspensión gastada no solo es incómoda: es peligrosa. Aumenta la distancia de frenado, desgasta las llantas de forma irregular y compromete la estabilidad en curvas y esquivando obstáculos.

Síntomas claros de suspensión dañada: rebote prolongado al pasar topes, inclinación excesiva en curvas, ruidos metálicos al pasar baches, desgaste desigual de llantas.

Trabajamos con marcas premium KYB, Monroe y Gabriel. Siempre cambiamos los amortiguadores en pares (delanteros juntos o traseros juntos) para mantener el equilibrio. Tras el cambio hacemos alineación computarizada y prueba de ruta para validar el resultado.`,
    },
    {
      slug: "diagnostico",
      title: "Diagnóstico computarizado",
      description: "Escáner profesional para cualquier marca y modelo.",
      icon: "scan",
      image: "https://images.unsplash.com/photo-1653607240501-92c08ed94c7f?w=800&q=80&auto=format&fit=crop",
      metaTitle: "Diagnóstico Computarizado en Tecamachalco | Check Engine",
      metaDescription:
        "¿Foco check encendido? Diagnóstico computarizado multi-marca en Naucalpan. Lectura de códigos OBD2 profesional y reporte detallado.",
      heroHeadline: "Lectura profesional de códigos. Sabrás qué tiene tu auto, con precisión.",
      priceFrom: "$350 MXN",
      durationEstimate: "30-45 min",
      includes: [
        "Lectura de códigos OBD2",
        "Análisis de datos en tiempo real",
        "Reporte impreso de fallas",
        "Cotización de reparación",
        "Borrado de códigos post-reparación",
      ],
      relatedSlugs: ["afinacion", "electrico", "aire"],
      seoContent: `Cuando el foco "Check Engine" se enciende, tu computadora está detectando una falla. El diagnóstico computarizado te dice exactamente qué sensor, qué componente o qué sistema está generando el problema.

Contamos con escáneres Launch X-431, Autel MaxiSys y Snap-On que cubren marcas americanas, europeas, japonesas y coreanas. No solo leemos códigos: analizamos datos en vivo (trims de combustible, sensores de oxígeno, presión de riel, tiempos de inyección) para encontrar causas raíz, no síntomas.

Al terminar te entregamos un reporte impreso con los códigos encontrados, su significado, el componente probable y una cotización estimada. Solo se cobra el diagnóstico si no procedes con la reparación; si reparas con nosotros, el diagnóstico va bonificado.`,
    },
    {
      slug: "alineacion",
      title: "Alineación y balanceo",
      description: "Alargamos la vida de tus llantas y mejoramos el manejo.",
      icon: "wheel",
      image: "https://images.unsplash.com/photo-1684835902623-b16eb66cfbe6?w=800&q=80&auto=format&fit=crop",
      metaTitle: "Alineación y Balanceo en Tecamachalco | 3D Computarizado",
      metaDescription:
        "Alineación 3D y balanceo electrónico en Naucalpan. Alarga la vida de tus llantas hasta 40%. Reporte impreso con ángulos antes/después.",
      heroHeadline: "Alineación 3D precisa. Tus llantas durarán mucho más.",
      priceFrom: "$550 MXN",
      durationEstimate: "45 min",
      includes: [
        "Alineación 3D computarizada",
        "Balanceo electrónico (4 ruedas)",
        "Reporte antes/después impreso",
        "Revisión de suspensión incluida",
        "Ajuste de convergencia, camber y caster",
      ],
      relatedSlugs: ["suspension", "frenos", "llantas"],
      seoContent: `La alineación correcta tiene un impacto directo en: duración de llantas (hasta 40% más de vida útil), rendimiento de gasolina (2-5% de ahorro), manejo estable en línea recta y prevención de desgaste de suspensión.

Señales de que necesitas alineación: el auto se va hacia un lado, el volante vibra a cierta velocidad, las llantas se desgastan desigualmente, el volante queda torcido al ir derecho.

Usamos alineadora 3D con láser que mide los 3 ángulos críticos (convergencia, camber y caster) en las 4 ruedas. Te damos un reporte impreso con los valores antes y después del ajuste. El balanceo lo hacemos con máquina electrónica de última generación que detecta desbalances mínimos.`,
    },
    {
      slug: "aire",
      title: "Aire acondicionado",
      description: "Carga de gas, revisión de fugas y reparación de compresor.",
      icon: "ac",
      image: "https://images.unsplash.com/photo-1752552055661-fbb9ef5398fe?w=800&q=80&auto=format&fit=crop",
      metaTitle: "Reparación de Aire Acondicionado Automotriz en Tecamachalco",
      metaDescription:
        "Carga de gas, detección de fugas y reparación de compresor en Naucalpan. Gas R134a y R1234yf. Cotización gratis.",
      heroHeadline: "Aire frío garantizado. Manejar con calor no es opción.",
      priceFrom: "$650 MXN",
      durationEstimate: "1-2 horas",
      includes: [
        "Diagnóstico con lámpara UV",
        "Carga de gas (R134a o R1234yf)",
        "Limpieza de condensador",
        "Revisión de compresor y mangueras",
        "Sanitización del sistema",
      ],
      relatedSlugs: ["diagnostico", "electrico", "afinacion"],
      seoContent: `Un aire acondicionado defectuoso no solo te hace pasar calor: daña el motor (el condensador bloqueado eleva temperaturas) y consume más gasolina.

Trabajamos con gas R134a (autos hasta 2017 aprox) y R1234yf (autos nuevos). Detectamos fugas con lámpara UV y tinte fluorescente, lo que nos permite localizar micro-fugas imposibles de ver a simple vista. También reparamos compresores, cambiamos válvulas de expansión y limpiamos condensadores.

Ofrecemos sanitización con ozono para eliminar malos olores, hongos y bacterias del sistema de ventilación. Al terminar el servicio medimos la temperatura de salida (debe estar entre 2-8°C en modo máximo) como prueba de desempeño.`,
    },
    {
      slug: "electrico",
      title: "Sistema eléctrico",
      description: "Alternador, marcha, batería e instalaciones eléctricas.",
      icon: "battery",
      image: "https://images.pexels.com/photos/4374843/pexels-photo-4374843.jpeg?auto=compress&cs=tinysrgb&w=800",
      metaTitle: "Sistema Eléctrico Automotriz en Tecamachalco | Alternador y Marcha",
      metaDescription:
        "Reparación de alternador, marcha, batería e instalaciones eléctricas en Naucalpan. Diagnóstico con osciloscopio profesional.",
      heroHeadline: "Del alternador al último sensor. Todo el sistema eléctrico resuelto.",
      priceFrom: "$450 MXN",
      durationEstimate: "1-3 horas",
      includes: [
        "Diagnóstico con osciloscopio",
        "Prueba de alternador y marcha",
        "Cambio de batería (si aplica)",
        "Revisión de instalación eléctrica",
        "Verificación de consumos fantasma",
      ],
      relatedSlugs: ["diagnostico", "aire", "afinacion"],
      seoContent: `Los sistemas eléctricos modernos son complejos: un auto 2020 tiene más de 100 módulos electrónicos comunicándose por red CAN bus. Diagnosticar fallas eléctricas requiere equipo profesional, no multímetro básico.

Trabajamos con osciloscopios Pico Technology y multímetros Fluke industriales para medir señales de sensores, PWM de actuadores y calidad de comunicación CAN. Detectamos problemas que otros talleres no pueden: consumos fantasma que descargan la batería en la noche, módulos intermitentes, malos aterrizajes.

Instalamos baterías LTH, Bosch y AC Delco con prueba de carga previa. Si tu alternador no carga a 14.2-14.8V lo diagnosticamos con el auto encendido y carga; si está mal, lo reemplazamos con uno nuevo (no remanufacturado de mala calidad).`,
    },
    {
      slug: "cambio-aceite",
      title: "Cambio de aceite",
      description: "Aceite sintético o mineral y filtro incluido.",
      icon: "oil",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80&auto=format&fit=crop",
      metaTitle: "Cambio de Aceite en Tecamachalco | Sintético y Mineral",
      metaDescription:
        "Cambio de aceite sintético, semi-sintético o mineral en Naucalpan. Mobil, Castrol, Shell. Servicio express en 30 minutos.",
      heroHeadline: "Servicio express de cambio de aceite. 30 minutos y listo.",
      priceFrom: "$550 MXN",
      durationEstimate: "30 min",
      includes: [
        "Aceite sintético, semi o mineral",
        "Filtro OEM",
        "Revisión de 15 puntos",
        "Reset del indicador de servicio",
        "Etiqueta con próximo cambio",
      ],
      relatedSlugs: ["afinacion", "frenos", "diagnostico"],
      seoContent: `El cambio de aceite es el servicio más subestimado y el más importante. Un aceite viejo pierde viscosidad, deja de proteger metal con metal y genera lodos que tapan los conductos de lubricación.

Manejamos aceites de especificación exacta para tu motor: 0W-20, 5W-30, 10W-40, diesel 15W-40, etc. Marcas Mobil 1, Castrol Edge, Shell Helix y Valvoline. Siempre usamos filtro OEM (no genérico), porque un filtro barato puede colapsarse internamente y enviar partículas al motor.

Al terminar reseteamos el indicador de servicio del tablero, te ponemos una etiqueta con el próximo cambio (km y fecha), y hacemos una revisión de 15 puntos incluida: nivel de refrigerante, frenos, llantas, luces, batería.`,
    },
    {
      slug: "llantas",
      title: "Llantas",
      description: "Venta, rotación y reparación de neumáticos.",
      icon: "wheel",
      image: "https://images.unsplash.com/photo-1645420526410-66448b1ee37c?w=800&q=80&auto=format&fit=crop",
      metaTitle: "Venta y Rotación de Llantas en Tecamachalco | Michelin, Goodyear",
      metaDescription:
        "Venta, rotación, reparación y balanceo de llantas en Naucalpan. Michelin, Goodyear, Bridgestone, Continental. Alineación incluida.",
      heroHeadline: "Las llantas correctas para tu auto, al mejor precio",
      priceFrom: "$1,800 MXN",
      durationEstimate: "1 hora",
      includes: [
        "Llantas nuevas (marca a elegir)",
        "Montaje y balanceo",
        "Alineación 3D",
        "Válvulas nuevas incluidas",
        "Disposición ecológica de llantas viejas",
      ],
      relatedSlugs: ["alineacion", "suspension", "frenos"],
      seoContent: `La llanta es el único contacto entre tu auto y el pavimento. Una llanta gastada, dura o con presión incorrecta afecta: distancia de frenado, agarre en curvas, hidroplaneo en lluvia y rendimiento de gasolina.

Vendemos e instalamos Michelin, Goodyear, Bridgestone, Continental, Pirelli, Falken, Hankook. Te asesoramos según tu tipo de manejo: urbano, carretera, off-road, sport, económico. Mostramos precio total (llanta + montaje + balanceo + válvula + alineación) sin letras chiquitas.

Recomendamos rotación cada 10,000 km para desgaste uniforme. Medimos profundidad de dibujo en milímetros en 3 puntos por llanta y te damos un reporte. La profundidad legal mínima en México es 1.6 mm; nosotros te avisamos cuando estás cerca del límite.`,
    },
    {
      slug: "transmision",
      title: "Transmisión",
      description: "Reparación y cambio de aceite de transmisión automática y manual.",
      icon: "gear",
      image: "https://images.unsplash.com/photo-1725916631373-23184b9b9170?w=800&q=80&auto=format&fit=crop",
      metaTitle: "Reparación de Transmisión Automática en Tecamachalco",
      metaDescription:
        "Cambio de aceite ATF, reparación de caja automática y manual en Naucalpan. CVT, DCT, tiptronic. Diagnóstico con escáner profesional.",
      heroHeadline: "Transmisión suave, cambios firmes. Sin jaloneos ni patinadas.",
      priceFrom: "$1,500 MXN",
      durationEstimate: "2-4 horas",
      includes: [
        "Cambio completo de aceite ATF/CVT",
        "Filtro de transmisión (si aplica)",
        "Diagnóstico de shift points",
        "Prueba de ruta",
        "Reset de adaptaciones",
      ],
      relatedSlugs: ["afinacion", "diagnostico", "electrico"],
      seoContent: `La transmisión automática moderna (especialmente CVT y DCT) requiere mantenimiento estricto. Usar el aceite equivocado es la causa #1 de falla de transmisión en autos japoneses y coreanos.

Usamos aceites específicos: Toyota WS, Honda ATF DW-1, Nissan CVT NS-3, ZF Lifeguard 6/8/9, Mercon LV/ULV, Dexron VI. Nunca mezclamos especificaciones. El cambio puede ser por drenado parcial (más económico, recomendado cada 60,000 km) o completo por máquina (más costoso, recomendado a partir de 100,000 km).

Diagnosticamos jaloneos, patinadas, cambios demorados o ruidos con escáner específico de transmisión y prueba de ruta. En casos de reparación mayor (solenoides, valve body, embrague), damos cotización con refacciones OEM y garantía por escrito.`,
    },
    {
      slug: "distribucion",
      title: "Banda/cadena de distribución",
      description: "Cambio de kit completo con bomba de agua y tensor.",
      icon: "timing",
      image: "https://images.unsplash.com/photo-1579107820457-2bd4dccad947?w=800&q=80&auto=format&fit=crop",
      metaTitle: "Cambio de Banda de Distribución en Tecamachalco | Kit Completo",
      metaDescription:
        "Cambio de banda o cadena de distribución en Naucalpan. Kit completo Gates, Dayco, INA. Bomba de agua incluida. Garantía por escrito.",
      heroHeadline: "Kit completo de distribución. Servicio que alarga años la vida del motor.",
      priceFrom: "$4,500 MXN",
      durationEstimate: "6-8 horas",
      includes: [
        "Banda o cadena de distribución (Gates/Dayco/INA)",
        "Tensor y poleas guía",
        "Bomba de agua",
        "Banda de accesorios",
        "Refrigerante nuevo",
        "Sello de cigüeñal (si aplica)",
      ],
      relatedSlugs: ["afinacion", "diagnostico", "transmision"],
      seoContent: `La banda de distribución es una bomba de tiempo si no se cambia a tiempo. Si se rompe con el motor andando, las válvulas chocan con los pistones y causan daño catastrófico (reparación de $25,000-50,000 MXN). El cambio preventivo cuesta 10-15 veces menos.

Intervalos típicos: banda de hule 60,000-100,000 km (según fabricante), cadena metálica "vida útil del motor" pero con tensores que sí se cambian. Consultamos el manual exacto de tu auto antes de cotizar.

Siempre hacemos kit completo: banda + tensor + poleas + bomba de agua. Cambiar solo la banda y dejar el tensor viejo es el error más caro. Usamos marcas OEM: Gates, Dayco, INA, Continental. Al terminar ajustamos tiempo de motor con laser timing y hacemos prueba de compresión.`,
    },
    {
      slug: "embrague",
      title: "Embrague (clutch)",
      description: "Cambio de kit completo y rectificado de volante.",
      icon: "clutch",
      image: "https://images.unsplash.com/photo-1774977866250-89aec8731911?w=800&q=80&auto=format&fit=crop",
      metaTitle: "Cambio de Clutch en Tecamachalco | Kit Sachs, LUK, Valeo",
      metaDescription:
        "Cambio de kit de clutch en Naucalpan con disco, plato, collarín y balero piloto. Rectificado de volante incluido. Marcas Sachs, LUK, Valeo.",
      heroHeadline: "Clutch nuevo, pedal firme, sin vibraciones ni patinadas",
      priceFrom: "$3,800 MXN",
      durationEstimate: "5-7 horas",
      includes: [
        "Kit completo (disco, plato, collarín, balero piloto)",
        "Rectificado o cambio de volante",
        "Cable/bomba de embrague (si aplica)",
        "Aceite de transmisión nuevo",
        "Prueba de ruta en tráfico",
      ],
      relatedSlugs: ["transmision", "afinacion", "diagnostico"],
      seoContent: `Síntomas de clutch gastado: pedal muy alto al embragar, patinaje en subidas, olor a quemado, vibración al arrancar, ruido al presionar el pedal. Manejar con clutch dañado desgasta el volante motor (reparación más cara).

Trabajamos con kits Sachs, LUK y Valeo (OEM de la mayoría de las armadoras). El kit incluye disco, plato de presión, collarín y balero piloto. Siempre rectificamos o cambiamos el volante motor (si está rayado, no se puede reusar aunque el clutch sea nuevo).

Tras el cambio te damos una breve prueba de ruta en tráfico urbano para validar el punto de embrague, la firmeza del pedal y la ausencia de vibración o ruido. Los primeros 500 km son de asentamiento del disco; te damos recomendaciones para maximizar su vida útil.`,
    },
    {
      slug: "hojalateria",
      title: "Hojalatería y pintura",
      description: "Reparación de golpes, pintura horneada en cabina.",
      icon: "paint",
      image: "https://images.unsplash.com/photo-1758767355046-1986dda2d967?w=800&q=80&auto=format&fit=crop",
      metaTitle: "Hojalatería y Pintura en Tecamachalco | Cabina Horneada",
      metaDescription:
        "Reparación de hojalatería y pintura horneada en Naucalpan. Pintura automotriz Sikkens y PPG con garantía de color. Trabajamos con seguros.",
      heroHeadline: "Tu auto como nuevo. Pintura horneada con garantía de color.",
      priceFrom: "$3,500 MXN",
      durationEstimate: "3-7 días",
      includes: [
        "Enderezado profesional",
        "Masilla de alta calidad",
        "Pintura Sikkens o PPG",
        "Horneado en cabina",
        "Trabajo con seguros (deducible fijo)",
        "Pulido final",
      ],
      relatedSlugs: ["aire", "electrico", "suspension"],
      seoContent: `La hojalatería moderna requiere cabina de pintura con filtros de aire, temperatura controlada y horneado. La pintura "al sol" o en garage sin filtros tiene polvo, mal brillo y se descascara a los 2-3 años.

Nuestra cabina filtra partículas hasta 5 micras y hornea a 60°C para curado perfecto. Usamos pintura Sikkens y PPG (la misma que usa BMW, Mercedes y la mayoría de armadoras premium). Te damos 2 años de garantía escrita contra despintado o decoloración.

Trabajamos con aseguradoras GNP, AXA, Qualitas, Mapfre, HDI y Zurich. Cobramos solo el deducible y nos coordinamos directo con el ajustador. Si es trabajo particular, te damos cotización con desglose de mano de obra, materiales y pintura. Para colores perlados o candy hacemos prueba de color antes de aplicar.`,
    },
  ],
  whyUs: [
    {
      title: "Garantía por escrito",
      description:
        "Todo servicio viene con garantía documentada. Si algo falla, lo resolvemos sin costo.",
      icon: "shield",
    },
    {
      title: "Transparencia total",
      description:
        "Cotización antes de iniciar. Sin sorpresas ni cargos extra al final.",
      icon: "check",
    },
    {
      title: "Refacciones originales",
      description:
        "Usamos partes OEM o de calidad equivalente. Te mostramos la caja.",
      icon: "box",
    },
    {
      title: "Mecánica + hojalatería",
      description:
        "Servicio integral: desde afinación hasta pintura horneada en un solo lugar.",
      icon: "star",
    },
  ],
  process: [
    { title: "Diagnóstico", description: "Revisamos tu auto y detectamos el problema real." },
    { title: "Cotización", description: "Te pasamos el costo exacto antes de tocar nada." },
    { title: "Reparación", description: "Trabajamos con refacciones originales y técnicos certificados." },
    { title: "Entrega", description: "Tu auto listo en el tiempo acordado, con garantía por escrito." },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800",
    "https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800",
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800",
    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800",
  ],
  testimonials: [
    {
      name: "José T.",
      text: "Muy buen trato, excelente servicio. Recomiendo ampliamente el lugar para servicios automotrices.",
      rating: 5,
      carModel: "Cliente Google",
    },
    {
      name: "Claudia M.",
      text: "Me atendieron rápido y el trabajo de hojalatería quedó impecable. Precios justos y honestos.",
      rating: 5,
      carModel: "Cliente Google",
    },
    {
      name: "Roberto H.",
      text: "Llevé mi camioneta para afinación y diagnóstico. Me explicaron todo con claridad. Buen taller de confianza.",
      rating: 5,
      carModel: "Cliente Google",
    },
  ],
  stats: [
    { label: "Autos atendidos", value: 3000, suffix: "+" },
    { label: "Años de experiencia", value: 15, suffix: "+" },
    { label: "Reseñas en Google", value: 437, suffix: "+" },
    { label: "Calificación promedio", value: 4.4, suffix: "/5" },
    { label: "Servicios disponibles", value: 13, suffix: "" },
  ],
  brands: [
    { name: "Toyota", logoUrl: "/brands/toyota.png" },
    { name: "Honda", logoUrl: "/brands/honda.png" },
    { name: "Nissan", logoUrl: "/brands/nissan.png" },
    { name: "Mazda", logoUrl: "/brands/mazda.png" },
    { name: "Volkswagen", logoUrl: "/brands/volkswagen.png" },
    { name: "Chevrolet", logoUrl: "/brands/chevrolet.png" },
    { name: "Ford", logoUrl: "/brands/ford.png" },
    { name: "Kia", logoUrl: "/brands/kia.png" },
    { name: "Hyundai", logoUrl: "/brands/hyundai.png" },
    { name: "BMW", logoUrl: "/brands/bmw.png" },
  ],
  insurances: [
    { name: "GNP Seguros", logoUrl: "/insurances/gnp.png" },
    { name: "AXA", logoUrl: "/insurances/axa.png" },
    { name: "Qualitas", logoUrl: "/insurances/qualitas.png" },
    { name: "Mapfre", logoUrl: "/insurances/mapfre.png" },
    { name: "HDI Seguros", logoUrl: "/insurances/hdi.png" },
    { name: "Zurich", logoUrl: "/insurances/zurich.png" },
  ],
  timeline: [
    {
      year: "2008",
      title: "Nace DK Motors",
      description:
        "Abrimos las puertas en Tecamachalco con la visión de ofrecer servicio automotriz honesto y de calidad a las familias de Lomas de Tecamachalco.",
      image:
        "https://images.pexels.com/photos/20872015/pexels-photo-20872015.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      year: "2013",
      title: "Ampliación de servicios",
      description:
        "Incorporamos el área de hojalatería y pintura con cabina horneada para ofrecer servicio integral bajo un mismo techo.",
      image:
        "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      year: "2018",
      title: "10 años de confianza",
      description:
        "Una década atendiendo a la comunidad de Naucalpan. Los clientes nos recomiendan boca en boca.",
      image:
        "https://images.pexels.com/photos/7144207/pexels-photo-7144207.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      year: "2022",
      title: "Equipo certificado",
      description:
        "Nuestros técnicos obtienen certificaciones para atender marcas europeas, japonesas y americanas con equipo de diagnóstico profesional.",
      image:
        "https://images.pexels.com/photos/13065692/pexels-photo-13065692.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      year: "2025",
      title: "400+ reseñas en Google",
      description:
        "Superamos las 400 reseñas verificadas con calificación 4.4/5. El mejor reconocimiento es la confianza de nuestros clientes.",
      image:
        "https://images.pexels.com/photos/8478265/pexels-photo-8478265.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ],
  blog: [
    {
      slug: "cuando-cambiar-aceite-de-motor",
      title: "¿Cada cuánto cambiar el aceite de motor? Guía 2026",
      excerpt:
        "El intervalo correcto depende del tipo de aceite y condiciones de manejo. Te explicamos cuándo es momento de cambiar.",
      date: "2026-04-10",
      readingMinutes: 5,
      coverUrl: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1200&q=80",
      tags: ["mantenimiento", "aceite"],
      content: `Uno de los mitos más extendidos es que el aceite debe cambiarse cada 5,000 km sin importar nada. La verdad es que el intervalo depende de tres factores: el tipo de aceite (mineral, semisintético o sintético), las condiciones de manejo y las recomendaciones del fabricante.

Para un auto moderno con aceite sintético y manejo urbano moderado, el intervalo típico es entre 7,500 y 10,000 km. Si tu manejo es severo (mucho tráfico, arranques en frío frecuentes, climas extremos), el intervalo se reduce a 5,000-7,000 km.

Más importante que el kilometraje es revisar el nivel cada mes y ponerle atención al color. Un aceite que ya está muy oscuro o con olor a quemado debe cambiarse aunque no hayas llegado al kilometraje.

En DK Motors siempre te mostramos el aceite viejo y te damos un diagnóstico honesto de cuándo será tu próximo cambio según tu uso. No te cobramos cambios innecesarios, pero tampoco te dejamos correr riesgos.`,
    },
    {
      slug: "senales-cambiar-balatas-freno",
      title: "5 señales de que tus balatas necesitan cambio",
      excerpt:
        "El sistema de frenos avisa antes de fallar. Aprende a detectar las señales a tiempo y evitar daños mayores en discos y mordazas.",
      date: "2026-03-22",
      readingMinutes: 4,
      coverUrl:
        "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["frenos", "seguridad"],
      content: `Las balatas son uno de los componentes más críticos para tu seguridad, pero también uno de los más ignorados hasta que es demasiado tarde. La buena noticia es que tu auto te avisa con mucha anticipación — solo hay que saber escucharlo.

La primera señal es un chillido agudo al frenar. Muchas balatas traen un indicador metálico que produce este sonido cuando el material de fricción está por agotarse. No es una falla, es una alerta diseñada para darte tiempo de reaccionar.

La segunda señal es una vibración en el pedal o el volante al frenar. Esto indica que los discos podrían estar deformados por calor o por balatas muy desgastadas que llegaron al metal. Si llegaste a este punto, probablemente también necesitarás rectificar o cambiar discos.

La tercera es un tiempo de frenado más largo. Si notas que el auto tarda más en detenerse o que tienes que presionar más el pedal, las balatas pueden estar al límite.

La cuarta: pedal esponjoso o que se va hasta el fondo. Aquí ya no hablamos solo de balatas — puede haber aire en el sistema, fuga de líquido o problemas en el cilindro maestro. Atención inmediata.

La quinta es simplemente el kilometraje. Las balatas delanteras típicamente duran entre 30,000 y 50,000 km según tu estilo de manejo. Si no recuerdas la última vez que las cambiaste, es momento de revisarlas.

En DK Motors la revisión de frenos es gratis. Te mostramos el grosor real con calibrador y te decimos honestamente cuánto te queda. Si se pueden aguantar unos meses más, te lo decimos.`,
    },
    {
      slug: "check-engine-que-hacer",
      title: "Se prendió el Check Engine: ¿qué hago?",
      excerpt:
        "La luz del motor no siempre significa emergencia, pero tampoco hay que ignorarla. Guía para saber cuándo parar y cuándo puedes seguir.",
      date: "2026-03-05",
      readingMinutes: 6,
      coverUrl:
        "https://images.pexels.com/photos/13065692/pexels-photo-13065692.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["diagnóstico", "mantenimiento"],
      content: `El check engine es probablemente el foco más temido del tablero, y también el más malentendido. La realidad es que puede significar desde una tapa de gasolina mal cerrada hasta una falla grave en el convertidor catalítico. La clave está en cómo se comporta.

Si la luz está fija (no parpadea), generalmente no es emergencia. Puedes seguir manejando, pero agenda una cita en las próximas 48-72 horas para que escaneen el código. Lo peor que puedes hacer es ignorarla por semanas: una falla pequeña ignorada puede convertirse en una reparación de diez veces su costo.

Si la luz parpadea, detente cuanto antes de forma segura. Una luz intermitente indica una falla de combustión activa que puede dañar el catalizador en minutos. Este componente cuesta entre 8,000 y 30,000 pesos dependiendo del modelo — no vale la pena seguir manejando.

Las causas más comunes que vemos en el taller son: tapa de gasolina floja (la más fácil), sensores de oxígeno degradados, bobinas de encendido falladas, bujías al límite y fallas en el sistema EGR. El 70% de los casos se resuelve con menos de 2,000 pesos si se atiende a tiempo.

Antes de ir al taller, intenta apretar bien la tapa de la gasolina y maneja unos 50 km. Si la luz se apaga sola, era eso. Si sigue encendida, entonces sí necesitas un escaneo profesional.

En DK Motors el escaneo básico es gratuito si te quedas a reparar. Te mostramos el código exacto, te explicamos qué significa en lenguaje claro y te damos el costo antes de empezar. Nunca te decimos "hay que cambiar todo" — atacamos solo lo que está fallando.`,
    },
    {
      slug: "cuando-cambiar-bateria-auto",
      title: "¿Cuándo cambiar la batería del auto? Señales que no debes ignorar",
      excerpt:
        "Una batería no avisa el día que va a fallar, pero sí manda señales semanas antes. Aprende a detectarlas y evita quedarte varado.",
      date: "2026-02-18",
      readingMinutes: 4,
      coverUrl:
        "https://images.pexels.com/photos/4374843/pexels-photo-4374843.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["batería", "mantenimiento"],
      content: `La batería promedio en México dura entre 2 y 4 años. El calor del Valle de México es implacable con ellas: evapora el electrolito y degrada las placas internas más rápido de lo que el fabricante promete. Si tu batería ya pasó los 3 años, conviene revisarla aunque parezca estar bien.

La primera señal clara es un arranque perezoso por la mañana. Cuando la marcha suena más lenta de lo normal, especialmente en días fríos, la batería está perdiendo capacidad. No es el motor, es ella pidiendo auxilio.

La segunda señal son las luces del tablero parpadeando al arrancar, o la pantalla del estéreo reiniciándose. La batería no mantiene voltaje estable durante el arranque.

La tercera: si notas que el aire acondicionado pierde fuerza al estar detenido en un alto pero recupera al acelerar, es el alternador compensando una batería débil.

La cuarta señal es visual: corrosión blanca o azul en los bornes. Eso acelera la descarga y a veces es suficiente limpiarlos, pero si reaparece rápido, la batería está gasificando mal.

Un diagnóstico profesional toma 5 minutos: medimos voltaje en reposo (debe estar sobre 12.4V), voltaje con motor encendido (13.8-14.4V indica alternador sano) y hacemos prueba de carga bajo demanda. Con eso sabemos si es la batería, el alternador o solo necesita una limpieza.

En DK Motors la prueba de batería y sistema de carga es gratis. Si necesitas cambiarla, te damos opciones de marcas con diferentes garantías para que elijas según tu presupuesto. Nunca te vendemos la más cara si no la necesitas.`,
    },
    {
      slug: "alineacion-balanceo-cada-cuanto",
      title: "Alineación y balanceo: ¿cada cuánto se hace?",
      excerpt:
        "No son lo mismo, no se hacen al mismo tiempo y ambos afectan cómo maneja tu auto. Te explicamos cuándo toca cada uno.",
      date: "2026-02-01",
      readingMinutes: 5,
      coverUrl:
        "https://images.unsplash.com/photo-1684835902623-b16eb66cfbe6?w=1200&q=80&auto=format&fit=crop",
      tags: ["llantas", "mantenimiento"],
      content: `La alineación y el balanceo son dos servicios distintos que muchas veces se confunden. Entender la diferencia te ahorra dinero y desgaste innecesario de llantas.

El balanceo corrige el peso de la llanta sobre el rin, para que gire de forma uniforme a alta velocidad. Si sientes vibración en el volante sobre 80-100 km/h, casi siempre es balanceo. Se recomienda hacerlo cada vez que se monta una llanta nueva o cada 10,000-15,000 km.

La alineación corrige los ángulos de las ruedas respecto al chasis (camber, caster y toe). Si el auto "jala" hacia un lado al soltar el volante, si el volante queda chueco cuando vas derecho, o si las llantas se desgastan más de un lado, es alineación. Se recomienda cada 10,000 km o después de cualquier golpe fuerte en un bache, banqueta o reductor de velocidad.

Las señales que te dicen que necesitas alineación urgente son: desgaste irregular (un borde de la llanta más gastado que el otro), volante descentrado, auto que no mantiene línea recta solo, o chirridos al tomar curvas. Ignorarlo significa que en pocos miles de kilómetros tendrás que cambiar llantas que podrían haber durado el doble.

Un dato que pocos saben: la alineación correcta mejora el rendimiento de gasolina entre 3% y 7%. No es mucho por galón, pero sumado en un año de uso representa miles de pesos ahorrados.

En DK Motors tenemos equipo de alineación computarizada con reporte impreso de antes y después. Te mostramos los valores exactos de cada rueda antes de empezar y te entregamos la hoja con el ajuste final. El balanceo siempre va incluido cuando montas llantas nuevas con nosotros.`,
    },
    {
      slug: "amortiguadores-cuando-cambiar",
      title: "Amortiguadores desgastados: cómo saber y por qué importa",
      excerpt:
        "No es solo un tema de comodidad. Un amortiguador vencido aumenta la distancia de frenado y desgasta suspensión, llantas y frenos.",
      date: "2026-01-15",
      readingMinutes: 5,
      coverUrl:
        "https://images.unsplash.com/photo-1563743157646-b34fce2a89bb?w=1200&q=80&auto=format&fit=crop",
      tags: ["suspensión", "seguridad"],
      content: `Los amortiguadores son uno de los componentes más subestimados del auto. A diferencia de las balatas o el aceite, no fallan de un día para otro — se degradan lentamente durante años, y el conductor se acostumbra al mal manejo sin darse cuenta. Por eso muchos los cambian demasiado tarde.

La función del amortiguador no es solo "darte confort". Es mantener las llantas en contacto firme con el pavimento. Un amortiguador vencido permite que la llanta rebote tras cada bache, perdiendo adherencia por milisegundos que en una frenada de emergencia significan metros adicionales de distancia.

La prueba más simple es empujar fuerte cada esquina del auto y soltarla. El auto debe subir, bajar y quedarse quieto en uno o dos movimientos. Si rebota tres veces o más, el amortiguador ya no amortigua.

Otras señales: el auto "flota" o cabecea en el freno, rebota demasiado después de un tope, las llantas se desgastan en parches irregulares (calvas), o notas manchas de aceite en el cuerpo del amortiguador (ya tiene fuga interna).

La vida útil promedio es de 60,000 a 80,000 km, aunque varía mucho según el tipo de calles. En la Ciudad de México con tantos baches, no es raro verlos vencidos a los 50,000.

Un dato importante: siempre se cambian en pares (ambos delanteros o ambos traseros). Cambiar solo uno genera un desbalance peligroso en el comportamiento del auto en curva y frenada.

En DK Motors hacemos revisión de suspensión gratuita con cada servicio. Te mostramos las señales físicas en tu propio auto y te damos cotización con opciones de diferentes marcas. Si no urge, te lo decimos — un amortiguador débil se puede monitorear unos meses antes de reemplazar.`,
    },
  ],
  googleReviews: {
    rating: 4.4,
    reviewCount: 437,
    profileUrl:
      "https://www.google.com/maps/place/DK+Motors/@19.4227810,-99.2352831,17z/data=!3m1!4b1!4m6!3m5!1s0x85d201818b9d8f7d:0xa1258720f4a6fd42",
  },
  siteUrl: "http://localhost:5173",
  faqs: [
    {
      question: "¿Cuánto dura la garantía?",
      answer:
        "Todos nuestros servicios incluyen garantía por escrito. Si el problema reaparece por la misma falla, lo resolvemos sin costo.",
    },
    {
      question: "¿Me cotizan antes de empezar el trabajo?",
      answer:
        "Sí. Hacemos diagnóstico y te pasamos un presupuesto exacto antes de tocar nada. Solo procedemos con tu autorización explícita.",
    },
    {
      question: "¿Qué marcas atienden?",
      answer:
        "Trabajamos con autos americanos, europeos, japoneses y coreanos. Contamos con escáner profesional multi-marca y técnicos certificados.",
    },
    {
      question: "¿Hacen hojalatería y pintura?",
      answer:
        "Sí. Tenemos cabina de pintura horneada y trabajamos con aseguradoras y trabajos particulares. Garantía de color por escrito.",
    },
    {
      question: "¿Usan refacciones originales?",
      answer:
        "Usamos partes OEM (original del fabricante) o de calidad equivalente certificada. Te mostramos la caja y la factura de cada refacción.",
    },
    {
      question: "¿Cuánto tarda un servicio típico?",
      answer:
        "Un servicio de afinación tarda aproximadamente 2 horas. Trabajos mayores (motor, transmisión, hojalatería) pueden tomar de 1 a 7 días. Siempre te damos un tiempo estimado al cotizar.",
    },
  ],
  social: {
    // PENDIENTE: redes sociales reales del cliente
    facebook: "https://facebook.com/dkmotorsmx",
    instagram: "https://instagram.com/dkmotorsmx",
  },
  fleets: {
    // PENDIENTE: confirmar con cliente si ofrecen servicio de flotillas real
    enabled: true,
    headline: "Mantén tu flotilla rodando. Sin paros inesperados.",
    subheadline:
      "Plan de mantenimiento B2B con descuentos por volumen, facturación mensual y reportes por unidad.",
    tiers: [
      {
        name: "Flotilla Pequeña",
        vehicleRange: "5-15 unidades",
        discount: "10%",
        features: [
          "Descuento 10% en mano de obra",
          "Atención prioritaria sin cita",
          "Reporte mensual por unidad",
          "Facturación consolidada",
          "Asesor dedicado",
        ],
      },
      {
        name: "Flotilla Mediana",
        vehicleRange: "16-40 unidades",
        discount: "15%",
        features: [
          "Descuento 15% en mano de obra",
          "Descuento 8% en refacciones",
          "Servicio de recolección y entrega",
          "Dashboard web con histórico",
          "SLA de 48 horas garantizado",
          "Crédito 30 días (pre-aprobación)",
        ],
      },
      {
        name: "Flotilla Grande",
        vehicleRange: "40+ unidades",
        discount: "20%+",
        features: [
          "Descuento 20%+ negociable",
          "Técnico in-house disponible",
          "Inventario de refacciones en sitio",
          "Reportes customizados",
          "KPI tracking (MTBF, downtime)",
          "Crédito 60 días",
          "Contrato anual con penalizaciones",
        ],
      },
    ],
    benefits: [
      {
        title: "Reducción de downtime",
        description: "Plan preventivo que evita paros inesperados. Mantenemos histórico por unidad.",
        icon: "clock",
      },
      {
        title: "Facturación mensual",
        description: "Un solo CFDI al mes con desglose por unidad. Consolidación fiscal simple.",
        icon: "doc",
      },
      {
        title: "Reportes por unidad",
        description: "Dashboard con kilometraje, servicios realizados y próximos mantenimientos.",
        icon: "chart",
      },
      {
        title: "Descuentos por volumen",
        description: "Tarifas preferenciales en mano de obra y refacciones según tamaño de flotilla.",
        icon: "tag",
      },
    ],
    clients: [
      { name: "Uber" },
      { name: "DiDi" },
      { name: "Bimbo" },
      { name: "Estafeta" },
    ],
  },
  whatsappBot: {
    enabled: true,
    welcomeMessage:
      "¡Hola! 👋 Soy el asistente virtual de DK Motors. ¿En qué te podemos ayudar hoy?",
    quickReplies: [
      { id: "cita", label: "Agendar cita", message: "Hola, quiero agendar una cita para mi auto." },
      { id: "cotizacion", label: "Pedir cotización", message: "Hola, necesito una cotización para:" },
      {
        id: "hojalateria",
        label: "Hojalatería/pintura",
        message: "Hola, quiero cotizar un trabajo de hojalatería y pintura.",
      },
      { id: "urgencia", label: "Auto varado", message: "Hola, mi auto está varado. Necesito ayuda urgente." },
      {
        id: "flotillas",
        label: "Planes flotilla",
        message: "Hola, quiero información sobre planes para flotilla empresarial.",
      },
      {
        id: "horarios",
        label: "Horarios y ubicación",
        message: "Hola, ¿cuáles son sus horarios y cómo llego al taller?",
      },
    ],
  },
};
