/**
 * Prueba funcional UI (Playwright):
 * valida el comportamiento del filtro por título/autor.
 */
import { test, expect } from '@playwright/test';

test('filtra libros por texto de búsqueda', async ({ page }) => {
  await page.goto('http://localhost:5173/catalogo');

  await page.getByPlaceholder('Busqueda por titulo o autor').fill('orwell');

  await expect(page.getByText('1984')).toBeVisible();
  await expect(page.getByText('Rebelión en la granja')).toBeVisible();
  await expect(page.getByText('Divergente')).toHaveCount(0);
});
