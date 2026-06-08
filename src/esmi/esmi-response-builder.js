// src/esmi/esmi-response-builder.js

/**
 * Construye un CTA seguro con etiqueta y enlace previamente generados.
 * @param {string} label Texto visible del botón.
 * @param {string} href URL final del botón.
 * @returns {{label: string, href: string}} Objeto CTA consumido por la interfaz.
 */
function buildCta(label, href) {
  return { label, href };
}

/**
 * Arma una respuesta de conocimiento usando únicamente el contenido del JSON local.
 * @param {object} searchResult Resultado del buscador local de Esmi.
 * @returns {{answer: string, cta: null}} Respuesta segura sin CTA automático.
 */
export function buildKnowledgeResponse(searchResult) {
  return {
    answer: searchResult.answer,
    cta: null,
  };
}

/**
 * Arma una pregunta de aclaración para evitar inventar información fuera de COHACER.
 * @param {string} question Pregunta de seguimiento definida por el flujo conversacional.
 * @returns {{answer: string, cta: null}} Mensaje de aclaración para el chat.
 */
export function buildClarificationResponse(question) {
  return {
    answer: question,
    cta: null,
  };
}

/**
 * Obtiene un nombre corto para personalizar el texto cuando hay asesor por slug.
 * @param {object} advisor Asesor activo detectado por slug o fallback institucional.
 * @returns {string} Nombre visible del asesor o fallback institucional de COHACER.
 */
function getAdvisorDisplayName(advisor) {
  return advisor?.hasAdvisor && advisor.name ? advisor.name : 'un asesor de COHACER';
}

/**
 * Arma una respuesta con CTA de WhatsApp y resumen contextual de la conversación.
 * @param {string} href Enlace de WhatsApp generado desde el contexto persistente.
 * @param {object} advisor Asesor activo detectado por slug o fallback institucional.
 * @param {string} reason Motivo conversacional para enviar a WhatsApp.
 * @returns {{answer: string, cta: {label: string, href: string}}} Respuesta lista para renderizarse.
 */
export function buildWhatsappResponse(href, advisor = {}, reason = '') {
  const advisorName = getAdvisorDisplayName(advisor);
  const answer = reason === 'advisorFallback' || reason === 'defaultFallback'
    ? `No tengo una respuesta segura con la información actual de COHACER. Te sugiero continuar por WhatsApp con ${advisorName}; preparé un mensaje con el resumen de lo que me compartiste.`
    : `Claro. Puedo ayudarte a continuar por WhatsApp con ${advisorName}. Preparé un mensaje con el resumen de lo que me compartiste para que no tengas que repetirlo.`;

  return {
    answer,
    cta: buildCta('Continuar por WhatsApp', href),
  };
}
