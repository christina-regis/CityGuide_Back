db = require('../db.js');
var Tour = require('../models/tours_model.js');

var tours = {};

tours.index = function(req, res){
  Tour.find({}, function(err, tours){
    if(err){
      throw err;
    }
    res.json(tours);
  });
};

tours.create = function(req, res){
  var tour = new Tour();
  tour.city = req.body.city;
  tour.date = req.body.date;
  tour.description = req.body.description;
  tour.price = req.body.price;
  tour.completed = req.body.completed;
  tour.save(function(err){
    if(err){
      throw err;
    }
    res.json(tour);
  });
};

module.exports = tours;
