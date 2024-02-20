const faker = require('faker');


class ProductOrderFactory {
  constructor() {
    this.id = 1;

  }

    generate(order, product) {
      return {
        id: this.id++,
        order: order.id,
        product: product.id,
        cantidad: faker.datatype.number({ min: 1, max: 30 })
      };
    }
  }
  
  module.exports = ProductOrderFactory;