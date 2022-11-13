'use strict';
module.exports = (sequelize, DataTypes) => {
  const Nivel = sequelize.define('Nivel', {
    desc_Nivel: DataTypes.STRING
  }, {});
  Nivel.associate = function(models) {
    
    Nivel.hasMany(models.Turmas,{
      foreignKey: 'nivel_id'

    })
  };
  return Nivel;
};