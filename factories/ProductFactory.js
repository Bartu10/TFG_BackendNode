const faker = require('faker');

class ProductFactory {
  constructor() {
    this.id = 1;

  }

  generate() {
    const year = String(faker.datatype.number({ min: 1970, max: 2022 }));
    const retro = parseInt(year) < 2018;
    const team = this.getRandomTeam();

    return {
      id: this.id++,
      name: `Camiseta ${team} ${year}`,
      description: faker.lorem.paragraph(2),
      price: faker.datatype.number({ min: 40, max: 100 }),
      state: faker.random.arrayElement(["Nuevo", "Usado"]),
      yr: year,
      retro: retro,
      team: team,
      imageUrl: "https://i.imgur.com/xvgMf2U.jpg",
      XL: faker.datatype.number({ min: 0, max: 200 }),
      L: faker.datatype.number({ min: 0, max: 200 }),
      M: faker.datatype.number({ min: 0, max: 200 }),
      S: faker.datatype.number({ min: 0, max: 200 })
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