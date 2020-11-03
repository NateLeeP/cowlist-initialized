// Create 'cows' model
const Sequelize = require('sequelize');
const path = require('path');
const sequelize = require(path.join(__dirname, './db.js'))

var Cow = sequelize.define('cows', {
  name: {
    type:Sequelize.STRING,
    allowNull:false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }},
  // I do not want time stamps
  {
    timestamps:false
  }
)


exports.cow = Cow;