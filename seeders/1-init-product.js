'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let path = require('path');
    let fs = require('fs');
    let convert = require('../APIs/convert.js');
    let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../public/json/products.json')));
    for (let product of products) {
      product.status = convert.statusToCode(product.status);
      product.type = convert.typeToCode(product.type);
      product.createdAt = Sequelize.literal('NOW()');
      product.updatedAt = Sequelize.literal('NOW()');
    }
    await queryInterface.bulkInsert('Products', products);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  }
};
