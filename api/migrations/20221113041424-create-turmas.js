'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('turmas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_inico: {
        type: Sequelize.DATE
      },
      docente_id:{

        allowNull: false,
        type: Sequelize.INTEGER,
        references:{model:"Pessoas",key:"id"}
      },

       nivel_id:{

        allowNull: false,
        type: Sequelize.INTEGER,
        references:{model:"Niveis",key:"id"}
        
       },


      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('turmas');
  }
};