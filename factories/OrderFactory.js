const faker = require('faker');

class OrderFactory {
    generate(user) {
      return {
        fecha: faker.date.future().toLocaleDateString(),
        price: faker.random.number({ min: 1, max: 20 }),
        user: user
      };
    }
  }
  
module.exports = OrderFactory;