const faker = require('faker');

function fakerFunc(value, index) {
  switch (value) {
    case 'id':
      return index;
    default:
      return faker.fake(`{{${value}}}`);
  }
}

module.exports = fakerFunc;
