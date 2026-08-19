# Chicharrones El Guache

Sitio informativo construido con React, TypeScript y Vite. La primera etapa se despliega
como sitio estático en GitHub Pages y está preparada para incorporar un catálogo desacoplado
en fases posteriores.

## Requisitos

- Node.js 22 LTS o superior
- npm 10 o superior

## Comandos

```bash
npm install
npm run dev
npm run lint
npm run format:check
npm run build
npm run preview
```

El build de producción usa la ruta base `/chicharrones-el-guache/`. Al ejecutar
`npm run preview`, abre `http://localhost:4173/chicharrones-el-guache/`.

## Arquitectura

- `src/app`: arranque, router y composición de dependencias.
- `src/presentation`: páginas, layouts y componentes visuales.
- `src/shared`: estilos y recursos reutilizables sin conocimiento del negocio.

Las capas de dominio, aplicación, infraestructura y datos se agregarán junto con el catálogo,
cuando exista comportamiento real que justifique su creación.
