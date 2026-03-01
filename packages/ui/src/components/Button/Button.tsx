import * as React from 'react';
import { buttonClassName } from './Button.styles';

/**
 * Variantes visuales disponibles para el Button.
 */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'outline'
  | 'link'
  | 'danger';

/**
 * Tamaños disponibles para el Button.
 */
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

/**
 * Props compartidas para renderizar Button como <button> o <a>.
 */
type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;

  /**
   * Propósito:
   * - Indicar estado activo (por ejemplo, en tabs, filtros, o navegación).
   *
   * Información adicional:
   * - Se expone como `data-active="true"` para estilado vía CSS.
   */
  isActive?: boolean;

  /**
   * Propósito:
   * - Mostrar estado de carga y prevenir interacción.
   *
   * Información adicional:
   * - Cuando está activo, el contenido se reemplaza por un spinner.
   */
  loading?: boolean;

  /**
   * Propósito:
   * - Renderizar un icono a la izquierda del label.
   */
  leftIcon?: React.ReactNode;

  /**
   * Propósito:
   * - Renderizar un icono a la derecha del label.
   */
  rightIcon?: React.ReactNode;
};

/**
 * Props del Button cuando renderiza como <button>.
 */
export type ButtonAsButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonBaseProps & {
    href?: undefined;
  };

/**
 * Props del Button cuando renderiza como <a>.
 */
export type ButtonAsAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonBaseProps & {
    href: string;
  };

/**
 * Props del componente Button.
 */
export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

/**
 * Spinner
 *
 * Propósito:
 * - Renderizar un spinner inline, heredando `currentColor`.
 *
 * Regresa:
 * @returns JSX.Element
 *
 * Información adicional:
 * - Se usa como “contenido” del botón durante `loading`.
 */
function Spinner() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 animate-spin"
      fill="none"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        className="opacity-25"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M21 12a9 9 0 0 1-9 9"
        className="opacity-75"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * renderButtonContent
 *
 * Propósito:
 * - Resolver el contenido del botón según el estado `loading`.
 *
 * Parámetros:
 * @param loading - Si true, el contenido se reemplaza por el spinner.
 * @param leftIcon - Icono izquierdo.
 * @param rightIcon - Icono derecho.
 * @param children - Label / contenido.
 *
 * Regresa:
 * @returns JSX.Element
 *
 * Información adicional:
 * - Cuando `loading=true`, no se renderizan iconos ni texto.
 * - Cuando `loading=false`, renderiza iconos + texto en una estructura estable.
 */
function renderButtonContent(opts: {
  loading: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const { loading, leftIcon, rightIcon, children } = opts;

  if (loading) {
    return (
      <span className="inline-flex items-center justify-center">
        <Spinner />
      </span>
    );
  }

  return (
    <span className="inline-flex items-center justify-center gap-2">
      {leftIcon ? <span className="inline-flex">{leftIcon}</span> : null}
      {children ? <span className="inline-flex">{children}</span> : null}
      {rightIcon ? <span className="inline-flex">{rightIcon}</span> : null}
    </span>
  );
}

/**
 * Button
 *
 * Propósito:
 * - Renderizar un botón del design system (button o anchor) con:
 *   - loading (spinner reemplaza el contenido)
 *   - left/right icon
 *   - isActive
 *
 * Regresa:
 * @returns JSX.Element
 *
 * Información adicional:
 * - En <button>, `loading` fuerza `disabled`.
 * - En <a>, `loading` aplica `aria-disabled`, elimina href y previene click.
 */
export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      className,
      href,
      isActive = false,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      ...rest
    },
    ref
  ) => {
    const classes = buttonClassName({ variant, size, fullWidth, className });

    const content = renderButtonContent({
      loading,
      leftIcon,
      rightIcon,
      children,
    });

    if (href) {
      const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
      const disabled = Boolean((anchorProps as any).disabled) || loading;

      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          href={disabled ? undefined : href}
          aria-disabled={disabled || undefined}
          aria-busy={loading || undefined}
          data-active={isActive ? 'true' : undefined}
          data-loading={loading ? 'true' : undefined}
          onClick={disabled ? (e) => e.preventDefault() : anchorProps.onClick}
          tabIndex={disabled ? -1 : anchorProps.tabIndex}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }

    const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
    const disabled = Boolean(buttonProps.disabled) || loading;

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={buttonProps.type ?? 'button'}
        className={classes}
        disabled={disabled}
        aria-busy={loading || undefined}
        data-active={isActive ? 'true' : undefined}
        data-loading={loading ? 'true' : undefined}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';