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
    let rad = require('../APIs/random');
    let couponArr = [];
    for (let i = 0; i < 15;i++) {
      let couponItem = {};
      couponItem.couponId = rad.randInt(1, 3);
      couponItem.productId = rad.randInt(1, 21);
      couponItem.createdAt = Sequelize.literal('NOW()');
      couponItem.updatedAt = Sequelize.literal('NOW()');
      couponArr.push(couponItem);
    }
    await queryInterface.bulkInsert('CouponItems', couponArr);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('CouponItems', null, {});
  }
};
