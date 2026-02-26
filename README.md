# Cohacer Web Platform

## Visión General

Cohacer Web Platform es una arquitectura basada en **monorepo** diseñada para soportar múltiples sitios web (landing pages) con distintas identidades de marca, compartiendo una misma base técnica y sistema de diseño.

El objetivo es:

* Escalar rápidamente nuevos sitios
* Separar completamente branding de componentes
* Mantener consistencia visual y técnica
* Facilitar mantenimiento y evolución futura

---

# Arquitectura

## Estructura del Monorepo

```
cohacer/
│
├── apps/
│   ├── cohacer-web/
│   ├── unidho-web/
│   └── acuerdo286-web/
│
├── packages/
│   ├── theme/
│   │   └── palettes/
│   └── tailwind-config/
│
└── turbo.json
```

---

## apps/

Cada carpeta dentro de `apps/` es una aplicación independiente construida con:

* Vite
* React
* Tailwind CSS v4
* shadcn/ui

Cada app:

* Tiene su propio `tailwind.config.ts`
* Define su propio escaneo de contenido
* Importa su propia paleta de marca
* Puede desplegarse de forma independiente

---

## packages/

### `theme/`

Contiene las paletas de colores (branding) usando variables CSS.

Ejemplos:

* `morado-institucional.css`
* `azul-corporativo.css`
* `verde-institucional.css`

Aquí vive exclusivamente la identidad visual.

---

### `tailwind-config/`

Contiene el preset compartido de Tailwind:

* Configuración de dark mode
* Mapeo de tokens a utilidades
* Extensiones de theme

Cada aplicación lo consume como `preset`, manteniendo su propio `content`.

---

# Sistema de Diseño

La base visual está construida con:

* Tailwind CSS v4
* shadcn/ui
* Variables CSS como design tokens
* Sistema de color OKLCH
* Dark mode basado en clase (`.dark`)

---

## Flujo de Tokens

```
Paleta (CSS variables)
        ↓
Preset Tailwind (mapeo)
        ↓
Clases utilitarias (bg-primary, text-foreground)
        ↓
Componentes (Button, Card, etc.)
```

Los componentes nunca contienen colores hardcodeados.

El branding se controla únicamente desde las paletas.

---

# Estrategia de Branding

Cada aplicación define su identidad en:

```
apps/<app>/src/theme/site.css
```

Ejemplo:

```css
@import "@cohacer/theme/palettes/morado-institucional.css";
```

Cambiar la marca implica únicamente modificar este import.

No es necesario alterar componentes ni layouts.

---

# Beneficios Clave

## Escalabilidad

Permite crear nuevos sitios sin duplicar infraestructura.

## Separación de Responsabilidades

* Branding → `packages/theme`
* Configuración base → `packages/tailwind-config`
* Implementación → `apps/*`

## Mantenibilidad

Cambios globales se hacen en un solo lugar.

## Independencia

Cada app puede:

* Construirse por separado
* Desplegarse por separado
* Versionarse por separado

## Preparado para Crecer

La arquitectura permite evolucionar hacia:

* Multi-tenant
* Integración con CMS
* Pasarela de pagos
* Sistema SaaS
* Expansión del design system

---

# Cómo Crear un Nuevo Sitio

1. Crear una nueva carpeta dentro de `apps/`
2. Consumir el preset compartido de Tailwind
3. Crear `src/theme/site.css`
4. Importar o crear una nueva paleta
5. Desplegar de forma independiente

No se requiere modificar la configuración global.

---

# Estado Actual

* Monorepo funcional con Turborepo
* 3 landing pages independientes
* Sistema de branding desacoplado
* Tailwind v4 configurado correctamente
* Soporte para dark mode
* Componentes shadcn integrados
* Arquitectura lista para escalar

---

# Principios del Proyecto

* El branding es configuración, no implementación.
* Los componentes son agnósticos a la marca.
* Lo compartido vive en `packages/`.
* Las apps ensamblan, no redefinen.

---