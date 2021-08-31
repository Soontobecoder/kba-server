'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      tipeMesin: {
        type: Sequelize.STRING
      },
      volumeLangkah: {
        type: Sequelize.STRING
      },
      sistemSuplaiBahanBakar: {
        type: Sequelize.STRING
      },
      diamterXLangkah: {
        type: Sequelize.STRING
      },
      tipeTransmisi: {
        type: Sequelize.STRING
      },
      rasioKompresi: {
        type: Sequelize.STRING
      },
      dayaMaksimum: {
        type: Sequelize.STRING
      },
      torsiMaksimum: {
        type: Sequelize.STRING
      },
      tipeStarter: {
        type: Sequelize.STRING
      },
      tipeKopling: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};