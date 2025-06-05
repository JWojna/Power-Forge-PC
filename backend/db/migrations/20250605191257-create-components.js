'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Components', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: false
      },
      specs: {
        type: Sequelize.JSONB,
        allowNull: true,
        defaultValue: {}
      },
      price: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false
      },
      stockQty: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      reorderLevel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      supplierId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      barcode: {
        type: Sequelize.STRING,
        allowNull: true
      },
      location: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = 'Components';
    await queryInterface.dropTable(options);
  }
};
