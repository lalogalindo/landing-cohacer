// src/esmi/esmi-engine.js

import Fuse from 'fuse.js';

const FALLBACK_ANSWER =
  'No quiero darte información incorrecta. ¿Puedes contarme si tu duda es sobre inscripción, costos, requisitos, becas o validez oficial?';

/**
 * Normaliza una cadena para comparar preguntas sin acentos, signos ni diferencias de mayúsculas.
 * @param {string} text Texto ingresado por el usuario o proveniente de la base de conocimiento.
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
 * Prepara los temas de conocimiento con campos normalizados para Fuse.js y keywords.
 * @param {Array<object>} knowledge Temas disponibles para responder desde el frontend.
 * @returns {Array<object>} Temas enriquecidos con texto de búsqueda normalizado.
 */
function createSearchableKnowledge(knowledge) {
  return knowledge.map((item) => {
    const normalizedKeywords = item.keywords.map((keyword) => normalizeText(keyword));
    const normalizedQuestions = item.equivalentQuestions.map((question) => normalizeText(question));

    return {
      ...item,
      normalizedTitle: normalizeText(item.title),
      normalizedKeywords,
      normalizedQuestions,
      searchableText: [
        item.title,
        ...item.keywords,
        ...item.equivalentQuestions,
        item.answer,
      ]
        .map((value) => normalizeText(value))
        .join(' '),
    };
  });
}

/**
 * Calcula coincidencias directas contra keywords normalizadas del tema.
 * @param {string} normalizedQuestion Pregunta del usuario ya normalizada.
 * @param {object} item Tema de conocimiento enriquecido.
 * @returns {number} Puntaje de 0 a 1 según cantidad y calidad de keywords encontradas.
 */
function getKeywordScore(normalizedQuestion, item) {
  const matches = item.normalizedKeywords.filter((keyword) => {
    if (!keyword) {
      return false;
    }

    return normalizedQuestion.includes(keyword) || keyword.includes(normalizedQuestion);
  });

  if (!matches.length) {
    return 0;
  }

  const phraseBonus = matches.some((keyword) => keyword.includes(' ')) ? 0.18 : 0;
  return Math.min(1, matches.length / 3 + phraseBonus);
}

/**
 * Calcula coincidencias contra preguntas frecuentes y formulaciones equivalentes.
 * @param {string} normalizedQuestion Pregunta del usuario ya normalizada.
 * @param {object} item Tema de conocimiento enriquecido.
 * @returns {number} Puntaje de 0 a 1 para preguntas equivalentes.
 */
function getEquivalentQuestionScore(normalizedQuestion, item) {
  if (item.normalizedQuestions.includes(normalizedQuestion)) {
    return 1;
  }

  const partialMatch = item.normalizedQuestions.some((question) => {
    return question.includes(normalizedQuestion) || normalizedQuestion.includes(question);
  });

  return partialMatch ? 0.78 : 0;
}

/**
 * Convierte el score de Fuse.js a un puntaje positivo comparable.
 * @param {Array<object>} fuseResults Resultados generados por Fuse.js para la pregunta actual.
 * @param {object} item Tema que se está evaluando.
 * @returns {number} Puntaje de 0 a 1 donde 1 es la mejor coincidencia difusa.
 */
function getFuseScore(fuseResults, item) {
  const result = fuseResults.find((fuseResult) => fuseResult.item.id === item.id);

  if (!result) {
    return 0;
  }

  return Math.max(0, 1 - result.score);
}

/**
 * Define el nivel de confianza legible a partir del puntaje combinado.
 * @param {number} score Puntaje combinado del motor local.
 * @returns {'high' | 'medium' | 'low'} Nivel de confianza de la respuesta seleccionada.
 */
function getConfidence(score) {
  if (score >= 0.72) {
    return 'high';
  }

  if (score >= 0.46) {
    return 'medium';
  }

  return 'low';
}

/**
 * Crea un resultado fallback cuando la pregunta no coincide con la base local.
 * @returns {{matched: boolean, confidence: 'low', item: null, answer: string, cta: null}} Respuesta segura sin inventar información.
 */
function createFallbackResult() {
  return {
    matched: false,
    confidence: 'low',
    item: null,
    answer: FALLBACK_ANSWER,
    cta: null,
  };
}

/**
 * Crea el motor local de Esmi usando Fuse.js, keywords y preguntas equivalentes.
 * @param {Array<object>} knowledge Base de conocimiento local disponible para el asesor.
 * @returns {{ask: function(string): object}} API para consultar respuestas sin usar backend ni servicios externos.
 */
export function createEsmiEngine(knowledge) {
  const searchableKnowledge = createSearchableKnowledge(knowledge);
  const fuse = new Fuse(searchableKnowledge, {
    includeScore: true,
    threshold: 0.45,
    ignoreLocation: true,
    keys: [
      { name: 'normalizedTitle', weight: 0.15 },
      { name: 'normalizedKeywords', weight: 0.35 },
      { name: 'normalizedQuestions', weight: 0.35 },
      { name: 'searchableText', weight: 0.15 },
    ],
  });

  return {
    /**
     * Interpreta una pregunta libre del usuario y devuelve la mejor respuesta local disponible.
     * @param {string} question Pregunta escrita o seleccionada por el usuario.
     * @returns {{matched: boolean, confidence: 'high' | 'medium' | 'low', item: object | null, answer: string, cta: object | null}} Resultado con respuesta, CTA y confianza.
     */
    ask(question) {
      const normalizedQuestion = normalizeText(question);

      if (!normalizedQuestion) {
        return createFallbackResult();
      }

      const fuseResults = fuse.search(normalizedQuestion);
      const rankedItems = searchableKnowledge
        .map((item) => {
          const fuseScore = getFuseScore(fuseResults, item);
          const keywordScore = getKeywordScore(normalizedQuestion, item);
          const equivalentScore = getEquivalentQuestionScore(normalizedQuestion, item);
          const combinedScore = Math.max(
            fuseScore * 0.52 + keywordScore * 0.28 + equivalentScore * 0.2,
            keywordScore,
            equivalentScore,
          );

          return { item, score: combinedScore };
        })
        .sort((left, right) => right.score - left.score);

      const bestMatch = rankedItems[0];

      if (!bestMatch || bestMatch.score < 0.38) {
        return createFallbackResult();
      }

      const confidence = getConfidence(bestMatch.score);

      if (confidence === 'low') {
        return createFallbackResult();
      }

      return {
        matched: true,
        confidence,
        item: bestMatch.item,
        answer: bestMatch.item.answer,
        cta: bestMatch.item.cta,
      };
    },
  };
}
