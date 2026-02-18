# Adecuación a la Actividad 3 (PDS)

Este repositorio quedó alineado con la actividad de **automatización de pruebas de aceptación, funcionales, de sistema y de carga** solicitada en `PDS-ACT3.docx`.

## 1) Validación / pruebas de aceptación (front-end)

Se creó un script automatizado con Playwright en:

- `Actividaduno/tests/ui/compra.acceptance.playwright.js`

Caso cubierto:

1. El usuario abre el catálogo.
2. Busca un libro por texto (`1984`).
3. Añade el libro al carrito.
4. Se valida la evidencia del total en la vista.

## 2) Verificación funcional de interfaz web (front-end)

Se creó un script automatizado con Playwright en:

- `Actividaduno/tests/ui/catalogo.functional.playwright.js`

Caso cubierto:

- Filtrado por título/autor desde el input de búsqueda y validación de resultados visibles/no visibles.

## 3) Verificación de sistema API REST (back-end)

Se añadió el flujo de CRUD en el microservicio de catálogo:

- Nuevos endpoints en `BookController`:
  - `PUT /books/{id}`
  - `DELETE /books/{id}` (borrado lógico)

Y se implementó prueba de sistema automatizada con MockMvc:

- `relatosbackend/ms-books-catalogue/src/test/java/com/relato/msbookscatalogue/controller/BookControllerSystemTest.java`

Flujo probado:

1. Crear entidad.
2. Buscar entidad creada.
3. Editar entidad.
4. Buscar entidad actualizada.
5. Eliminar entidad.
6. Verificar que ya no está disponible (404).

## 4) Verificación de carga

Se añadió script de carga en k6:

- `Actividaduno/tests/load/books-search.k6.js`

Valida:

- p95 de latencia `< 2s`
- fallos `< 1%`

Ejemplo de ejecución:

```bash
k6 run -e BASE_URL=http://localhost:8080 -e VUS=200 -e DURATION=30s Actividaduno/tests/load/books-search.k6.js
```

> Nota: para apuntar a un objetivo más cercano al requisito de 10.000 usuarios concurrentes, subir progresivamente VUs e infraestructura.
