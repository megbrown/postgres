'use strict';

const { lifeguards } = require('./data/lifeguards');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Lifeguards', lifeguards, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Lifeguards', null, {});
  }
};
