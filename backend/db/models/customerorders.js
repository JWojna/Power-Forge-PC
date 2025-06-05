'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CustomerOrders.init({
    buildId: DataTypes.INTEGER,
    status: DataTypes.ENUM,
    priority: DataTypes.ENUM,
    startDate: DataTypes.DATE,
    dueDate: DataTypes.DATE,
    completedAt: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CustomerOrders',
  });
  return CustomerOrders;
};