// src/esmi/esmi-ui.js

const INITIAL_GREETING =
  'Hola, soy Esmi. Puedo ayudarte con inscripción, costos, requisitos, becas, validez oficial y contacto con un asesor.';

const FREQUENT_QUESTIONS = [
  '¿Cómo me inscribo?',
  '¿Cuánto cuesta?',
  '¿Qué necesito para empezar?',
  '¿Hay becas disponibles?',
];

const REPLY_SEGMENT_DELAY_MS = 900;
const MAX_MESSAGE_CHARS = 520;

let esmiUiInstance = null;

/**
 * Crea un elemento HTML con clases y atributos opcionales.
 * @param {string} tagName Etiqueta HTML que se debe construir.
 * @param {object} options Opciones de clases, texto y atributos para el elemento.
 * @returns {HTMLElement} Elemento listo para insertarse en el DOM.
 */
function createElement(tagName, options = {}) {
  const element = document.createElement(tagName);
  const { className, text, attributes } = options;

  if (className) {
    element.className = className;
  }

  if (text) {
    element.textContent = text;
  }

  if (attributes) {
    Object.entries(attributes).forEach(([name, value]) => {
      element.setAttribute(name, value);
    });
  }

  return element;
}

/**
 * Lleva el scroll del área de mensajes al último contenido agregado.
 * @param {HTMLElement} messagesElement Contenedor donde se renderizan las burbujas del chat.
 */
function scrollMessagesToBottom(messagesElement) {
  messagesElement.scrollTop = messagesElement.scrollHeight;
}

/**
 * Crea una burbuja de mensaje para Esmi o para la persona usuaria.
 * @param {'bot' | 'user'} author Autor visual del mensaje.
 * @param {string} text Texto que se mostrará dentro de la burbuja.
 * @returns {HTMLDivElement} Burbuja de mensaje configurada.
 */
function createMessageBubble(author, text) {
  const message = createElement('div', {
    className: `esmi-message esmi-message--${author}`,
  });
  const bubble = createElement('div', {
    className: 'esmi-message__bubble',
    text,
  });

  message.append(bubble);
  return message;
}

/**
 * Crea el enlace CTA asociado a una respuesta del motor local.
 * @param {{label: string, href: string}} cta Configuración del botón de acción.
 * @returns {HTMLAnchorElement} Enlace de acción para contactar por WhatsApp.
 */
