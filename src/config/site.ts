export const siteConfig = {
  name: 'luzaria',
  phone: '+34 630 715 378',
  phoneClean: '34630715378',
  whatsappUrl: 'https://wa.me/34630715378?text=Hola%20Mariluz,%20me%20gustaría%20que%20revisaras%20mi%20factura%20de%20luz',
  email: 'mluzmarin1969@gmail.com',
  meta: {
    title: 'luzaria | Revisión clara de tu factura de luz',
    description: 'Mariluz Marín revisa tu factura de la luz, te explica si existe margen real de mejora y solo propone un cambio cuando compensa.',
    ogImage: '/og-image.svg',
    ogImageAlt: 'luzaria - Revisión clara de tu factura de luz',
    canonical: 'https://luzaria.es',
    keywords: 'estudio factura luz, revisar factura luz, asesor energético, cambiar comercializadora luz, tarifa luz, ahorro factura luz',
    author: 'Mariluz Marín',
    locale: 'es_ES',
    type: 'website',
  },
  savings: {
    homeRate: 0.15, // 15% ahorro medio hogar
    businessRate: 0.12, // 12% ahorro medio negocio
    minSaving: 0, // Sin mínimo
    averageYearly: 180,
    maxYearly: 300,
    disclaimer: 'No todas las facturas tienen margen de ahorro. La recomendación depende de potencia, consumo, contrato vigente, servicios añadidos y condiciones reales de la oferta.',
  },
  advisor: {
    name: 'Mariluz Marín',
    title: 'Asesora energética en Zoco Energía',
    experience: 10,
    clients: 300,
    satisfaction: null,
    reviews: null,
    photo: '/mariluz.jpg',
    since: 2016,
  },
  transparency: {
    noSavingCopy: 'Si no veo un ahorro claro, la recomendación será no cambiar.',
    freeServiceCopy: 'La revisión inicial de la factura no tiene coste para ti. Si después decides contratar una opción propuesta, la comercializadora puede remunerar la gestión.',
    privacyCopy: 'Uso tu factura solo para estudiar tu caso y responderte. No la publico ni la comparto para otros fines.',
    reviewCopy: 'Revisión individual de tu factura, con una explicación clara antes de cualquier decisión.',
    decisionCopy: 'Solo se propone un cambio cuando mejora precio o condiciones de forma clara.',
    remunerationCopy: 'Si aceptas una propuesta y se tramita el cambio, la gestión puede estar remunerada por la comercializadora.',
  },
  location: {
    country: 'España',
    countryCode: 'ES',
    languages: ['es'],
    timezone: 'Europe/Madrid',
  },
  social: {
    whatsapp: 'https://wa.me/34630715378',
  },
  business: {
    priceRange: '€',
    serviceType: 'Asesoramiento energético para hogares y empresas',
    areaServed: ['España', 'ES'],
    paymentAccepted: ['Transferencia bancaria'],
    currenciesAccepted: 'EUR',
    openingHours: [
      'Mo-Fr 09:00-20:00',
      'Sa 10:00-14:00'
    ],
  },
  founded: 2016,
} as const;

// FAQ data for structured data
export const faqData = [
  {
    question: '¿La revisión de la factura es gratuita?',
    answer: 'Sí. La revisión inicial de tu factura no tiene coste. Si después aceptas una propuesta y se tramita el cambio, la gestión puede estar remunerada por la comercializadora.',
  },
  {
    question: '¿Se cambia la comercializadora sin mi autorización?',
    answer: 'No. Primero reviso tu factura y te explico el resultado. Solo se inicia un cambio si hay una propuesta clara, la entiendes y la autorizas expresamente.',
  },
  {
    question: '¿Qué documentación necesito enviar?',
    answer: 'Para la revisión inicial basta con tu última factura de luz. Si más adelante decides contratar otra opción, podrían solicitarse datos adicionales para tramitarlo correctamente.',
  },
  {
    question: '¿Qué ocurre si no hay ahorro suficiente?',
    answer: 'Te lo indicaré con claridad. Si el ahorro no es relevante, no es estable o las condiciones no compensan, la recomendación será no cambiar.',
  },
  {
    question: '¿Un cambio afecta al suministro o la instalación?',
    answer: 'No. Cambiar de comercializadora no modifica contador, cableado ni instalación. El suministro continúa igual; lo que cambia es la empresa que factura y las condiciones contratadas.',
  },
  {
    question: '¿Cómo se tratan mi factura y mis datos?',
    answer: 'La información se utiliza únicamente para estudiar tu caso y responder a tu solicitud. No se publica ni se usa para fines distintos a la revisión y, si procede, la gestión autorizada.',
  },
] as const;
