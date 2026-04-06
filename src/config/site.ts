export const siteConfig = {
  name: 'Mariluz Asesora Energética',
  phone: '+34 612 345 678',
  whatsappUrl: 'https://wa.me/34612345678?text=Hola%20Mariluz,%20me%20interesa%20ahorrar%20en%20mi%20factura%20de%20la%20luz',
  email: 'mariluz@asesoraenergetica.es',
  meta: {
    title: 'Mariluz Asesora Energética | Ahorra en tu factura de la luz',
    description: 'Asesoramiento energético personalizado. Cambio de comercializadora sin coste. Ahorra hasta 280€ al año en tu factura de la luz.',
    ogImage: '/og-image.jpg',
    canonical: 'https://asesoraenergetica.es',
  },
  savings: {
    homeRate: 0.22, // 22% ahorro hogar
    businessRate: 0.18, // 18% ahorro negocio
    minSaving: 0, // Sin mínimo
    averageYearly: 280,
  },
  advisor: {
    name: 'Mariluz García',
    title: 'Asesora Energética',
    experience: 8,
    clients: 450,
    photo: '/mariluz.jpg',
  },
} as const;
