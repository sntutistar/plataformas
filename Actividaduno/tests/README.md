# Pruebas automatizadas - Actividad 3

Este directorio contiene los artefactos de pruebas solicitados por la actividad:

- `ui/compra.acceptance.playwright.js`: prueba de aceptación.
- `ui/catalogo.functional.playwright.js`: prueba funcional de interfaz.
- `load/books-search.k6.js`: prueba de carga para búsqueda de libros.

## Ejecución rápida (desde `Actividaduno`)

```bash
npm run test:acceptance
npm run test:functional
npm run test:load
```

> Requisitos: `@playwright/test` para UI y `k6` para carga, instalados en tu entorno.
