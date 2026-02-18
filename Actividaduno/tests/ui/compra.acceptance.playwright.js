/**
 * Prueba de aceptación (Playwright).
 *
 * Caso de uso:
 * 1. Buscar un libro.
 * 2. Agregarlo al carrito.
 * 3. Verificar total.
 */
import { test, expect } from '@playwright/test';

test('buscar y agregar libro al carrito', async ({ page }) => {
  await page.goto('http://localhost:5173/catalogo');

  await page.getByPlaceholder('Busqueda por titulo o autor').fill('1984');
  await expect(page.getByText('1984')).toBeVisible();

  await page.getByRole('button', { name: 'Comprar' }).first().click();
  await expect(page.getByText('Total a pagar:')).toBeVisible();
});
