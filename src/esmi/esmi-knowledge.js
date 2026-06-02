const WHATSAPP_ANA_PLACEHOLDER = 'https://wa.me/520000000000';

/**
 * Construye una URL editable de WhatsApp para Ana con un mensaje inicial.
 * @param {string} message Mensaje sugerido para abrir la conversación.
 * @returns {string} URL de WhatsApp con el texto codificado.
 */
function createAnaWhatsappUrl(message) {
  return `${WHATSAPP_ANA_PLACEHOLDER}?text=${encodeURIComponent(message)}`;
}

export const ESMI_KNOWLEDGE = [
  {
    id: 'inscripcion',
    title: 'Inscripción',
    keywords: [
      'inscribirme',
      'inscripción',
      'inscripcion',
      'registrarme',
      'empezar',
      'iniciar',
      'entrar',
      'proceso',
      'cómo inicio',
      'como inicio',
      'quiero entrar',
      'cómo me apunto',
      'como me apunto',
    ],
    equivalentQuestions: [
      '¿Cómo me inscribo?',
      'quiero iniciar mi inscripción',
      'cómo puedo entrar a cohacer',
      'qué pasos debo seguir para inscribirme',
    ],
    answer:
      'Para iniciar tu proceso, puedes contactar a una asesora para revisar tu caso, validar tus documentos y explicarte los pasos de inscripción.',
    cta: {
      label: 'Contactar a Ana',
      href: createAnaWhatsappUrl('Hola Ana, quiero iniciar mi proceso de inscripción en COHACER.'),
    },
  },
  {
    id: 'costos',
    title: 'Costos',
    keywords: [
      'costo',
      'costos',
      'precio',
      'cuánto cuesta',
      'cuanto cuesta',
      'pago',
      'mensualidad',
      'colegiatura',
      'inversión',
      'inversion',
      'pagar',
      'financiamiento',
      'pagos',
    ],
    equivalentQuestions: [
      '¿Cuánto cuesta?',
      'cuál es el precio',
      'qué mensualidad se paga',
      'quiero saber la inversión',
    ],
    answer:
      'Los costos pueden variar según el programa y tu situación. Lo ideal es que una asesora revise tu caso para darte información clara sobre inversión, formas de pago y opciones disponibles.',
    cta: {
      label: 'Preguntar costos por WhatsApp',
      href: createAnaWhatsappUrl('Hola Ana, quiero preguntar por costos, inversión y formas de pago.'),
    },
  },
  {
    id: 'requisitos',
    title: 'Requisitos',
    keywords: [
      'requisitos',
      'documentos',
      'papeles',
      'qué necesito',
      'que necesito',
      'empezar',
      'documentación',
      'documentacion',
      'certificado',
      'experiencia laboral',
      'trabajo',
      'años trabajando',
    ],
    equivalentQuestions: [
      '¿Qué necesito para empezar?',
      'qué documentos necesito',
      'cuáles son los requisitos',
      'necesito experiencia laboral',
    ],
    answer:
      'Para saber qué necesitas, es importante revisar tu caso, el programa que te interesa y tu experiencia. Una asesora puede ayudarte a validar documentos y confirmar si cumples con los requisitos.',
    cta: {
      label: 'Validar mis requisitos',
      href: createAnaWhatsappUrl('Hola Ana, quiero validar mis requisitos y documentos para estudiar en COHACER.'),
    },
  },
  {
    id: 'becas',
    title: 'Becas',
    keywords: [
      'beca',
      'becas',
      'descuento',
      'descuentos',
      'apoyo',
      'promoción',
      'promocion',
      'ayuda económica',
      'ayuda economica',
      'facilidad de pago',
    ],
    equivalentQuestions: [
      '¿Hay becas disponibles?',
      'tienen descuentos',
      'hay apoyo económico',
      'quiero una promoción',
    ],
    answer:
      'Puede haber apoyos, promociones o facilidades según el programa y la disponibilidad. Te recomiendo consultar con una asesora para revisar las opciones vigentes.',
    cta: {
      label: 'Preguntar por becas',
      href: createAnaWhatsappUrl('Hola Ana, quiero preguntar por becas, promociones o facilidades de pago.'),
    },
  },
  {
    id: 'validez-oficial',
    title: 'Validez oficial',
    keywords: [
      'validez',
      'oficial',
      'sep',
      'rvoe',
      'título',
      'titulo',
      'certificado',
      'legal',
      'reconocido',
      'reconocimiento',
      'válido',
      'valido',
    ],
    equivalentQuestions: [
      'tiene validez sep',
      'el título es válido',
      'cuenta con rvoe',
      'está reconocido oficialmente',
    ],
    answer:
      'COHACER puede orientarte sobre la validez del proceso y la documentación correspondiente. Para darte una respuesta exacta, una asesora debe revisar el programa que te interesa.',
    cta: {
      label: 'Consultar validez',
      href: createAnaWhatsappUrl('Hola Ana, quiero consultar la validez oficial del programa que me interesa.'),
    },
  },
  {
    id: 'contacto-asesor',
    title: 'Contacto con asesor',
    keywords: [
      'asesor',
      'asesora',
      'ana',
      'humano',
      'hablar',
      'llamada',
      'contacto',
      'whatsapp',
      'teléfono',
      'telefono',
      'quiero hablar con alguien',
    ],
    equivalentQuestions: [
      'quiero hablar con ana',
      'quiero hablar con un asesor',
      'me puede llamar alguien',
      'dame el whatsapp de ana',
    ],
    answer:
      'Claro. Puedes contactar a Ana para recibir atención personalizada y resolver dudas específicas sobre tu caso.',
    cta: {
      label: 'Contactar a Ana',
      href: createAnaWhatsappUrl('Hola Ana, quiero recibir atención personalizada sobre COHACER.'),
    },
  },
];
