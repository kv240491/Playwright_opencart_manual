# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\AuthValidation.spec.js >> @master @api TC01 — Authentication: Login and Validate Token
- Location: tests\api\AuthValidation.spec.js:5:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 522
```

# Test source

```ts
  1  | import { test, expect, request } from '@playwright/test'
  2  | import { Routes } from '../../api/endpoints/routes.js'
  3  | import { APITestdata } from '../../testdata/fakerStoreApiTestData.js'
  4  | 
  5  | test('@master @api TC01 — Authentication: Login and Validate Token', async ({ request }) => {
  6  |     const data =
  7  |     {
  8  |         username: APITestdata.username,
  9  |         password: APITestdata.password
  10 |     }
  11 | 
  12 |     const URL = `${APITestdata.BASE_URL}${Routes.AUTH_LOGIN}`;
  13 | 
  14 |     const res = await request.post(URL, { data: data });
> 15 |     expect(res.status()).toBe(201);
     |                          ^ Error: expect(received).toBe(expected) // Object.is equality
  16 |     const responseBody = await res.json();
  17 |     expect(responseBody).toHaveProperty('token')
  18 |     expect(typeof responseBody.token).toBe('string');
  19 |     expect(responseBody.token.length).toBeGreaterThan(0);
  20 | 
  21 | })
  22 | 
  23 | test('@master @api TC02 — Invalid Login / Authentication Failure', async ({ request }) => {
  24 |     const data =
  25 |     {
  26 |         username: APITestdata.invalidUser,
  27 |         password: APITestdata.invalidPassword
  28 |     }
  29 | 
  30 |     const URL = `${APITestdata.BASE_URL}${Routes.AUTH_LOGIN}`;
  31 | 
  32 |     const res = await request.post(URL, { data: data });
  33 |     expect(res.status()).toBe(401);
  34 |     const responseBody = await res.text();
  35 |     expect(responseBody).toContain('username or password is incorrect');
  36 | 
  37 | })
  38 | 
  39 | 
```