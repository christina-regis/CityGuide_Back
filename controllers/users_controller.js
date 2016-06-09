db = require('../db.js');
var User = require('../models/users_model.js');

var users = {};

users.index = function(req, res){
  User.find({}, function(err, user){
    if(err){
      throw err;
    }
    res.json(users);
  });
};
