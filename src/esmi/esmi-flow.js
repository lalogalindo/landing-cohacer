// src/esmi/esmi-flow.js

const ADVISOR_PATTERN = /\b(asesor|asesora|humano|persona|whatsapp|tel[eé]fono|telefono|llamada|contacto|hablar con alguien|hablar con un asesor)\b/i;
const GENERIC_INFO_PATTERN = /\b(info|informaci[oó]n|quiero saber|me interesa|dudas|ayuda|orientaci[oó]n)\b/i;
const TOPIC_PATTERN = /\b(inscripci[oó]n|inscripcion|inscribo|inscribirme|registro|registrarme|iniciar|inicio|empezar|requisito|requisitos|requerimiento|requerimientos|documento|documentos|necesito|costo|costos|cuesta|precio|beca|becas|validez|acuerdo 286|carrera|licenciatura)\b/i;

const CLARIFICATION_QUESTION =
  'Para ayudarte mejor, ¿tu duda es sobre inscripción, costos, requisitos, becas o validez oficial?';

const ADVISOR_CLARIFICATION_QUESTION =
  'Puedo ayudarte a preparar un mensaje para WhatsApp, pero antes dime: ¿tu caso es sobre costos, inscripción, requisitos o titulación?';

/**
 * Detecta si el mensaje solicita contacto con una persona asesora de COHACER.
 * @param {string} question Mensaje escrito por la persona usuaria.
 * @returns {boolean} Verdadero cuando la intención de contacto es explícita.
 */
export function isAdvisorRequest(question) {
  return ADVISOR_PATTERN.test(String(question || ''));
}

/**
 * Decide si la pregunta es genérica y necesita una aclaración antes de buscar respuesta.
 * @param {string} question Mensaje escrito por la persona usuaria.
 * @param {object} context Contexto conversacional acumulado.
 * @returns {boolean} Verdadero cuando no hay un tema operativo claro.
 */
function isGenericQuestion(question, context) {
  const text = String(question || '').trim();
  const hasStoredInterest = Array.isArray(context.interests) && context.interests.length > 0;

  const hasKnownTopic = TOPIC_PATTERN.test(text);

  return (text.length < 12 && !hasKnownTopic) || (GENERIC_INFO_PATTERN.test(text) && !hasStoredInterest && !hasKnownTopic);
}

/**
 * Revisa si hay datos mínimos para generar un CTA de WhatsApp con contexto útil.
 * @param {object} context Contexto conversacional acumulado.
 * @returns {boolean} Verdadero si hay al menos un interés o dato personal relevante.
 */
function hasWhatsappContext(context) {
  return Boolean(
    context.workArea
      || context.experienceYears
      || context.name
      || context.phone
      || (Array.isArray(context.interests) && context.interests.length),
  );
}

/**
 * Decide el siguiente paso conversacional de Esmi antes de construir la respuesta final.
 * @param {object} params Parámetros con pregunta, contexto y resultado del buscador local.
 * @param {string} params.question Mensaje escrito por la persona usuaria.
 * @param {object} params.context Contexto conversacional acumulado.
 * @param {object} params.searchResult Resultado entregado por esmi-engine.
 * @param {object} params.advisor Asesor activo detectado por slug o fallback institucional.
 * @returns {object} Decisión de flujo para responder, aclarar o enviar a WhatsApp.
 */
export function decideEsmiFlow({ question, context, searchResult, advisor }) {
  if (isAdvisorRequest(question)) {
    if (hasWhatsappContext(context) || searchResult.confidence === 'high') {
      return { type: 'whatsapp' };
    }

    return {
      type: 'clarify',
      pendingClarification: 'advisor',
      question: ADVISOR_CLARIFICATION_QUESTION,
    };
  }

  if (context.pendingClarification && searchResult.matched && searchResult.confidence !== 'low') {
    return { type: 'answer', clearPendingClarification: true };
  }

  if (isGenericQuestion(question, context)) {
    return {
      type: 'clarify',
      pendingClarification: 'topic',
      question: CLARIFICATION_QUESTION,
    };
  }

  if (!searchResult.matched || searchResult.confidence === 'low') {
    return {
      type: 'whatsapp',
      reason: advisor?.hasAdvisor ? 'advisorFallback' : 'defaultFallback',
    };
  }

  return { type: 'answer' };
}
