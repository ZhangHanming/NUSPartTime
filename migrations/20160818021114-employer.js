'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Employers', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        allowNull: false,
        references: 'Users',
        referenceKey: 'id'
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

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Employers');
  }
};
