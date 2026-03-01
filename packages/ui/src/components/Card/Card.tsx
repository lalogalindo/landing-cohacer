import * as React from "react";
import { cn } from "../../lib/cn";
import {
  getCardContentClass,
  getCardDescriptionClass,
  getCardFooterClass,
  getCardHeaderClass,
  getCardRootClass,
  getCardTitleClass,
} from "./Card.styles";

/**
 * Contenedor genérico de tarjeta.
 * Sirve como base para secciones, bloques informativos, tarjetas de programas, testimonios, etc.
 */
export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  /**
   * Renderiza el contenedor principal del Card.
   *
   * @param {React.HTMLAttributes<HTMLDivElement>} props Props estándar de un div.
   * @returns {JSX.Element} Contenedor principal del Card.
   */
  function Card({ className, ...props }, ref) {
    return <div ref={ref} className={cn(getCardRootClass(), className)} {...props} />;
  }
);
Card.displayName = "Card";

/**
 * Encabezado del Card.
 * Suele contener título, descripción y/o elementos de acción.
 */
export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  /**
   * Renderiza el header del Card.
   *
   * @param {React.HTMLAttributes<HTMLDivElement>} props Props estándar de un div.
   * @returns {JSX.Element} Header del Card.
   */
  function CardHeader({ className, ...props }, ref) {
    return <div ref={ref} className={cn(getCardHeaderClass(), className)} {...props} />;
  }
);
CardHeader.displayName = "CardHeader";

/**
 * Título del Card.
 * Usar para encabezados dentro de CardHeader (por defecto es un h3).
 */
export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  /**
   * Renderiza el título del Card.
   *
   * @param {React.HTMLAttributes<HTMLHeadingElement>} props Props estándar de un heading (h3 por defecto).
   * @returns {JSX.Element} Título del Card.
   */
  function CardTitle({ className, ...props }, ref) {
    return <h3 ref={ref} className={cn(getCardTitleClass(), className)} {...props} />;
  }
);
CardTitle.displayName = "CardTitle";

/**
 * Descripción del Card.
 * Texto secundario debajo del título.
 */
export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  /**
   * Renderiza la descripción del Card.
   *
   * @param {React.HTMLAttributes<HTMLParagraphElement>} props Props estándar de un párrafo.
   * @returns {JSX.Element} Descripción del Card.
   */
  function CardDescription({ className, ...props }, ref) {
    return <p ref={ref} className={cn(getCardDescriptionClass(), className)} {...props} />;
  }
);
CardDescription.displayName = "CardDescription";

/**
 * Contenido principal del Card.
 * Contenedor para body text, listas, formularios, etc.
 */
export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  /**
   * Renderiza el contenido del Card.
   *
   * @param {React.HTMLAttributes<HTMLDivElement>} props Props estándar de un div.
   * @returns {JSX.Element} Contenido del Card.
   */
  function CardContent({ className, ...props }, ref) {
    return <div ref={ref} className={cn(getCardContentClass(), className)} {...props} />;
  }
);
CardContent.displayName = "CardContent";

/**
 * Pie del Card.
 * Normalmente contiene CTAs, acciones, metadata o botones.
 */
export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  /**
   * Renderiza el footer del Card.
   *
   * @param {React.HTMLAttributes<HTMLDivElement>} props Props estándar de un div.
   * @returns {JSX.Element} Footer del Card.
   */
  function CardFooter({ className, ...props }, ref) {
    return <div ref={ref} className={cn(getCardFooterClass(), className)} {...props} />;
  }
);
CardFooter.displayName = "CardFooter";