import dotenv from 'dotenv';
dotenv.config();

export const APITestdata = {

    BASE_URL: process.env.API_BASE_URL,
    username: process.env.API_USER,
    password: process.env.PASSWORD,
    invalidUser: "invalid_user",
    invalidPassword: "invalid_password",
    productID: 1,
    cartPayload: {
        userId: 1,
        date: '2026-10-02',
        products: [
            {
                productId: 1,
                quantity: 2
            },
            {
                productId: 2,
                quantity: 1
            }
        ]
    },
    updateCartPayload: {
        userId: 1,
        date: '2026-10-02',
        products: [
            {
                productId: 1,
                quantity: 5
            },
            {
                productId: 2,
                quantity: 1
            }
        ]
    }

}