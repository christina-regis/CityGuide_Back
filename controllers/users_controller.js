db = require('../db.js');
var User = require('../models/users_model.js');
var jwt = require('jsonwebtoken');
var secret = 'CityGuide';

var users = {};

users.authenticate = function(req, res){
  if (req.body){
    var email = req.body.email.toLowerCase();
    var password = req.body.password;
    User.findOne({email: email})
      .then(function(user){
        if(user.validPassword(password)){
          var token = jwt.sign({email: email, id: user._id, name: user.firstName}, secret, {expiresIn: 3600});
          console.log("token", token);
        res.json(user);
        } else {
          res.json('Uh oh');
        }
      }).catch(function(err){
        console.log('Got an error', err);
        res.json(err);
      });
  }
};

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
  user.phoneNumber = req.body.phoneNumber;
  user.description = req.body.description;
  // user.guide = req.body.guide;
  // user.tours = req.body.toursId;
  var token = jwt.sign({email: req.body.email, id: user._id, name: req.body.firstName}, secret, {expiresIn: 3600});
  console.log("create token", token);
  user.save(function(err){
    if(err){
      throw err;
    }
    res.json(user);
  });
};

users.show = function(req, res){
  User.findById(req.params.id)
  .populate('tours')
  .exec(function(err, user){
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
    user.phoneNumber = req.body.phoneNumber;
    user.description = req.body.description;
    user.guide = req.body.guide;
    user.tours = req.body.toursId;
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

