const express = require('express')
const app = express()
const path = require('path');
const sequelize = require(path.join(__dirname, './db/db.js'))
const port = 3000
const Controllers = require(path.join(__dirname, './controllers/controller.js'));
const bodyParser = require('body-parser');


app.use(express.static('./client/dist'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Sync files with sequelize
sequelize
.sync({force:true}) // but can I still create?
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

app.get('/', (req, res) => res.send('Hello World!'))

// Create a RESTful API for a resource named 'cows'

// request: GET. Endpoint: /api/cows

app.get('/api/cows', (req,res) => {
  // Run function at this path
  Controllers.getAll() // returns a promise
  .then((results) => {
    res.status(201).json(results)
  })
  .catch((err) => {
    console.log("Error in 'getAll' function! Error: ", err);
  })

  //res.json({"Congrats!":"This GET request works!"});
})

app.post('/api/cows', (req, res) => {
  // write post in controller
  // run function
  Controllers.post(req)
  .then((result) => {
    // return inserted row
    res.status(201).json({name: result.dataValues.name, description: result.dataValues.description});
  })
  .catch((err) => {
    console.log("Error in your post method! Error: ", err)
    res.status(500).send("not good")
  })
  //res.json({"Congrats!":"This POST request works!"});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))