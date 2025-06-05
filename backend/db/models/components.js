'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Components extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Components.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    brand: DataTypes.STRING,
    specs: DataTypes.JSONB,
    price: DataTypes.NUMERIC,
    stockQty: DataTypes.INTEGER,
    reorderLevel: DataTypes.INTEGER,
    supplierId: DataTypes.INTEGER,
    barcode: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Components',
  });
  return Components;
};