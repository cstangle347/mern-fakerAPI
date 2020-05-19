//import express
const express = require('express');
const app = express();
const port = 8000;

//import fakerAPI
const faker = require('faker');

class User {
    constructor() {
        this.firstName =faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = `${faker.phone.phoneNumber()}`;
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.streetAddress = faker.address.streetAddress();
        this.streetName = faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.stateAbbr();
        this.zipcode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

app.get('/api/users/new', (req, res) => {
    newUser = new User();
    res.json({newUser});
});

app.get('/api/companies/new', (req, res) => {
    newCompany = new Company();
    res.json({newCompany});
});

app.get('/api/user/company', (req, res) => {
    newUser = new User();
    newCompany = new Company();
    res.json({newUser, newCompany});
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
