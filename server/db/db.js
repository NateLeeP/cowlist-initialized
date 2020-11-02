// Establish connection with database.

// Use sequelize
const Sequelize = require('sequelize');

var options = {
  host:'localhost',
  dialect: 'mysql',
  port: 3307
}

module.exports = new Sequelize('cows', 'nlpruitt', 'Russ3llW3stbrook0', options)