function createCtaElement(cta) {
  const ctaElement = createElement('a', {
    className: 'esmi-cta',
    text: cta.label,
    attributes: {
      href: cta.href,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  });

  return ctaElement;
}

/**
 * Divide un texto largo en mensajes cortos para que Esmi no responda como bloque robótico.
 * @param {string} answer Texto completo generado por el motor local.
 * @returns {Array<string>} Segmentos listos para mostrarse uno por uno.
 */
function splitAnswerIntoMessages(answer) {
  const text = String(answer || '').replace(/\s+/g, ' ').trim();

  if (!text) {
    return [];
  }

  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
  const messages = [];
  let currentMessage = '';

  sentences.forEach((sentence) => {
    const cleanSentence = sentence.trim();
    const candidate = [currentMessage, cleanSentence].filter(Boolean).join(' ');

    if (candidate.length <= MAX_MESSAGE_CHARS) {
      currentMessage = candidate;
      return;
    }

    if (currentMessage) {
      messages.push(currentMessage);
    }

    if (cleanSentence.length <= MAX_MESSAGE_CHARS) {
      currentMessage = cleanSentence;
      return;
    }

    const chunks = cleanSentence.match(new RegExp(`.{1,${MAX_MESSAGE_CHARS}}(\\s|$)`, 'g')) || [cleanSentence];
    messages.push(...chunks.map((chunk) => chunk.trim()).filter(Boolean));
    currentMessage = '';
  });

  if (currentMessage) {
    messages.push(currentMessage);
  }

  return messages;
}

/**
 * Programa la entrega secuencial de una respuesta y permite interrumpirla con una nueva pregunta.
 * @param {object} state Estado interno de la interfaz de Esmi.
 * @param {HTMLElement} messagesElement Contenedor de mensajes del panel.
 * @param {{answer: string, cta: object | null}} result Respuesta generada por el asistente.
 * @param {number} sequence Identificador de la pregunta vigente.
 */
function scheduleSegmentedReply(state, messagesElement, result, sequence) {
  const segments = splitAnswerIntoMessages(result.answer);

  segments.forEach((segment, index) => {
    window.setTimeout(() => {
      if (state.responseSequence !== sequence) {
        return;
      }

      const isLastSegment = index === segments.length - 1;
      appendMessage(messagesElement, 'bot', segment, isLastSegment ? result.cta : null);
      playNotificationSound(state);
    }, REPLY_SEGMENT_DELAY_MS * index);
  });
}

/**
 * Crea la burbuja visual de escritura con tres puntos animados.
 * @returns {HTMLDivElement} Elemento de mensaje temporal que representa a Esmi escribiendo.
 */
function createTypingIndicator() {
  const message = createElement('div', {
    className: 'esmi-message esmi-message--bot esmi-message--typing',
    attributes: { 'aria-label': 'Esmi está escribiendo' },
  });
  const bubble = createElement('div', { className: 'esmi-message__bubble esmi-typing' });

  Array.from({ length: 3 }).forEach(() => {
    bubble.append(createElement('span', { className: 'esmi-typing__dot' }));
  });

  message.append(bubble);
  return message;
}

/**
 * Muestra el indicador de tres puntos y mantiene visible la parte más reciente del chat.
 * @param {HTMLElement} messagesElement Contenedor de mensajes del panel.
 * @returns {HTMLDivElement} Indicador temporal para retirarlo cuando llegue la respuesta.
 */
function appendTypingIndicator(messagesElement) {
  const typingIndicator = createTypingIndicator();

  messagesElement.append(typingIndicator);
  scrollMessagesToBottom(messagesElement);

  return typingIndicator;
}

/**
 * Reproduce un sonido corto de notificación cuando Esmi entrega un mensaje.
 * @param {object} state Estado interno usado para reutilizar el AudioContext permitido por el navegador.
 */
function playNotificationSound(state) {
  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextConstructor) {
    return;
  }

  try {
    if (!state.audioContext) {
      state.audioContext = new AudioContextConstructor();
    }

    const audioContext = state.audioContext;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const startTime = audioContext.currentTime;

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, startTime);
    oscillator.frequency.setValueAtTime(1175, startTime + 0.08);
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(0.08, startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.22);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(startTime);
    oscillator.stop(startTime + 0.24);
  } catch {
    state.audioContext = null;
  }
}

/**
 * Agrega un mensaje al historial del chat y mantiene visible el contenido reciente.
 * @param {HTMLElement} messagesElement Contenedor de mensajes del panel.
 * @param {'bot' | 'user'} author Autor visual del mensaje.
 * @param {string} text Contenido que se debe mostrar.
 * @param {{label: string, href: string}=} cta CTA opcional para respuestas de Esmi.
 */
function appendMessage(messagesElement, author, text, cta) {
  const message = createMessageBubble(author, text);

  if (cta) {
    message.querySelector('.esmi-message__bubble').append(createCtaElement(cta));
  }

  messagesElement.append(message);
  scrollMessagesToBottom(messagesElement);
}

/**
 * Construye los chips de preguntas frecuentes y conecta su envío al chat.
 * @param {function(string): void} onQuestionSelected Función llamada cuando se elige una pregunta.
 * @returns {HTMLDivElement} Contenedor con máximo cuatro chips frecuentes.
 */
function createChips(onQuestionSelected) {
  const chips = createElement('div', {
    className: 'esmi-chips',
    attributes: { 'aria-label': 'Preguntas frecuentes para Esmi' },
  });

  FREQUENT_QUESTIONS.slice(0, 4).forEach((question) => {
    const chip = createElement('button', {
      className: 'esmi-chip',
      text: question,
      attributes: { type: 'button' },
    });

    chip.addEventListener('click', () => onQuestionSelected(question));
    chips.append(chip);
  });

  return chips;
}

/**
 * Renderiza el saludo inicial una sola vez para evitar mensajes duplicados al reabrir.
 * @param {HTMLElement} messagesElement Contenedor de mensajes del panel.
 * @param {object} state Estado interno de la interfaz de Esmi.
 */
function ensureGreeting(messagesElement, state) {
  if (state.hasGreeting) {
    return;
  }

  appendMessage(messagesElement, 'bot', INITIAL_GREETING);
  state.hasGreeting = true;
}

/**
 * Restaura mensajes temporales del orquestador sin duplicar el saludo inicial.
 * @param {HTMLElement} messagesElement Contenedor de mensajes del panel.
 * @param {Array<object>} history Historial temporal de la conversación.
 * @param {object} state Estado interno de la interfaz de Esmi.
 */
