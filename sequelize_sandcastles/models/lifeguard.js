'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lifeguard = sequelize.define('Lifeguard', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    date_started: DataTypes.STRING,
    test_up_to_date: DataTypes.BOOLEAN
  }, {timestamps: false});

  Lifeguard.associate = function(models) {
    Lifeguard.belongsTo(models.Beach, {
      foreignKey: 'beachId',
      onDelete: 'CASCADE'
    });

  };
  return Lifeguard;
};