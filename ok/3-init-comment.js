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
    let comments = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../public/json/comments.json')));
    for (let comment of comments) {
      comment.createdAt = Sequelize.literal('NOW()');
      comment.updatedAt = Sequelize.literal('NOW()');
    }
    await queryInterface.bulkInsert('Comments', comments);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
