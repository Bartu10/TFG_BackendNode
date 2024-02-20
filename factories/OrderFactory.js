const faker = require('faker');

class OrderFactory {
    constructor() {
      this.id = 1;

    }

    generate(user) {
      return {
        id: this.id++,
        fecha: faker.date.future().toLocaleDateString(),
        price: faker.datatype.number({ min: 1, max: 20 }),
        user: user.id,


      };
    }
  }
  
module.exports = OrderFactory;