'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // Users hasMany Comments
          model: 'Users',
          key: 'id'
        }
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // Products hasMany Comments
          model: 'Products',
          key: 'id'
        }
      },
      isLiked: {
        type: Sequelize.BOOLEAN
      },
      content: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Comments');
  }
};