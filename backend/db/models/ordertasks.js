'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderTasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderTasks.init({
    orderId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    details: DataTypes.STRING,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    status: DataTypes.ENUM,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderTasks',
  });
  return OrderTasks;
};