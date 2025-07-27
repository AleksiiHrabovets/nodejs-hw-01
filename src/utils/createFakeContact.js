const { faker } = require('@faker-js/faker');

function createFakeContact() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    job: faker.person.jobTitle(),
  };
}

module.exports = createFakeContact;
