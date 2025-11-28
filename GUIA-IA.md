# [cite\_start]Instrucciones para IA: Agencia Web con Animaciones [cite: 1]

## [cite\_start]Contexto y Tecnologías [cite: 2]

  * [cite\_start]**Proyecto:** Agencia web especializada en diseño y animaciones. [cite: 3]
  * [cite\_start]**Enfoque:** SEO, performance y desarrollo ágil. [cite: 4]
  * [cite\_start]**Arquitectura:** Feature-based (no Clean Architecture). [cite: 5]
  * [cite\_start]**Tecnologías Clave:** [cite: 6]
      * [cite\_start]**Frontend:** Vue 3, Nuxt 3, TypeScript. [cite: 8]
      * [cite\_start]**Animaciones:** GSAP, ScrollTrigger, Lottie. [cite: 9]
      * [cite\_start]**Styling:** TailwindCSS, SCSS. [cite: 11]
      * [cite\_start]**Gestión:** pnpm, Vite, VSCode. [cite: 12]
      * [cite\_start]**Imágenes:** @nuxt/image. [cite: 14]

## [cite\_start]Estructura del Proyecto [cite: 15]

[cite\_start]**Organización:** Módulos por funcionalidad bajo la carpeta `/features/`. [cite: 16]

[cite\_start]**Carpetas Principales:** [cite: 17]

  * [cite\_start]`/features/`: Módulos de funcionalidad (home, portfolio, services, contact). [cite: 18]
  * [cite\_start]`/components/ui/`: Componentes base reutilizables. [cite: 19]
  * [cite\_start]`/components/animations/`: Componentes con lógica de animación. [cite: 21]
  * [cite\_start]`/composables/`: Lógica reutilizable (Vue hooks). [cite: 23]
  * [cite\_start]`/assets/`: Estilos globales y recursos estáticos. [cite: 24]
  * [cite\_start]`/layouts/`, `/pages/`, `/plugins/`, `/server/`, `/types/`, `/utils/`: Estructura estándar de Nuxt. [cite: 25]

## [cite\_start]Reglas de Desarrollo [cite: 26]

### [cite\_start]1. Código y Estructura: [cite: 27]

  * [cite\_start]Usar Composition API de Vue 3. [cite: 28]
  * [cite\_start]Implementar TypeScript con interfaces claras. [cite: 30]
  * [cite\_start]Reutilizar componentes de `/components/ui/`. [cite: 31]
  * [cite\_start]Priorizar la estructura feature-based. [cite: 32]

### [cite\_start]2. Animaciones: [cite: 33]

  * [cite\_start]**GSAP + ScrollTrigger:** Para animaciones complejas y efectos de scroll. [cite: 36]
  * [cite\_start]**Lottie:** Solo para animaciones vectoriales de After Effects. [cite: 37]
  * [cite\_start]**CSS nativo:** Para transiciones simples (\< 300ms). [cite: 38]
  * [cite\_start]**Duraciones:** Usar 200ms, 300ms, 500ms. [cite: 39]
  * [cite\_start]**Accesibilidad:** Respetar la preferencia de reduced motion. [cite: 40]

### [cite\_start]3. Estilismo: [cite: 41]

  * [cite\_start]**TailwindCSS:** es la tecnología principal. [cite: 42]
  * [cite\_start]**SCSS:** Solo para estilos custom complejos. [cite: 44]
  * [cite\_start]**Mobile-first:** Empezar siempre con estilos para dispositivos móviles. [cite: 45]
  * [cite\_start]**Espaciado:** Usar múltiplos de 8px. [cite: 46]

### [cite\_start]4. Performance: [cite: 47]

  * [cite\_start]Usar lazy loading para componentes pesados. [cite: 48]
  * [cite\_start]Optimizar imágenes con @nuxt/image. [cite: 49]
  * [cite\_start]Implementar Code Splitting por página. [cite: 50]
  * [cite\_start]Aprovechar SSR/SSG para SEO. [cite: 51]

## [cite\_start]Guía de Diseño [cite: 52]

  * [cite\_start]**Colores:** Máximo 6 colores principales. [cite: 53]
  * **Tipografía:** Máximo 2 familias. [cite\_start]Pesos: 300, 400, 600, 700. [cite: 54]
  * **Breakpoints:**
      * [cite\_start]Mobile: 375px-767px [cite: 55]
      * [cite\_start]Tablet: 768px-1023px [cite: 56]
      * [cite\_start]Desktop: 1024px+ [cite: 57]
  * [cite\_start]**Assets:** SVG para iconos, WebP para imágenes. [cite: 58]

## [cite\_start]Formato de Salida de Código [cite: 59]

[cite\_start]Al generar código, organizarlo en el siguiente orden: [cite: 60]

1.  [cite\_start]Componente principal (lógica + template). [cite: 61]
2.  [cite\_start]Composables (si la lógica es reutilizable). [cite: 62]
3.  [cite\_start]Tipos TypeScript (si son necesarios). [cite: 63]
4.  [cite\_start]Estilos SCSS (solo si se requiere custom styling). [cite: 64]

## [cite\_start]Comandos y Configuración Inicial [cite: 65]

### [cite\_start]Bash - Comandos Base: [cite: 66, 67]

```bash
pnpm dlx nuxi@latest init prisma
cd prisma
pnpm install
pnpm add gsap lottie-web @nuxtjs/tailwindcss @nuxtjs/google-fonts @nuxt/image @nuxtjs/device
pnpm add -D sass @types/node
```

[cite\_start][cite: 68, 69, 70, 71, 72]

### [cite\_start]Archivos Clave: [cite: 73]

  * [cite\_start]`nuxt.config.ts` [cite: 75]
  * [cite\_start]`tailwind.config.js` [cite: 76]
  * [cite\_start]`plugins/gsap.client.ts` [cite: 77]

## [cite\_start]Objetivos por Funcionalidad (Features) [cite: 78]

  * [cite\_start]**Home:** Hero con animación de entrada, secciones con scroll-triggered animations, previsualización de portafolio con efectos hover. [cite: 79]
  * [cite\_start]**Portfolio:** Grid masonry con lazy loading, filtros animados, casos de estudio detallados. [cite: 80]
  * [cite\_start]**Services:** Cards interactivas con micro-animaciones, proceso de trabajo paso a paso, carrusel animado de testimonios. [cite: 81]
  * [cite\_start]**Contact:** Formulario con validación, mapa interactivo con marcadores animados, call-to-actions con efectos hover. [cite: 82]

## [cite\_start]Consideraciones Finales [cite: 83]

  * [cite\_start]**Prioridad:** Simplicidad, performance, enfoque mobile-first, y SEO. [cite: 84]
  * [cite\_start]**Metodología:** Desarrollo incremental por features. [cite: 85]

-----