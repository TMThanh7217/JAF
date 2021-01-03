'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User, {foreignKey: 'userId'});
      Comment.belongsTo(models.Product, {foreignKey: 'productId'});
    }
  };
  Comment.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    avatar: DataTypes.STRING,
    author: DataTypes.STRING,
    isLiked: DataTypes.BOOLEAN,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};