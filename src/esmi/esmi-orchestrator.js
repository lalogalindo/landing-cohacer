// src/esmi/esmi-orchestrator.js

import { createEsmiContext } from './esmi-context.js';
import { decideEsmiFlow } from './esmi-flow.js';
import {
  buildClarificationResponse,
  buildKnowledgeResponse,
  buildWhatsappResponse,
} from './esmi-response-builder.js';
import { createWhatsappUrl, resolveActiveAdvisor } from './esmi-whatsapp.js';

/**
 * Actualiza el contexto según la decisión conversacional tomada por el flujo.
 * @param {object} contextStore Administrador temporal del contexto de Esmi.
 * @param {object} flowDecision Decisión calculada por esmi-flow.
 * @param {object} searchResult Resultado del buscador local de conocimiento.
 * @returns {object} Contexto vigente después de guardar estado pendiente o tema actual.
 */
function updateContextFromFlow(contextStore, flowDecision, searchResult) {
  if (flowDecision.type === 'clarify') {
    return contextStore.update({ pendingClarification: flowDecision.pendingClarification });
  }

  const patch = { pendingClarification: null };

  if (searchResult.item && searchResult.item.id) {
    patch.lastTopicId = searchResult.item.id;
  }

  return contextStore.update(patch);
}

/**
 * Crea el coordinador principal de Esmi para unir motor, contexto, flujo y respuestas.
 * @param {{engine: {ask: function(string): object}, advisor?: object}} options Dependencias del asistente local.
 * @returns {object} API conversacional con contexto en memoria e historial temporal.
 */
export function createEsmiOrchestrator({ engine, advisor = resolveActiveAdvisor() }) {
  const contextStore = createEsmiContext();

  return {
    /**
     * Procesa una pregunta, actualiza contexto y devuelve la respuesta final de Esmi.
     * @param {string} question Pregunta escrita o seleccionada por la persona usuaria.
     * @returns {{answer: string, cta: object | null, context: object}} Respuesta renderizable para la UI.
     */
    reply(question) {
      const cleanQuestion = String(question || '').trim();

      contextStore.addMessage('user', cleanQuestion);
      const learnedContext = contextStore.learnFromUserMessage(cleanQuestion);
      const searchResult = engine.ask(cleanQuestion);
      const flowDecision = decideEsmiFlow({
        question: cleanQuestion,
        context: learnedContext,
        searchResult,
        advisor,
      });
      const currentContext = updateContextFromFlow(contextStore, flowDecision, searchResult);
      let response;

      if (flowDecision.type === 'clarify') {
        response = buildClarificationResponse(flowDecision.question);
      } else if (flowDecision.type === 'whatsapp') {
        response = buildWhatsappResponse(createWhatsappUrl(currentContext, advisor), advisor, flowDecision.reason);
      } else {
        response = buildKnowledgeResponse(searchResult);
      }

      contextStore.addMessage('bot', response.answer, response.cta);

      return { ...response, context: contextStore.get() };
    },

    /**
     * Devuelve el historial temporal disponible durante la sesión actual.
     * @returns {Array<object>} Mensajes temporales de la conversación actual.
     */
    getHistory() {
      return contextStore.get().history;
    },

    /**
     * Devuelve el contexto conversacional actual para depuración o integraciones futuras.
     * @returns {object} Contexto temporal de Esmi.
     */
    getContext() {
      return contextStore.get();
    },

    /**
     * Devuelve el asesor activo que Esmi usará para CTAs de WhatsApp.
     * @returns {object} Datos mínimos del asesor por slug o fallback institucional.
     */
    getAdvisor() {
      return { ...advisor };
    },
  };
}
