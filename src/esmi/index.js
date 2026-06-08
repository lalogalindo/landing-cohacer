// src/esmi/index.js

import { createEsmiEngine } from './esmi-engine.js';
import { ESMI_KNOWLEDGE } from './esmi-knowledge.js';
import { createEsmiUi } from './esmi-ui.js';

let esmiAssistantInstance = null;

/**
 * Obtiene la pregunta asociada a un disparador de Esmi priorizando data-esmi-question.
 * @param {HTMLElement} element Botón o enlace que activó el asistente.
 * @returns {string} Pregunta detectada desde atributos data o texto visible.
 */
function getQuestionFromTrigger(element) {
  return element.dataset.esmiQuestion || element.textContent.trim();
}

/**
 * Conecta los botones rápidos actuales de la sección Esmi con el chat flotante.
 * @param {{ask: function(string): void}} ui API pública de la interfaz flotante.
 * @returns {Array<HTMLElement>} Elementos conectados para depuración o pruebas manuales.
 */
function bindQuestionTriggers(ui) {
  const triggers = [
    ...document.querySelectorAll('[data-esmi-question]'),
    ...document.querySelectorAll('.assistant .quick-buttons button'),
  ];
  const uniqueTriggers = [...new Set(triggers)];

  uniqueTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      ui.ask(getQuestionFromTrigger(trigger));
    });
  });

  return uniqueTriggers;
}

/**
 * Conecta el botón principal para abrir Esmi sin enviar una pregunta automática.
 * @param {{open: function(): void}} ui API pública de la interfaz flotante.
 * @returns {Array<HTMLElement>} Elementos conectados para depuración o pruebas manuales.
 */
function bindOpenTriggers(ui) {
  const triggers = [
    ...document.querySelectorAll('[data-esmi-open]'),
    ...document.querySelectorAll('.assistant .btn.btn-light'),
  ];
  const uniqueTriggers = [...new Set(triggers)];

  uniqueTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      ui.open();
    });
  });

  return uniqueTriggers;
}

/**
 * Inicializa Esmi una sola vez, crea motor local, monta UI y conecta la sección existente.
 * @returns {{engine: object, ui: object} | null} Instancia del asesor o null si no hay document disponible.
 */
export function initEsmiAssistant() {
  if (esmiAssistantInstance) {
    return esmiAssistantInstance;
  }

  if (typeof document === 'undefined') {
    return null;
  }

  const engine = createEsmiEngine(ESMI_KNOWLEDGE);
  const ui = createEsmiUi({ engine });

  bindQuestionTriggers(ui);
  bindOpenTriggers(ui);

  esmiAssistantInstance = { engine, ui };
  return esmiAssistantInstance;
}
