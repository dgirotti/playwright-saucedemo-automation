import { test, expect } from '@playwright/test';
import { MercadoLibreAPI } from '../../api/mercadolibre.api';

test.describe('API Mercado Libre - Departments', () => {
  test('GET /menu/departments returns departments with categories', async ({ request }) => {
    const mlApi = new MercadoLibreAPI(request);

    const response = await mlApi.getDepartments();
    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    expect(body.departments).toBeDefined();
    expect(Array.isArray(body.departments)).toBe(true);
    expect(body.departments.length).toBeGreaterThan(0);

    const department = body.departments[0];
    expect(department).toHaveProperty('name');
    expect(department).toHaveProperty('categories');

    const category = department.categories[0];
    expect(category).toHaveProperty('id');
    expect(category).toHaveProperty('name');
  });
});






