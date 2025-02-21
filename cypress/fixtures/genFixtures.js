const fs = require('fs');
const { faker } = require('@faker-js/faker');  // Correct import

// Generate a random user object
const user = {
  firstName: faker.person.firstName,  // Correct method access
  lastName: faker.person.lastName,
  email: faker.internet.email(),
  password: faker.internet.password(),
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  county: faker.location.county(),
  phone: faker.phone.number()
};

// Write this user data to a JSON file inside `cypress/fixtures`
fs.writeFileSync('userData.json', JSON.stringify(user, null, 2));

console.log('Fixture file created with Faker data!');
