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
  tour.time = req.body.time;
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

tours.show = function(req, res){
  Tour.findById(req.params.id, function(err, tour){
    if(err){
      throw err;
    }
    res.json(tour);
  });
};

tours.update = function(req, res){
  Tour.findById(req.params.id, function(err, tour){
    if (err) throw err;
    tour.city = req.body.city;
    tour.date = req.body.date;
    tour.time = req.body.time;
    tour.description = req.body.description;
    tour.price = req.body.price;
    tour.completed = req.body.completed;
    tour.save(function(err){
      if (err) throw err;
      res.json(tour);
    });
  });
};

tours.destroy = function(req, res){
  Tour.findByIdAndRemove(req.params.id, function(err){
    if (err) throw err;
    res.json({success: true, message: "tour destroyed"});
  });
};

module.exports = tours;
