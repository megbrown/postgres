'use strict';
module.exports = (sequelize, DataTypes) => {
  var Beach = sequelize.define('Beach', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    sand_rating: DataTypes.INTEGER
  }, {timestamps: false});

  Beach.associate = function(models) {
    Beach.hasMany(models.Lifeguard, {
      foreignKey: 'BeachId'
    });
  };
  return Beach;
};