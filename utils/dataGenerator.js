import { faker } from '@faker-js/faker';

export class RandomDataUtil {

    static getFirstName() {
        return faker.person.firstName();
    }

    static getLastName() {
        return faker.person.lastName();
    }

    static getEmail() {
        return faker.internet.email();
    }

    static getPhoneNumber() {
        return faker.string.numeric(10);
    }

    static getPassword() {
        return `Test@${faker.string.numeric(6)}`;
    }

    static createUser() {

        const firstName = this.getFirstName();
        const lastName = this.getLastName();

        return {
            firstName,
            lastName,
            email: faker.internet.email({
                firstName,
                lastName
            }),
            phone: this.getPhoneNumber(),
            password: this.getPassword()
        };
    }
}