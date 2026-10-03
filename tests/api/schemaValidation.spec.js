import { test, expect } from '@playwright/test'
import { Routes } from '../../api/endpoints/routes.js'
import { APITestdata } from '../../testdata/fakerStoreApiTestData.js'
import path from 'path';
import Ajv from 'ajv'
import { DataProvider } from '../../utils/dataReader.js'
const ajv = new Ajv();

test('@master @api TC03 — Product JSON Schema Validation', async ({ request }) => {
    const URL = `${APITestdata.BASE_URL}${Routes.GET_PRODUCT_BY_ID.replace('{id}', String(APITestdata.productID))}`;
    const res = await request.get(URL);
    expect(res.status()).toBe(200);
    const resbody = await res.json();

    const schemaPath = path.resolve(
        process.cwd(),
        'api',
        'schemas',
        'product_api_schema.json'
    )

    const prodSchema = DataProvider.readJson(schemaPath);
    const validate = ajv.compile(prodSchema);
    const isValid = validate(resbody);

    if (!isValid) {
        console.log('Product Schema Validation Errors:', JSON.stringify(validate.errors, null, 2));
    }

    expect(isValid).toBeTruthy();

})