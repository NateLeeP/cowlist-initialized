// Write controllers that will query the database. How will we do that?

const Models = require('../db/models.js');

var getAll = (req, res) => {
  // do we need arguments? We pass in request and response
  Models.cow.findAll()
  .then((results) => {
    res.status(201).json(results)
  })
  .catch((err) => {
    console.log("Error in 'getAll' function! Error: ", err);
  })

}

var post = (req, res) => {
  var name = req.body.name;
  var description = req.body.description;
  console.log(req.body);
  Models.cow.create({
    // create takes an object of your insertions
    'name': name,
    'description': description
  })
  .then((result) => {
    console.log("Successful post!")
    // return inserted row
    console.log("Here is the result: ", result);
    res.status(201).send('ok');
  })
  .catch((err) => {
    console.log("Error in your post method! Error: ", err)
    res.status(500).send("not good")
  })
}

exports.getAll = getAll;
exports.post = post;