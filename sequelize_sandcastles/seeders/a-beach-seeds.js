'use strict';

const { beaches } = require('./data/beaches');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Beaches', beaches, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Beaches', null, {});
  }
};
