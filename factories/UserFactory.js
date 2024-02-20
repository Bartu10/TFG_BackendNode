const faker = require('faker');





class UserFactory {

  constructor() {
    this.id = 1;

  }

    generate() {
      return {
        id: this.id++,
        name: faker.name.firstName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        admin: false,
        password: faker.internet.password(),
        imageid: "64771822806eca2700dc8b2c",
        
      };
    }


    generateAdmin() {
      return {
        id: this.id++,
        name: "javi",
        username: "bartusito",
        email: "jbg10102002@gmail.com",
        admin: true,
        password: "29042904Jbg",
        imageid: "64771822806eca2700dc8b2c",
      };
    }

  }

  module.exports = UserFactory;