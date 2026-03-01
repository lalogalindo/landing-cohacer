import * as React from "react";
import { Section } from "@cohacer/ui";
import { ProgramCard } from "./ProgramCard";
import type { ProgramsContent } from "@/types/programs";

type Props = {
  id: string;
  content: ProgramsContent;

  /**
   * Define si cada card debe mostrar el footer con botón.
   *
   * - true: botón visible, acordeón oculto inicialmente
   * - false: botón oculto, acordeón visible desde el inicio
   */
  showFooterButton?: boolean;
};

/**
 * Sección de Programas.
 *
 * Propósito:
 * - Renderizar el encabezado (título/subtítulo) y un grid de ProgramCard.
 * - Controlar la expansión de un solo programa a la vez cuando existe botón.
 *
 * Información adicional:
 * - Esta sección se alimenta desde JSON (ProgramsContent) y se integra en `content.sections`.
 */
export function ProgramsSection({ id, content, showFooterButton = false }: Props) {
  const [openProgramId, setOpenProgramId] = React.useState<string | null>(null);

  /**
   * Alterna la expansión de un programa.
   *
   * @param programId Identificador del programa
   */
  function toggleProgram(programId: string) {
    setOpenProgramId((prev) => (prev === programId ? null : programId));
  }

  return (
    <Section id={id} spacing="sm">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold md:text-3xl">{content.sectionTitle}</h2>
        {content.sectionSubtitle ? (
          <p className="mt-2 text-sm text-muted-foreground">{content.sectionSubtitle}</p>
        ) : null}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {content.programs.map((program) => (
          <ProgramCard
            key={program.id}
            program={program}
            showFooterButton={showFooterButton}
            isOpen={openProgramId === program.id}
            onToggle={showFooterButton ? () => toggleProgram(program.id) : undefined}
          />
        ))}
      </div>
    </Section>
  );
}