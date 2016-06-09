db = require('../db.js');
var User = require('../models/users_model.js');

var users = {};

users.index = function(req, res){
  User.find({}, function(err, users){
    if(err){
      throw err;
    }
    res.json(users);
  });
};

users.create = function(req, res){
  var user = new User();
  user.password = user.encrypt(req.body.password);
  user.email = req.body.email;
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.save(function(err){
    if(err){
      throw err;
    }
    res.json(user);
  });
};

module.exports = users;

