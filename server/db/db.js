// Establish connection with database.

// Can store all sequalize, database connection files in one location. Then export 'sequelize' object.
// Use sequelize
const Sequelize = require('sequelize');

var options = {
  host:'localhost',
  dialect: 'mysql',
  port: 3306
}
const sequelize = new Sequelize('cows', 'root', 'root', options);
// Sync files with sequelize
sequelize
.sync({force:false}) // but can I still create?
.then((err) => {
  console.log("Huzzah! the sync worked")
})
.catch((err) => {
  console.log("Something went wrong syncing!", err)
})
sequelize
.authenticate()
.then((err) => {
  console.log("Connection established successfully!")
})
.catch((err) => {
  console.log("Unable to connection! Error:", err)
});

module.exports = sequelize;

