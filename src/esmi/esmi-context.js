// src/esmi/esmi-context.js

const MAX_HISTORY_ITEMS = 30;

const INTEREST_PATTERNS = [
  { id: 'costos', pattern: /\b(costo|costos|precio|cu[aá]nto cuesta|mensualidad|colegiatura|inversi[oó]n|pago|pagos)\b/i },
  { id: 'inscripción', pattern: /\b(inscripci[oó]n|inscripcion|inscribirme|registrarme|entrar|empezar|proceso)\b/i },
  { id: 'requisitos', pattern: /\b(requisito|requisitos|documento|documentos|papeles|necesito|certificado)\b/i },
  { id: 'titulación', pattern: /\b(titulaci[oó]n|t[ií]tulo|titulo|validez|rvoe|sep|oficial|certificado)\b/i },
];

const WORK_AREA_PATTERNS = [
  /(?:trabajo|trabajo en|laboro en|me dedico a|área|area|sector)\s+(?:de|en|como)?\s*([a-záéíóúñ\s]{2,45})/i,
  /(?:mi área es|mi area es|mi sector es)\s+([a-záéíóúñ\s]{2,45})/i,
];

/**
 * Crea la estructura base del contexto en memoria de Esmi.
 * @returns {object} Contexto vacío con historial y campos conversacionales.
 */
function createDefaultContext() {
  return {
    name: '',
    phone: '',
    workArea: '',
    experienceYears: '',
    interests: [],
    lastTopicId: '',
    pendingClarification: null,
    clarificationCount: 0,
    history: [],
    updatedAt: new Date().toISOString(),
  };
}

/**
 * Limita texto capturado desde mensajes libres para evitar valores demasiado largos.
 * @param {string} value Texto candidato extraído del mensaje.
 * @returns {string} Texto limpio y acotado para el contexto.
 */
function cleanCapturedText(value) {
  return String(value || '')
    .replace(/[¿?¡!.,;:]+$/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 60);
}


/**
 * Divide una respuesta libre por comas para detectar datos enviados en una sola línea.
 * @param {string} text Mensaje escrito por la persona usuaria.
 * @returns {Array<string>} Partes limpias separadas por coma.
 */
function getCommaSeparatedParts(text) {
  return String(text || '')
    .split(',')
    .map((part) => cleanCapturedText(part))
    .filter(Boolean);
}

/**
 * Revisa si una parte separada por comas parece nombre de persona.
 * @param {string} value Fragmento candidato del mensaje.
 * @returns {boolean} Verdadero si el fragmento parece nombre y no dato operativo.
 */
function looksLikeName(value) {
  return /^[a-záéíóúñ]+(?:\s+[a-záéíóúñ]+){0,3}$/i.test(value)
    && !/\b(trabajo|laboro|experiencia|años|anos|tel|whatsapp|titulaci[oó]n|costos?|requisitos?)\b/i.test(value);
}

/**
 * Revisa si una parte separada por comas puede ser área laboral.
 * @param {string} value Fragmento candidato del mensaje.
 * @returns {boolean} Verdadero si el fragmento parece área o sector laboral.
 */
function looksLikeWorkArea(value) {
  const cleanValue = String(value || '').trim();

  return /^[a-záéíóúñ\s]{2,45}$/i.test(cleanValue)
    && (cleanValue.length <= 3 || !looksLikeName(cleanValue))
    && !/\b(años|anos|tel|whatsapp|titulaci[oó]n|costos?|requisitos?)\b/i.test(cleanValue);
}

/**
 * Detecta un posible nombre cuando la persona lo comparte de forma conversacional.
 * @param {string} text Mensaje escrito por la persona usuaria.
 * @returns {string} Nombre detectado o cadena vacía si no hay evidencia suficiente.
 */
function extractName(text) {
  const match = String(text).match(/(?:me llamo|mi nombre es|soy)\s+([a-záéíóúñ]+(?:\s+[a-záéíóúñ]+){0,3})/i);

  if (match) {
    return cleanCapturedText(match[1]);
  }

  const [firstPart] = getCommaSeparatedParts(text);
  return firstPart && looksLikeName(firstPart) ? firstPart : '';
}

/**
 * Detecta un teléfono compartido de manera opcional por la persona usuaria.
 * @param {string} text Mensaje escrito por la persona usuaria.
 * @returns {string} Teléfono detectado o cadena vacía si no aparece.
 */
function extractPhone(text) {
  const match = String(text).match(/(?:\+?\d[\d\s().-]{7,}\d)/);
  return match ? cleanCapturedText(match[0]) : '';
}

