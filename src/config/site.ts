export const siteConfig = {
  name: 'luzaria',
  phone: '+34 630 715 378',
  phoneClean: '34630715378',
  whatsappUrl: 'https://wa.me/34630715378?text=Hola%20Mariluz,%20me%20gustaría%20solicitar%20una%20revisión%20gratuita%20de%20mi%20factura%20de%20luz',
  email: 'mluzmarin1969@gmail.com',
  meta: {
    title: 'luzaria | Revisión clara de tu factura de luz',
    description: 'Mariluz Marín revisa tu factura de luz y te explica si hay margen real de ahorro antes de proponer cualquier cambio.',
    ogImage: '/og-image.svg',
    ogImageAlt: 'luzaria - Revisión clara de tu factura de luz',
    canonical: 'https://luzaria.es',
    keywords: 'revisión factura luz, asesoría energética, entender factura luz, potencia contratada, tarifa luz, cambiar comercializadora luz',
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
    disclaimer: 'No todas las facturas tienen margen de mejora. La recomendación depende de potencia, consumo, contrato vigente, servicios añadidos y condiciones reales de la oferta.',
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
    noSavingCopy: 'Si no veo una mejora clara, la recomendación será no cambiar.',
    freeServiceCopy: 'El estudio inicial de la factura no tiene coste para ti. Si después decides contratar una opción propuesta, la comercializadora puede remunerar la gestión.',
    privacyCopy: 'Uso tu factura solo para estudiar tu caso y responderte. No la publico ni la comparto para otros fines.',
    reviewCopy: 'Revisión individual de tu factura, con una explicación clara antes de cualquier decisión.',
    decisionCopy: 'Solo se propone un cambio cuando mejora precio o condiciones de forma clara y lo autorizas expresamente.',
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
    answer: 'Sí. El estudio inicial no tiene coste para ti. Si después aceptas una propuesta y se tramita un cambio, la comercializadora puede remunerar la gestión. Antes de avanzar, te explicaré las condiciones.',
  },
  {
    question: '¿Se cambia la comercializadora sin mi autorización?',
    answer: 'No. Enviar la factura no implica contratar nada. Primero reviso tu caso y te explico el resultado; solo se inicia un cambio si entiendes la propuesta y la autorizas expresamente.',
  },
  {
    question: '¿Qué documentación necesito enviar?',
    answer: 'Para una primera revisión normalmente basta con tu última factura de luz. Si decides avanzar, te indicaré qué documentación haría falta antes de cualquier gestión.',
  },
  {
    question: '¿Qué pasa si mi tarifa actual ya está bien?',
    answer: 'Te lo diré con claridad. Si la diferencia es pequeña, temporal o las condiciones no compensan, la recomendación será mantener lo que tienes.',
  },
  {
    question: '¿Un cambio afecta al suministro o la instalación?',
    answer: 'No. Cambiar de comercializadora es un trámite administrativo: no modifica contador, cableado ni instalación eléctrica. El suministro continúa igual.',
  },
  {
    question: '¿Cómo se tratan mi factura y mis datos?',
    answer: 'La información se utiliza únicamente para estudiar tu consulta y responderte. No se publica ni se usa para fines distintos a la revisión y, si procede, la gestión que autorices.',
  },
] as const;
