import { test, expect, request } from '@playwright/test'
import { Routes } from '../../api/endpoints/routes.js'
import { APITestdata } from '../../testdata/fakerStoreApiTestData.js'

test('@master @api TC01 — Authentication: Login and Validate Token', async ({ request }) => {
    const data =
    {
        username: APITestdata.username,
        password: APITestdata.password
    }

    const URL = `${APITestdata.BASE_URL}${Routes.AUTH_LOGIN}`;

    const res = await request.post(URL, { data: data });
    expect(res.status()).toBe(201);
    const responseBody = await res.json();
    expect(responseBody).toHaveProperty('token')
    expect(typeof responseBody.token).toBe('string');
    expect(responseBody.token.length).toBeGreaterThan(0);

})

test('@master @api TC02 — Invalid Login / Authentication Failure', async ({ request }) => {
    const data =
    {
        username: APITestdata.invalidUser,
        password: APITestdata.invalidPassword
    }

    const URL = `${APITestdata.BASE_URL}${Routes.AUTH_LOGIN}`;

    const res = await request.post(URL, { data: data });
    expect(res.status()).toBe(401);
    const responseBody = await res.text();
    expect(responseBody).toContain('username or password is incorrect');

})

