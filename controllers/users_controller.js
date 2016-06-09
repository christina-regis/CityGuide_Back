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

users.show = function(req, res){
  User.findById(req.params.id, function(err, user){
    if(err){
      throw err;
    }
    res.json(user);
  });
};

users.update = function(req, res){
  User.findById(req.params.id, function(err, user){
    if (err) throw err;
    user.email = req.body.email;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.save(function(err){
      if (err) throw err;
      res.json(user);
    });
  });
};

users.destroy = function(req, res){
  User.findByIdAndRemove(req.params.id, function(err){
    if (err) throw err;
    res.json({success: true, message: "user destroyed"});
  });
};

module.exports = users;

