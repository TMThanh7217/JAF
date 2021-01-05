'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Comment);
      User.hasMany(models.Notification);
      User.hasMany(models.Order);
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    phone: DataTypes.STRING,
    avatar: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    authorization: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};