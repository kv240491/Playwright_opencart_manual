import dotenv from 'dotenv';
dotenv.config();
export class OpenCartTestData {

    static appURL = process.env.WEB_APP_URL;

    static prodMacAir = "MacBook Air";

    static adminUser = process.env.ADMIN_USERNAME;

    static adminPassword = process.env.ADMIN_PASSWORD;

    static adminURL = process.env.ADMIN_APP_URL;



    static validCustomer = {
        email : process.env.APP_EMAIL,
        password : process.env.APP_PASSWORD
    }

     static invalidCustomer = {
        email : "invalid@email.com",
        password : "invalid@123"
    }
}
