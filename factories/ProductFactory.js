const faker = require('faker');

class ProductFactory {
    generate() {
      const year = String(faker.random.number({ min: 1970, max: 2022 }));
      const retro = parseInt(year) < 2018;
  
      return {
        name: `Camiseta ${this.getRandomTeam()} ${year}`,
        description: faker.lorem.paragraph(2),
        price: faker.random.number({ min: 40, max: 100 }),
        state: faker.random.arrayElement(["Nuevo", "Usado"]),
        yr: year,
        retro: retro,
        team: this.getRandomTeam(),
        imageUrl: "https://i.imgur.com/xvgMf2U.jpg",
        XL: faker.random.number({ min: 0, max: 200 }),
        L: faker.random.number({ min: 0, max: 200 }),
        M: faker.random.number({ min: 0, max: 200 }),
        S: faker.random.number({ min: 0, max: 200 })
      };
    }
  
    getRandomTeam() {
      const teams = [
        "Real Madrid", "Barcelona", "Manchester United", "Bayern Munich",
        "Liverpool", "Juventus", "Paris Saint-Germain", "Chelsea",
        "Arsenal", "AC Milan", "Inter Milan", "Borussia Dortmund"
      ];
      return faker.random.arrayElement(teams);
    }
  }
  
module.exports = ProductFactory;