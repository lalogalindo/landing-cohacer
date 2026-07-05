// src/esmi/esmi-engine.js

import Fuse from 'fuse.js';

const RUDE_ANSWER =
  'Estoy aquí para ayudarte con información sobre COHACER, el Acuerdo 286, requisitos, costos, carreras o contacto con un asesor. ¿Sobre cuál tema te gustaría que te oriente?';
const FALLBACK_ANSWER =
  'No tengo ese dato confirmado con la información disponible de COHACER. Te recomiendo revisarlo con un asesor para evitar errores.';
const SENSITIVE_PATTERN = /\b(costo|costos|precio|pago|pagos|plan|planes|beca|becas|promoci[oó]n|descuento|cuenta|clabe|rfc|fiscal|whatsapp|tel[eé]fono|correo|direcci[oó]n|horario|sede|rvoe|sep|dgair|acuerdo 286|c[eé]dula|validez|tr[aá]mite|requisito|documento|cr[eé]dito|tiempo|fecha|periodo|porcentaje|garant[ií]a|devoluci[oó]n|instituci[oó]n|autoridad)\b/i;
const RUDE_PATTERN = /\b(pendej|idiot|estupid|imb[eé]cil|ching|mierda|put[oa]|j[oó]dete|cabr[oó]n|fuck|shit)\b/i;
const PROHIBITED_UNCERTAINTY_PATTERN = /\b(probablemente|generalmente|normalmente|lo m[aá]s com[uú]n|deber[ií]a ser|puede que|quiz[aá])\b/i;
const CONTACT_PATTERN = /\b(\+?52[\d\s().-]{8,}|[\w.+-]+@[\w.-]+\.[a-z]{2,}|wa\.me\/\d+|https?:\/\/[^\s)]+|whatsapp[^\n]*)/gi;
const DISCLAIMER_VARIANTS = [
  'Esta información corresponde a la guía disponible de COHACER. Antes de tomar una decisión o realizar cualquier pago, confirma tu caso particular con un asesor.',
  'Cada perfil puede tener condiciones específicas. Antes de iniciar el proceso, valida los detalles con un asesor de COHACER.',
  'Esta respuesta se basa en la información oficial disponible. Si deseas iniciar el proceso o revisar tu caso, un asesor podrá orientarte.',
  'Para evitar errores en tu registro, confirma esta información con un asesor antes de avanzar.',
  'Si tu caso tiene alguna particularidad, lo mejor es revisarlo directamente con un asesor de COHACER.',
];

/**
 * Normaliza una cadena para comparar preguntas y fragmentos sin acentos ni signos.
 * @param {string} text Texto ingresado por el usuario o proveniente de la base Markdown.
 * @returns {string} Texto normalizado y listo para búsqueda local.
 */
