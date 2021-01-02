'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    
    }
  };
  Product.init({
    name: DataTypes.STRING,
    detail: DataTypes.TEXT,
    type: DataTypes.INTEGER,
    src: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    status: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    like: DataTypes.INTEGER,
    orderTime: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};