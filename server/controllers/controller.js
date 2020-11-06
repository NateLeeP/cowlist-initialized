// Write controllers that will query the database. How will we do that?

const Models = require('../db/models.js');

var getAll = () => {
  // do we need arguments? We pass in request and response
  return Models.cow.findAll();
  // return a promise, then chain

}

var create = ({body}) => {
  var name = body.name;
  var description = body.description;
  return Models.cow.create({
    // create takes an object of your insertions
    'name': name,
    'description': description
  })
  //return a promise
}

var update = ({body, url}) => {
  var name = body.name;
  var description = body.description;
  var id = url.split(':')[1] // extract ID
  // Similar to create, but already a row in place
  return Models.cow.update({
    'name':name,
    'description':description
  }, {
    where: {
      'id': id
    }
  })
}

var deleteOne = (id) => {
  // accepts cow id
  return Models.cow.destroy({
    where: {
      'id': id
    }
  })
}


exports.getAll = getAll;
exports.create = create;
exports.update = update;
exports.delete = deleteOne;