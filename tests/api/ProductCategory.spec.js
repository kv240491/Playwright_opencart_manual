import { test, expect } from '@playwright/test'
import { Routes } from '../../api/endpoints/routes.js'
import { APITestdata } from '../../testdata/fakerStoreApiTestData.js'

test('@master @api TC04 — Get Products by Category', async ({ request }) => {
    const URL = `${APITestdata.BASE_URL}${Routes.GET_ALL_CATEGORIES}`;
    const category = 'electronics';
    const res = await request.get(URL);
    expect(res.status()).toBe(200);
    const resbody = await res.json();
    expect(Array.isArray(resbody)).toBeTruthy();
    expect(resbody.length).toBeGreaterThan(0);
    expect(resbody).toContain(category);

    const catURL = `${APITestdata.BASE_URL}${Routes.GET_PRODUCTS_BY_CATEGORY.replace('{category}', category)}`;
    const catRes = await request.get(catURL);
    expect(catRes.status()).toBe(200);
    const catResbody = await catRes.json();
    expect(Array.isArray(catResbody)).toBeTruthy();
    expect(catResbody.length).toBeGreaterThan(0);

    for (const prod of catResbody) {
        expect(prod.category).toEqual(category);
    }


})