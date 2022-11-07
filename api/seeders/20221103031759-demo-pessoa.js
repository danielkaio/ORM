module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Pessoas', [
			{
				nome: 'Ana Souza',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Marcos Cintra',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Felipe Cardoso',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			
		
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Pessoas', null, {})
  }
}
