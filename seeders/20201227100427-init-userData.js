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
    let userDatas = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../public/json/userdata.json')));
    for (let userData of userDatas) {
      userData.createdAt = Sequelize.literal('NOW()');
      userData.updatedAt = Sequelize.literal('NOW()');
    }
    await queryInterface.bulkInsert('UserData', userDatas);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('UserData', null, {});
  }
};
