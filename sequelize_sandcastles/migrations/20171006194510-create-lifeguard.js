'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Lifeguards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      beachId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Beaches',
          key: 'id'
      },
      date_started: {
        type: Sequelize.STRING
      },
      test_up_to_date: {
        type: Sequelize.BOOLEAN
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Lifeguards');
  }
};