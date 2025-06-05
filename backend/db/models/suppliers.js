'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Suppliers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Suppliers.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contactInfo: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: {
        'salesRep': '',
        'email': '',
        'phone': '',
        'url': ''
      }
    }
  }, {
    sequelize,
    modelName: 'Suppliers',
  });
  return Suppliers;
};
