'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CouponItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CouponItem.belongsTo(models.Coupon, {foreignKey: 'couponId'});
      CouponItem.belongsTo(models.Product, {foreignKey: 'productId'});
    }
  };
  CouponItem.init({
    couponId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CouponItem',
  });
  return CouponItem;
};