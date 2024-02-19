const faker = require('faker');


class ProductOrderFactory {
    generate(order, product) {
      return {
        order,
        product,
        cantidad: faker.random.number({ min: 1, max: 30 })
      };
    }
  }
  
  module.exports = ProductOrderFactory;