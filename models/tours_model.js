var mongoose = require('mongoose');

var tourSchema = mongoose.Schema({
  city: String,
  date: Date,
  description: String,
  price: Number,
  completed: Boolean
  //user reference
  // reference tour model
});

var Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
