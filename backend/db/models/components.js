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
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    specs: {
      type: DataTypes.JSONB,
      allowNull: true,
      defaultValue: {}
    },
    price: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: false
    },
    stockQty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    reorderLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    supplierId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    barcode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Components',
  });
  return Components;
};
