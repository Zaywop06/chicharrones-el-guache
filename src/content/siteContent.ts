export const whatsappUrl =
  'https://wa.me/525537000044?text=Hola%2C%20quisiera%20conocer%20los%20productos%20disponibles';

export const navigationItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Historia', path: '/historia' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Productos', path: '/productos' },
  { label: 'Visítanos', path: '/ubicacion' },
  { label: 'Preguntas', path: '/preguntas' },
  { label: 'Contacto', path: '/contacto' },
] as const;

export const businessInfo = {
  name: 'Chicharrones “El Guache”',
  foundedYear: 1980,
  phoneDisplay: '55 3700 0044',
  phoneUrl: 'tel:+525537000044',
  marketName: 'Tianguis de La Providencia',
  address: 'Estado de Morelos 124-120, Providencia, Gustavo A. Madero, 07550, CDMX',
  locationHint: 'Entre las calles Estado de Morelos y Estado de Michoacán.',
  mapsUrl: 'https://maps.app.goo.gl/GmzbrbS7mpeYsuBo7',
  schedule: 'Sábados de 11:00 a.m. a 4:00 p.m.',
  paymentMethods: 'Efectivo y transferencia',
} as const;

export const frequentlyAskedQuestions = [
  {
    question: '¿Qué días se encuentran en el tianguis?',
    answer:
      'Nos encuentras todos los sábados, de 11:00 a.m. a 4:00 p.m., en el Tianguis de La Providencia.',
  },
  {
    question: '¿Puedo apartar un pedido?',
    answer:
      'Sí. Escríbenos previamente por WhatsApp para consultar disponibilidad y dejar preparado tu pedido.',
  },
  {
    question: '¿Aceptan transferencias?',
    answer: 'Sí. Puedes pagar en efectivo o mediante transferencia.',
  },
  {
    question: '¿Tienen entregas a domicilio?',
    answer:
      'Por el momento no realizamos entregas. La venta y recolección son directamente en nuestro puesto.',
  },
  {
    question: '¿Cuánto tiempo se conserva el producto?',
    answer:
      'La conservación puede variar según el producto y la forma de almacenamiento. Pregúntanos al comprar para darte la recomendación adecuada.',
  },
  {
    question: '¿Venden por kilo o en otras presentaciones?',
    answer:
      'Las presentaciones disponibles pueden variar cada sábado. Escríbenos por WhatsApp para conocer las opciones del día.',
  },
  {
    question: '¿Manejan pedidos para eventos?',
    answer:
      'Aún no contamos con una modalidad fija para eventos, pero puedes consultarnos por WhatsApp y revisaremos tu solicitud.',
  },
] as const;