function restoreHistory(messagesElement, history, state) {
  if (!Array.isArray(history) || !history.length) {
    return;
  }

  history.forEach((message) => {
    appendMessage(messagesElement, message.author, message.text, message.cta);
  });
  state.hasGreeting = true;
}

/**
 * Inicializa la interfaz flotante de Esmi y expone métodos para abrirla o enviar preguntas.
 * @param {{assistant: {reply: function(string): object | Promise<object>, getHistory: function(): Array<object>}}} options Dependencias necesarias para responder preguntas.
 * @returns {{open: function(): void, close: function(): void, ask: function(string): void}} API pública del chat flotante.
 */
export function createEsmiUi({ assistant }) {
  if (esmiUiInstance) {
    return esmiUiInstance;
  }

  const state = { hasGreeting: false, isOpen: false, audioContext: null, responseSequence: 0 };
  const root = createElement('div', { className: 'esmi-root' });
  const launcher = createElement('button', {
    className: 'esmi-launcher',
    text: 'Esmi ✨',
    attributes: {
      type: 'button',
      'aria-label': 'Abrir chat con Esmi',
      'aria-expanded': 'false',
    },
  });
  const panel = createElement('section', {
    className: 'esmi-panel',
    attributes: {
      'aria-label': 'Chat de Esmi',
      'aria-hidden': 'true',
    },
  });
  const header = createElement('div', { className: 'esmi-header' });
  const headerCopy = createElement('div', { className: 'esmi-header__copy' });
  const title = createElement('p', { className: 'esmi-title', text: 'Esmi' });
  const subtitle = createElement('span', {
    className: 'esmi-subtitle',
    text: 'Asesora virtual de COHACER',
  });
  const closeButton = createElement('button', {
    className: 'esmi-close',
    text: 'Minimizar',
    attributes: { type: 'button', 'aria-label': 'Minimizar chat de Esmi' },
  });
  const messages = createElement('div', {
    className: 'esmi-messages',
    attributes: { 'aria-live': 'polite' },
  });
  const form = createElement('form', { className: 'esmi-form' });
  const input = createElement('input', {
    className: 'esmi-input',
    attributes: {
      type: 'text',
      name: 'esmi-question',
      placeholder: 'Escribe tu pregunta...',
      autocomplete: 'off',
      'aria-label': 'Pregunta para Esmi',
    },
  });
  const sendButton = createElement('button', {
    className: 'esmi-send',
    text: 'Enviar',
    attributes: { type: 'submit' },
  });

  /**
   * Abre el panel flotante y prepara el saludo inicial del chat.
   */
  function open() {
    state.isOpen = true;
    root.classList.add('esmi-root--open');
    launcher.setAttribute('aria-expanded', 'true');
    panel.setAttribute('aria-hidden', 'false');
    ensureGreeting(messages, state);
    window.requestAnimationFrame(() => input.focus({ preventScroll: true }));
  }

  /**
   * Minimiza el panel flotante sin borrar el historial de conversación.
   */
  function close() {
    state.isOpen = false;
    root.classList.remove('esmi-root--open');
    launcher.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
  }

  /**
   * Envía una pregunta al motor local y renderiza la respuesta segura de Esmi.
   * @param {string} question Pregunta escrita por el usuario o seleccionada desde un chip.
   */
  async function ask(question) {
    const cleanQuestion = String(question || '').trim();

    if (!cleanQuestion) {
      return;
    }

    open();
    appendMessage(messages, 'user', cleanQuestion);

    state.responseSequence += 1;
    const currentSequence = state.responseSequence;
    const typingIndicator = appendTypingIndicator(messages);
    const result = await assistant.reply(cleanQuestion);

    window.setTimeout(() => {
      typingIndicator.remove();

      if (state.responseSequence !== currentSequence) {
        return;
      }

      scheduleSegmentedReply(state, messages, result, currentSequence);
    }, REPLY_SEGMENT_DELAY_MS);
  }

  restoreHistory(messages, assistant.getHistory(), state);

  headerCopy.append(title, subtitle);
  header.append(headerCopy, closeButton);
  form.append(input, sendButton);
  panel.append(header, messages, createChips(ask), form);
  root.append(panel, launcher);
  document.body.append(root);

  launcher.addEventListener('click', open);
  closeButton.addEventListener('click', close);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    ask(input.value);
    input.value = '';
  });

  esmiUiInstance = { open, close, ask };
  return esmiUiInstance;
}
