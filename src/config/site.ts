export const siteConfig = {
  name: 'Mariluz Asesora Energética',
  phone: '+34 630 715 378',
  phoneClean: '34630715378',
  whatsappUrl: 'https://wa.me/34630715378?text=Hola%20Mariluz,%20me%20interesa%20ahorrar%20en%20mi%20factura%20de%20la%20luz',
  email: 'mariluz@asesoraenergetica.es',
  meta: {
    title: 'Asesora Energética | Ahorra hasta 280€/año en tu factura de luz',
    description: 'Asesoría energética gratuita en España. Comparo +200 tarifas de luz y gas. Cambio de comercializadora sin coste ni permanencia. 450+ clientes ahorrando.',
    ogImage: '/og-image.svg',
    ogImageAlt: 'Mariluz Asesora Energética - Ahorra en tu factura de luz',
    canonical: 'https://asesoraenergetica.es',
    keywords: 'asesor energético, ahorrar luz, tarifa luz, comparador luz, cambiar compañía luz, asesoría energética España, factura de la luz',
    author: 'Mariluz Marín',
    locale: 'es_ES',
    type: 'website',
  },
  savings: {
    homeRate: 0.22, // 22% ahorro hogar
    businessRate: 0.18, // 18% ahorro negocio
    minSaving: 0, // Sin mínimo
    averageYearly: 280,
    maxYearly: 450,
  },
  advisor: {
    name: 'Mariluz Marín',
    title: 'Asesora Energética Independiente',
    experience: 0,
    clients: 450,
    satisfaction: 4.9,
    reviews: 127,
    photo: '/mariluz.jpg',
    since: 2020,
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
    question: '¿Cuánto cuesta el servicio de asesoría energética?',
    answer: 'El servicio es completamente gratuito. Recibo una comisión de la comercializadora a la que te cambias, nunca cobro directamente a mis clientes. Tu ahorro es real desde el primer día.',
  },
  {
    question: '¿Cuánto tiempo tarda el cambio de compañía eléctrica?',
    answer: 'El proceso puede ser muy rápido: desde 2 días hábiles desde que firmas la solicitud. No hay interrupción en tu suministro eléctrico. El cambio es automático y sin cortes.',
  },
  {
    question: '¿Qué documentación necesito para cambiar de tarifa de luz?',
    answer: 'Solo necesitas una copia de tu última factura de luz y tu DNI. Con esto puedo analizar tu consumo real y encontrar la mejor tarifa. Yo me encargo de todo el papeleo posterior.',
  },
  {
    question: '¿Y si ya tengo una tarifa con discriminación horaria?',
    answer: 'Analizo si tu perfil de consumo se adapta bien a las horas valle y si hay opciones más ventajosas. Muchas veces se puede optimizar aún más el ahorro ajustando el tipo de tarifa a tus hábitos reales.',
  },
  {
    question: '¿El cambio afecta a la instalación eléctrica de mi casa?',
    answer: 'No, absolutamente. El cambio solo implica modificar la comercializadora que te factura. Los cables, el contador y toda la instalación física siguen siendo exactamente los mismos.',
  },
  {
    question: '¿Puedo volver a mi compañía anterior si quiero?',
    answer: 'Sí, siempre tienes libertad para cambiar. La mayoría de tarifas que recomiendo no tienen permanencia. Mis clientes suelen estar tan satisfechos con el ahorro que no quieren volver.',
  },
] as const;
