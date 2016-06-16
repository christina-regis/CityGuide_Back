db = require('../db.js');
var Guide = require('../models/guides_model.js');

var guides = {};

guides.authenticate = function(req, res){
  if (req.body){
    var email = req.body.email.toLowerCase();
    var password = req.body.password;
    console.log(email, password);
    Guide.findOne({email: email})
      .then(function(guide){
        // console.log('========',guide.validPassword);
        // console.log('CHECK', guide.validPassword(password))
        if(guide.validPassword(password)){
        res.json(guide);
        } else {
          res.json('Uh oh');
        }
      }).catch(function(err){
        console.log('Got an error', err);
        res.json(err);
      });
  }
};

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
  guide.description = req.body.description;
  guide.phoneNumber = req.body.phoneNumber;
  guide.country = req.body.country;
  guide.city = req.body.city;
  guide.zipCode = req.body.zipCode;
  guide.info = req.body.info;
  guide.minTime = req.body.minTime;
  guide.maxTime = req.body.maxTime;
  guide.price = req.body.price;
  guide.user = req.body.userId;
  guide.tours = req.body.toursId;
  guide.save(function(err){
    if(err){
      throw err;
    }
    res.json(guide);
  });
};

guides.show = function(req, res){
  Guide.findById(req.params.id)
  .populate('user', 'tours')
  .exec(function(err, guide){
    if(err){
      throw err;
    }
    res.json(guide);
  });
};

guides.update = function(req, res){
  Guide.findById(req.params.id, function(err, guide){
    if (err) throw err;
    guide.email = req.body.email;
    guide.firstName = req.body.firstName;
    guide.lastName = req.body.lastName;
    guide.description = req.body.description;
    guide.phoneNumber = req.body.phoneNumber;
    guide.country = req.body.country;
    guide.city = req.body.city;
    guide.zipCode = req.body.zipCode;
    guide.info = req.body.info;
    guide.minTime = req.body.minTime;
    guide.maxTime = req.body.maxTime;
    guide.price = req.body.price;
    guide.user = req.body.userId;
    guide.tours = req.body.toursId;
    guide.save(function(err){
      if (err) throw err;
      res.json(guide);
    });
  });
};

guides.destroy = function(req, res){
  Guide.findByIdAndRemove(req.params.id, function(err){
    if (err) throw err;
    res.json({success: true, message: "guide destroyed"});
  });
};

module.exports = guides;
