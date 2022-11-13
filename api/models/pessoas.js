'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: DataTypes.STRING
  }, {});
  Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Turmas,{
      foreignKey: 'docente_id'

    })
    Pessoas.hasMany(models.Matriculas,{
      foreignKey: 'estudante_id'

    })
    
  };
  return Pessoas;
};