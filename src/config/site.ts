export const siteConfig = {
  name: 'luzaria',
  phone: '+34 630 715 378',
  phoneClean: '34630715378',
  whatsappUrl: 'https://wa.me/34630715378?text=Hola,%20me%20interesa%20ahorrar%20en%20mi%20factura%20de%20la%20luz',
  email: 'mluzmarin1969@gmail.com',
  meta: {
    title: 'luzaria | Comparador de tarifas de luz gratuito en España',
    description: 'Comparador de tarifas de luz gratuito. Análisis personalizado de tu factura, cambio de comercializadora sin coste ni permanencia. Cientos de clientes ahorrando cada mes en España.',
    ogImage: '/og-image.svg',
    ogImageAlt: 'luzaria - Ahorra en tu factura de luz',
    canonical: 'https://www.luzaria.es',
    keywords: 'asesor energético, ahorrar luz, tarifa luz, comparador luz, cambiar compañía luz, asesoría energética España, factura de la luz',
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
  },
  advisor: {
    name: 'Mariluz Marín',
    title: 'Asesora Energética Independiente',
    experience: 0,
    clients: 300,
    satisfaction: 4.9,
    reviews: 87,
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
