'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Coupon.hasMany(models.CouponItem, {foreignKey: 'couponId'});
    }
  };
  Coupon.init({
    name: DataTypes.STRING,
    effect: DataTypes.DECIMAL,
    code: DataTypes.STRING,
    expired: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Coupon',
  });
  return Coupon;
};