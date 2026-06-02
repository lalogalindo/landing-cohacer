const INITIAL_GREETING =
  'Hola, soy Esmi. Puedo ayudarte con inscripción, costos, requisitos, becas, validez oficial y contacto con un asesor.';

const FREQUENT_QUESTIONS = [
  '¿Cómo me inscribo?',
  '¿Cuánto cuesta?',
  '¿Qué necesito para empezar?',
  '¿Hay becas disponibles?',
];

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
 * Inicializa la interfaz flotante de Esmi y expone métodos para abrirla o enviar preguntas.
 * @param {{engine: {ask: function(string): object}}} options Dependencias necesarias para responder preguntas.
 * @returns {{open: function(): void, close: function(): void, ask: function(string): void}} API pública del chat flotante.
 */
export function createEsmiUi({ engine }) {
  if (esmiUiInstance) {
    return esmiUiInstance;
  }

  const state = { hasGreeting: false, isOpen: false };
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
  function ask(question) {
    const cleanQuestion = String(question || '').trim();

    if (!cleanQuestion) {
      return;
    }

    open();
    appendMessage(messages, 'user', cleanQuestion);

    const result = engine.ask(cleanQuestion);
    appendMessage(messages, 'bot', result.answer, result.cta);
  }

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
