import { test, expect } from '@playwright/test'
import { Routes } from '../../api/endpoints/routes.js'
import { APITestdata } from '../../testdata/fakerStoreApiTestData.js'

test('@master @api TC05 — Cart CRUD E2E Workflow', async ({ request }) => {
    const data = APITestdata.cartPayload;
    const createURL = `${APITestdata.BASE_URL}${Routes.CREATE_CART}`;

    const createCart = await request.post(createURL, { data: data });
    expect(createCart.status()).toBe(201);
    const createCartBody = await createCart.json();
    expect(createCartBody).toHaveProperty('id');
    expect(createCartBody.userId).toBe(data.userId);
    expect(createCartBody.products).toEqual(data.products);

    const cartId = createCartBody.id;
    const updateData = APITestdata.updateCartPayload;
    const putURL = `${APITestdata.BASE_URL}${Routes.UPDATE_CART.replace('{id}', String(cartId))}`;
    const updateCart = await request.put(putURL, { data: updateData });
    expect(updateCart.status()).toBe(200);
    const updateCartBody = await updateCart.json();
    expect(updateCartBody.id).toEqual(cartId);
    expect(updateCartBody.products[0].quantity).toBe(5);

    const deleteURL = `${APITestdata.BASE_URL}${Routes.DELETE_CART.replace('{id}', String(cartId))}`;
    const deleteCart = await request.delete(deleteURL);
    expect(deleteCart.status()).toBe(200);
})