function normalizeText(text) {
  return String(text || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9ñ\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Divide un documento Markdown en fragmentos temáticos por encabezados y párrafos.
 * @param {{filename: string, content: string}} document Documento Markdown oficial.
 * @returns {Array<object>} Fragmentos indexables con texto original y metadatos.
 */
function chunkMarkdownDocument(document) {
  const sections = String(document.content || '')
    .replace(/^---[\s\S]*?---\s*/m, '')
    .split(/(?=^#{1,4}\s+)/m)
    .map((section) => section.trim())
    .filter(Boolean);

  return sections.flatMap((section, sectionIndex) => {
    const heading = section.match(/^#{1,4}\s+(.+)$/m)?.[1] || '';
    const blocks = section
      .split(/\n{2,}/)
      .map((block) => block.trim())
      .filter((block) => block.length > 24 && !/^#{1,6}\s+[^\n]+$/.test(block) && !block.startsWith('> Nota interna'));

    return blocks.map((block, blockIndex) => ({
      id: `${document.filename}-${sectionIndex}-${blockIndex}`,
      filename: document.filename,
      sectionIndex,
      blockIndex,
      text: `${heading} ${block}`.replace(/\s+/g, ' ').trim(),
      sourceText: block.replace(/\s+/g, ' ').trim(),
      normalizedText: normalizeText(`${heading} ${block}`),
    }));
  });
}

/**
 * Construye un índice local ligero en memoria con todos los Markdown de ESMI.
 * @param {Array<{filename: string, content: string}>} documents Documentos oficiales cargados.
 * @returns {{documents: Array<object>, chunks: Array<object>, fuse: Fuse}} Índice preparado para consultas.
 */
function createKnowledgeIndex(documents) {
  const answerDocuments = documents.filter((document) => {
    return !['12-politicas-internas-esmi.md', '13-casos-uso-propuestos-esmi.md'].includes(document.filename);
  });
  const chunks = answerDocuments.flatMap(chunkMarkdownDocument);
  const fuse = new Fuse(chunks, {
    includeScore: true,
    threshold: 0.42,
    ignoreLocation: true,
    minMatchCharLength: 3,
    keys: [
      { name: 'normalizedText', weight: 0.7 },
      { name: 'filename', weight: 0.3 },
    ],
  });

  return { documents, chunks, fuse };
}

/**
 * Calcula un puntaje por coincidencias directas de términos significativos.
 * @param {string} normalizedQuestion Pregunta normalizada del usuario.
 * @param {object} chunk Fragmento indexado de la base Markdown.
 * @returns {number} Puntaje entre 0 y 1 por términos encontrados.
 */
function getTermScore(normalizedQuestion, chunk) {
  const terms = normalizedQuestion.split(' ').filter((term) => term.length > 3);

  if (!terms.length) {
    return 0;
  }

  const matches = terms.filter((term) => chunk.normalizedText.includes(term));
  return Math.min(1, matches.length / Math.min(terms.length, 6));
}


/**
 * Agrega términos equivalentes a preguntas cortas para mejorar clics de menú e intenciones comunes.
 * @param {string} normalizedQuestion Pregunta normalizada escrita o seleccionada por el usuario.
 * @returns {string} Pregunta enriquecida con sinónimos operativos locales.
 */
function expandQuestionTerms(normalizedQuestion) {
  const additions = [];

  if (/\b(inscripcion|inscribo|inscribirme|registrarme|registro|iniciar|inicio|empezar|entrar|trabajo|trabajando|laboro|experiencia)\b/.test(normalizedQuestion)) {
    additions.push('proceso acuerdo 286 experiencia laboral requisitos candidato titularme');
  }

  if (/\b(necesito|requerimiento|requerimientos|requisito|requisitos|documento|documentos|papeles)\b/.test(normalizedQuestion)) {
    additions.push('requisitos formales documentacion obligatoria edad experiencia bachillerato');
  }
  return [normalizedQuestion, ...additions].join(' ').trim();
}


/**
 * Detecta consultas sobre becas o promociones que no tienen un dato oficial confirmado.
 * @param {string} normalizedQuestion Pregunta normalizada del usuario.
 * @returns {boolean} Verdadero cuando debe redirigirse sin inferir disponibilidad.
 */
function isUnconfirmedScholarshipQuestion(normalizedQuestion) {
  return /\b(beca|becas|promocion|promociones|apoyo)\b/.test(normalizedQuestion);
}

/**
 * Identifica archivos prioritarios según la intención sensible o temática de la pregunta.
 * @param {string} normalizedQuestion Pregunta normalizada del usuario.
 * @returns {Array<string>} Nombres de archivos que deben recibir prioridad de búsqueda.
 */
function getPreferredFiles(normalizedQuestion) {
  if (/\b(costo|cuesta|precio|pago|mensualidad|plan|clabe|cuenta|rfc|deposito)\b/.test(normalizedQuestion)) {
    return ['07-costos-y-cuentas.md'];
  }

  if (/\b(requisito|requerimiento|documento|papeles|credito|bachillerato|necesito)\b/.test(normalizedQuestion)) {
    return ['03-valor-acreditacion-requisitos.md'];
  }

  if (/\b(inscripcion|inscribo|inscribirme|registrarme|registro|iniciar|inicio|empezar|entrar|trabajo|trabajando|laboro|experiencia)\b/.test(normalizedQuestion)) {
    return ['02-acuerdo-286-proceso.md', '03-valor-acreditacion-requisitos.md', '06-tiempos-validez.md'];
  }

  if (/\b(acuerdo 286|sep|dgair|legal|validez|cedula|titulo)\b/.test(normalizedQuestion)) {
    return ['02-acuerdo-286-proceso.md', '03-valor-acreditacion-requisitos.md', '09-faq-acuerdo-286.md'];
  }

  if (/\b(carrera|licenciatura|perfil|derecho|contaduria|administracion|pedagogia|informatica|educacion|ingenieria)\b/.test(normalizedQuestion)) {
    return ['04-oferta-perfiles-licenciaturas.md', '05-temarios-por-licenciatura.md'];
  }

  if (/\b(contacto|whatsapp|telefono|correo|direccion|horario|sede)\b/.test(normalizedQuestion)) {
    return ['01-institucional-contacto.md'];
  }

  return [];
}

/**
 * Define el nivel de confianza interno a partir del puntaje combinado.
 * @param {number} score Puntaje combinado del motor local.
 * @returns {'high' | 'medium' | 'low'} Nivel de confianza interno.
 */
function getConfidence(score) {
  if (score >= 0.74) {
    return 'high';
  }

  if (score >= 0.48) {
    return 'medium';
  }

  return 'low';
}

/**
 * Detecta si una pregunta o respuesta toca información sensible de COHACER.
 * @param {string} text Texto que se debe revisar.
 * @returns {boolean} Verdadero si contiene datos sensibles o regulados.
 */
function containsSensitiveInformation(text) {
  return SENSITIVE_PATTERN.test(String(text || ''));
}

/**
 * Detecta insultos o provocaciones para usar la ruta segura de redirección.
 * @param {string} text Mensaje del usuario.
 * @returns {boolean} Verdadero cuando hay lenguaje grosero o provocador.
 */
function isRudeOrProvocative(text) {
  return RUDE_PATTERN.test(String(text || ''));
}

/**
 * Extrae datos oficiales de contacto presentes en los Markdown cargados.
 * @param {Array<object>} documents Documentos oficiales ya cargados en memoria.
 * @returns {string} Bloque breve con datos de contacto confirmados o cadena vacía.
 */
function getOfficialContactDetails(documents) {
  const contactDocument = documents.find((document) => document.filename === '01-institucional-contacto.md') || documents[0];
  const matches = String(contactDocument?.content || '').match(CONTACT_PATTERN) || [];
  const uniqueMatches = [...new Set(matches.map((match) => match.trim()).filter(Boolean))].slice(0, 4);

  return uniqueMatches.length ? `\n\nPuedes confirmar directamente con COHACER aquí: ${uniqueMatches.join(' · ')}` : '';
}

/**
 * Valida por segunda vez que un fragmento sensible exista dentro del Markdown original.
 * @param {object} chunk Fragmento candidato seleccionado por el buscador.
 * @param {Array<object>} documents Documentos oficiales cargados en memoria.
 * @param {string} verifiedText Texto final que se debe confirmar contra la fuente Markdown.
 * @returns {boolean} Verdadero cuando el texto se confirma en el archivo fuente.
 */
function verifySensitiveChunk(chunk, documents, verifiedText = chunk?.sourceText) {
  const source = documents.find((document) => document.filename === chunk?.filename);

  return Boolean(source && normalizeText(source.content).includes(normalizeText(verifiedText)));
}

/**
 * Selecciona una variación de disclaimer para respuestas críticas sin repetir siempre el mismo texto.
 * @param {string} seed Texto usado para estabilizar la variación elegida.
 * @returns {string} Aviso breve para decisiones sensibles o importantes.
 */
function getDisclaimer(seed) {
  const index = normalizeText(seed).length % DISCLAIMER_VARIANTS.length;
  return DISCLAIMER_VARIANTS[index];
}

/**
 * Limpia el fragmento Markdown y lo adapta a un tono natural de admisiones.
 * @param {string} text Fragmento confirmado de Markdown.
 * @returns {string} Respuesta legible para mostrar en el chat.
 */
function formatAnswer(text) {
  return String(text || '')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\*\*/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Obtiene los fragmentos consecutivos del mismo archivo y sección.
 * @param {object} chunk Fragmento principal seleccionado por el índice.
 * @param {Array<object>} chunks Todos los fragmentos indexados en memoria.
 * @param {number} limit Cantidad máxima de fragmentos adicionales.
 * @returns {Array<object>} Fragmentos consecutivos encontrados.
 */
function getFollowingChunks(chunk, chunks, limit = 4) {
  return chunks
    .filter((candidate) => {
      return candidate.filename === chunk.filename
        && candidate.sectionIndex === chunk.sectionIndex
        && candidate.blockIndex > chunk.blockIndex
        && candidate.blockIndex <= chunk.blockIndex + limit;
    })
    .sort((left, right) => left.blockIndex - right.blockIndex);
}

/**
 * Detecta fragmentos introductorios que necesitan el contenido siguiente para responder completo.
 * @param {object} chunk Fragmento principal seleccionado por el índice.
 * @returns {boolean} Verdadero cuando el fragmento por sí solo se siente incompleto.
 */
function shouldExpandNarrativeChunk(chunk) {
  return /[?¿:]\s*$/.test(chunk.sourceText) || chunk.sourceText.length < 120;
}

/**
 * Agrega fragmentos consecutivos del mismo archivo cuando completan una tabla o una idea introductoria.
 * @param {object} chunk Fragmento principal seleccionado por el índice.
 * @param {Array<object>} chunks Todos los fragmentos indexados en memoria.
 * @returns {string} Texto principal enriquecido con bloques relacionados si existen.
 */
function getExpandedChunkText(chunk, chunks) {
  const followingChunks = getFollowingChunks(chunk, chunks);
  const nextChunk = followingChunks[0];

  if (nextChunk && !chunk.sourceText.includes('|') && nextChunk.sourceText.includes('|')) {
    return `${chunk.sourceText} ${nextChunk.sourceText}`;
  }

  if (followingChunks.length && shouldExpandNarrativeChunk(chunk)) {
    return [chunk, ...followingChunks].map((candidate) => candidate.sourceText).join(' ');
  }

  return chunk.sourceText;
}

/**
 * Crea una respuesta fallback segura con contactos oficiales cuando están disponibles.
 * @param {Array<object>} documents Documentos oficiales cargados en memoria.
 * @returns {{matched: boolean, confidence: 'low', item: null, answer: string, cta: null, sensitive: boolean}} Respuesta segura sin inventar.
 */
function createFallbackResult(documents) {
  return {
    matched: false,
    confidence: 'low',
    item: null,
    answer: `${FALLBACK_ANSWER}${getOfficialContactDetails(documents)}`,
    cta: null,
    sensitive: false,
  };
}

/**
 * Crea el motor local de ESMI usando Markdown, Fuse.js, keywords e índice en memoria.
 * @param {Array<{filename: string, content: string}>} documents Base oficial de conocimiento Markdown.
 * @returns {{ask: function(string): object}} API para consultar respuestas sin backend ni servicios externos.
 */
export function createEsmiEngine(documents) {
  const index = createKnowledgeIndex(documents);

  return {
    /**
     * Interpreta una pregunta libre y devuelve la mejor respuesta confirmada desde Markdown.
     * @param {string} question Pregunta escrita o seleccionada por el usuario.
     * @returns {{matched: boolean, confidence: 'high' | 'medium' | 'low', item: object | null, answer: string, cta: object | null, sensitive: boolean}} Resultado seguro para el orquestador.
     */
    ask(question) {
      const normalizedQuestion = normalizeText(question);
      const expandedQuestion = expandQuestionTerms(normalizedQuestion);

      if (isRudeOrProvocative(question)) {
        return {
          matched: true,
          confidence: 'high',
          item: null,
          answer: RUDE_ANSWER,
          cta: null,
          sensitive: false,
        };
      }

      if (!normalizedQuestion || isUnconfirmedScholarshipQuestion(normalizedQuestion)) {
        return createFallbackResult(index.documents);
      }

      const preferredFiles = getPreferredFiles(expandedQuestion);
      const fuseResults = index.fuse.search(expandedQuestion).slice(0, 10);
      const preferredResults = index.chunks
        .filter((chunk) => preferredFiles.includes(chunk.filename))
        .map((chunk) => ({ item: chunk, score: 0.35 }));
      const combinedResults = [...fuseResults, ...preferredResults];
      const rankedItems = combinedResults
        .map((result) => {
          const fuseScore = Math.max(0, 1 - result.score);
          const termScore = getTermScore(expandedQuestion, result.item);
          const fileBonus = preferredFiles.includes(result.item.filename) ? 0.55 : 0;
          const score = Math.min(1, Math.max(fuseScore * 0.62 + termScore * 0.38, termScore) + fileBonus);

          return { item: result.item, score };
        })
        .sort((left, right) => right.score - left.score);
      const bestMatch = rankedItems[0];

      if (!bestMatch || bestMatch.score < 0.38) {
        return createFallbackResult(index.documents);
      }

      const confidence = getConfidence(bestMatch.score);
      const expandedText = getExpandedChunkText(bestMatch.item, index.chunks);
      const answer = formatAnswer(expandedText);
      const sensitive = containsSensitiveInformation(question) || containsSensitiveInformation(answer);

      if (confidence === 'low' || PROHIBITED_UNCERTAINTY_PATTERN.test(answer)) {
        return createFallbackResult(index.documents);
      }

      if (sensitive && !verifySensitiveChunk(bestMatch.item, index.documents, expandedText)) {
        return createFallbackResult(index.documents);
      }

      return {
        matched: true,
        confidence,
        item: bestMatch.item,
        answer: [
          confidence === 'medium' ? 'Con la información disponible, puedo confirmarte esto: ' : '',
          answer,
          sensitive || confidence === 'medium' ? `\n\n${getDisclaimer(question)}` : '',
        ].join(''),
        cta: null,
        sensitive,
      };
    },
  };
}
