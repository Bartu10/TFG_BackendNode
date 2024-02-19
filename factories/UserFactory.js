const faker = require('faker');





class UserFactory {
    generate() {
      return {
        name: faker.name.firstName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        admin: faker.random.boolean(),
        password: faker.internet.password(),
        imageid: "64771822806eca2700dc8b2c"
      };
    }
  }

  module.exports = UserFactory;