// Establish connection with database.

// Use sequelize
const Sequelize = require('sequelize');

var options = {
  host:'localhost',
  dialect: 'mysql',
  port: 3306
}

module.exports = new Sequelize('cows', 'root', 'root', options)

