// Write controllers that will query the database. How will we do that?

const Models = require('../db/models.js');

var getAll = () => {
  // do we need arguments? We pass in request and response
  return Models.cow.findAll();
  // return a promise, then chain

}

var post = (req) => {
  var name = req.body.name;
  var description = req.body.description;
  return Models.cow.create({
    // create takes an object of your insertions
    'name': name,
    'description': description
  })
  //return a promise

}

exports.getAll = getAll;
exports.post = post;