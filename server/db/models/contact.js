'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    static associate({User}) {
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Contact.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    phone: DataTypes.STRING,
    info: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};
