// src/esmi/esmi-knowledge.js

const KNOWLEDGE_BASE_PATH = '/esmi-knowledge/';

export const ESMI_KNOWLEDGE_FILES = [
  '00-README.md',
  '01-institucional-contacto.md',
  '02-acuerdo-286-proceso.md',
  '03-valor-acreditacion-requisitos.md',
  '04-oferta-perfiles-licenciaturas.md',
  '05-temarios-por-licenciatura.md',
  '06-tiempos-validez.md',
  '07-costos-y-cuentas.md',
  '08-argumentarios-garantia-datos-duros.md',
  '09-faq-acuerdo-286.md',
  '10-icem-ejecutivas-posgrado.md',
  '11-esmi-identidad.md',
  '12-politicas-internas-esmi.md',
  '13-casos-uso-propuestos-esmi.md',
];

let cachedKnowledge = null;

/**
 * Lee un archivo Markdown público de la base oficial de ESMI.
 * @param {string} filename Nombre del archivo Markdown que se debe cargar.
 * @returns {Promise<{filename: string, content: string}>} Documento cargado con su contenido original.
 */
async function fetchKnowledgeFile(filename) {
  const response = await fetch(`${KNOWLEDGE_BASE_PATH}${filename}`);

  if (!response.ok) {
    throw new Error(`No se pudo cargar ${filename}`);
  }

  return {
    filename,
    content: await response.text(),
  };
}

/**
 * Carga una sola vez los archivos Markdown oficiales y conserva una caché en memoria.
 * @returns {Promise<Array<{filename: string, content: string}>>} Documentos Markdown disponibles para ESMI.
 */
export async function loadEsmiKnowledge() {
  if (cachedKnowledge) {
    return cachedKnowledge;
  }

  cachedKnowledge = await Promise.all(ESMI_KNOWLEDGE_FILES.map(fetchKnowledgeFile));
  return cachedKnowledge;
}
