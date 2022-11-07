'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: DataTypes.STRING
  }, {});
  Pessoas.associate = function(models) {
    // associations can be defined here
  };
  return Pessoas;
};