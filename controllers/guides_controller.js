db = require('../db.js');
var Guide = require('../models/guides_model.js');

var guides = {};

guides.index = function(req, res){
  Guide.find({}, function(err, guides){
    if(err){
      throw err;
    }
    res.json(guides);
  });
};

guides.create = function(req, res){
  var guide = new Guide();
  guide.password = guide.encrypt(req.body.password);
  guide.email = req.body.email;
  guide.firstName = req.body.firstName;
  guide.lastName = req.body.lastName;
  guide.save(function(err){
    if(err){
      throw err;
    }
    res.json(guide);
  });
};

module.exports = guides;
