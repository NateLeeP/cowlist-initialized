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
    res.status(500).send("Error!");
  })
})
app.post('/api/cows', (req, res) => {
  // write post in controller
  // run function
  Controllers.create(req)
  .then((result) => {
    // return inserted row
    res.status(201).json({name: result.dataValues.name, description: result.dataValues.description});
  })
  .catch((err) => {
    console.log("Error in your post method! Error: ", err)
    res.status(500).send("not good")
  })
})

app.put('/api/cows:id', (req, res) => {
  //console.log(req.url.split(':')[1]); // How to extract 'id' from put request.
 // res.status(201).send("successful put request");
  // Now, using request body, update the information.
  // On put request
  Controllers.update(req)
  .then((results) => {
    res.status(201).json(req.body);
  })
  .catch((err) => {
    res.status(500).send("Error with 'update' function!");
  })
  // Update Model at ID? But how do I get id?
  // Controller will make user of Model.update
})

app.delete('/api/cows:id', (req, res) => {
  let id = req.url.split(':')[1];
  Controllers.delete(id)
  .then((results) => {
    console.log("Results of delete call:", results);
    res.sendStatus(201)
  })
  .catch((err) => {
    res.status(500).send("Error with 'delete' controller!");
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))