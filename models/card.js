'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Card extends Sequelize.Model {}
    Card.init({
        question: Sequelize.STRING,
        hint: Sequelize.STRING,
        answer: Sequelize.STRING,
        // topic: Sequelize.STRING
    }, {sequelize}); 

    return Card;
};