/**
 * Detecta años de experiencia mencionados en una frase libre.
 * @param {string} text Mensaje escrito por la persona usuaria.
 * @returns {string} Número de años detectado o cadena vacía si no aparece.
 */
function extractExperienceYears(text) {
  const match = String(text).match(/(\d{1,2})\s*(?:años|anos|año|ano)\s*(?:de\s*)?(?:experiencia|trabajo|laboral|trabajando)?/i);
  return match ? match[1] : '';
}

/**
 * Detecta área laboral sin asumir información que la persona no haya expresado.
 * @param {string} text Mensaje escrito por la persona usuaria.
 * @returns {string} Área laboral detectada o cadena vacía si no hay patrón claro.
 */
function extractWorkArea(text) {
  const matchedPattern = WORK_AREA_PATTERNS.find((pattern) => pattern.test(text));

  if (matchedPattern) {
    const [, area] = String(text).match(matchedPattern) || [];
    return cleanCapturedText(area);
  }

  const parts = getCommaSeparatedParts(text);
  const workArea = parts.find((part, index) => index > 0 && looksLikeWorkArea(part));
  return workArea || '';
}

/**
 * Detecta intereses explícitos permitidos por la base actual de COHACER.
 * @param {string} text Mensaje escrito por la persona usuaria.
 * @returns {Array<string>} Lista de intereses encontrados sin duplicados.
 */
function extractInterests(text) {
  return INTEREST_PATTERNS
    .filter(({ pattern }) => pattern.test(text))
    .map(({ id }) => id);
}

/**
 * Combina intereses nuevos con los existentes manteniendo un arreglo sin duplicados.
 * @param {Array<string>} current Intereses ya guardados.
 * @param {Array<string>} next Intereses recién detectados.
 * @returns {Array<string>} Intereses consolidados.
 */
function mergeInterests(current = [], next = []) {
  return [...new Set([...current, ...next])];
}

/**
 * Crea el administrador de contexto en memoria de Esmi.
 * @returns {object} API para consultar, actualizar y registrar conversación durante la sesión actual.
 */
export function createEsmiContext() {
  let context = createDefaultContext();

  /**
   * Actualiza la fecha interna del contexto sin escribir en almacenamiento permanente.
   */
  function touch() {
    context.updatedAt = new Date().toISOString();
  }

  return {
    /**
     * Devuelve una copia del contexto para evitar mutaciones externas accidentales.
     * @returns {object} Contexto actual de Esmi.
     */
    get() {
      return { ...context, interests: [...context.interests], history: [...context.history] };
    },

    /**
     * Actualiza campos puntuales del contexto en memoria.
     * @param {object} patch Campos que deben sobrescribirse en el contexto.
     * @returns {object} Contexto actualizado.
     */
    update(patch) {
      context = { ...context, ...patch };
      touch();
      return this.get();
    },

    /**
     * Extrae datos útiles del mensaje sin forzar un formulario inicial.
     * @param {string} text Mensaje escrito por la persona usuaria.
     * @returns {object} Contexto actualizado después de aplicar extracciones seguras.
     */
    learnFromUserMessage(text) {
      const patch = {};
      const name = extractName(text);
      const phone = extractPhone(text);
      const workArea = extractWorkArea(text);
      const experienceYears = extractExperienceYears(text);
      const interests = extractInterests(text);

      if (name) patch.name = name;
      if (phone) patch.phone = phone;
      if (workArea) patch.workArea = workArea;
      if (experienceYears) patch.experienceYears = experienceYears;
      if (interests.length) patch.interests = mergeInterests(context.interests, interests);

      if (Object.keys(patch).length) {
        return this.update(patch);
      }

      return this.get();
    },

    /**
     * Agrega un mensaje al historial temporal de conversación.
     * @param {'bot' | 'user'} author Autor del mensaje en el chat.
     * @param {string} text Texto enviado o respondido.
     * @param {{label: string, href: string}=} cta CTA opcional asociado al mensaje.
     * @returns {object} Contexto actualizado con el historial recortado.
     */
    addMessage(author, text, cta) {
      context.history = [
        ...context.history,
        { author, text, cta: cta || null, createdAt: new Date().toISOString() },
      ].slice(-MAX_HISTORY_ITEMS);
      touch();
      return this.get();
    },

    /**
     * Limpia el historial y los datos del contexto en memoria.
     * @returns {object} Contexto vacío recién creado en memoria.
     */
    reset() {
      context = createDefaultContext();
      touch();
      return this.get();
    },
  };
}
