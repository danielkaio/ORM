'use strict';
module.exports = (sequelize, DataTypes) => {
  const turmas = sequelize.define('turmas', {
    data_inico: DataTypes.DATE
  }, {});
  turmas.associate = function(models) {
    
    turmas.hasMany(models.Matriculas,{

      foreignKey: 'turma_id'

    })

    turmas.hasMany(models.Pessoas,{

      foreignKey: 'docente_id'

    })

    turmas.belongsTo(models.Pessoas)
    turmas.belongsTo(models.Niveis)
    
  };
  return turmas;
};