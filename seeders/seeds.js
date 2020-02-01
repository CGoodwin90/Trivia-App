'use strict';

module.exports = {
    up : function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Cards', [{
        question : 'What does the Latin saying Carpe Diem mean?',
        answer : 'Seize the day',
        createdAt : new Date(),
        updatedAt : new Date(),
      }, {
        question : 'Which organ is stimulated by the drug Digitalis?',
        answer : 'Heart',
        createdAt : new Date(),
        updatedAt : new Date(),
      }
    ], {});
    },
  
    down : function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Cards', null)
    }
  };
