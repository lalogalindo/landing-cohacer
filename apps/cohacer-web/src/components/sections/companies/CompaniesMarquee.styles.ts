export const marqueeStyles = `
  
  @keyframes marqueeLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes marqueeRight {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }

  .animate-marquee-left {
    animation: marqueeLeft 28s linear infinite;
  }

  .animate-marquee-right {
    animation: marqueeRight 28s linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-marquee-left,
    .animate-marquee-right {
      animation: none !important;
      transform: none !important;
    }
  }

  /**
   * Viewport con fade real usando mask.
   *
   * Propósito:
   * - Desvanecer el contenido hacia los lados sin depender del color del fondo.
   * - Evitar el "cuadro blanco" del overlay.
   */
  .marquee-viewport {
    -webkit-mask-image: linear-gradient(
      to right,
      transparent 0%,
      #000 12%,
      #000 88%,
      transparent 100%
    );
    mask-image: linear-gradient(
      to right,
      transparent 0%,
      #000 12%,
      #000 88%,
      transparent 100%
    );
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
  }

  /**
   * Blur lateral "real" con backdrop-filter.
   *
   * Propósito:
   * - Agregar blur suave en los bordes sin que se vea un rectángulo.
   *
   * Información adicional:
   * - Se usa un background MUY leve para activar backdrop-filter en más navegadores.
   * - Se recorta con mask para que el blur también sea gradual.
   */
  .marquee-blur {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    background: rgba(255, 255, 255, 0.01);
  }

  .marquee-blur-left {
    -webkit-mask-image: linear-gradient(to right, #000 0%, transparent 100%);
    mask-image: linear-gradient(to right, #000 0%, transparent 100%);
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
  }

  .marquee-blur-right {
    -webkit-mask-image: linear-gradient(to left, #000 0%, transparent 100%);
    mask-image: linear-gradient(to left, #000 0%, transparent 100%);
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
  }
`;