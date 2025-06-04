'use strict';

const { ValidationError } = require('sequelize');
const { User } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await User.bulkCreate([
        {
          email: 'customer1@demo.io',
          firstName: 'Bill',
          lastName: 'Customer',
          role: 'customer',
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: 'customer2@demo.io',
          firstName: 'Barb',
          lastName: 'Customer',
          role: 'customer',
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: 'technician1@employee.io',
          firstName: 'Bob',
          lastName: 'Technician',
          role: 'technician',
          hashedPassword: bcrypt.hashSync('password2')
        },
        {
          email: 'technician2@employee.io',
          firstName: 'Berkley',
          lastName: 'Technician',
          role: 'technician',
          hashedPassword: bcrypt.hashSync('password2')
        },
        {
          email: 'admin@employee.io',
          firstName: 'Shake',
          lastName: 'Admin',
          role: 'admin',
          hashedPassword: bcrypt.hashSync('password3')
        }
      ], { validate: true });
    } catch (error) {
      console.log(error);
    }

  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      firstName: { [Op.in]: ['Bill', 'Barb', 'Bob', 'Berkley', 'Shake'] }
    }, {});
  }
};
