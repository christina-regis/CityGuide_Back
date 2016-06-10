var mongoose = require('mongoose');

var tourSchema = mongoose.Schema({
  city: String,
  //yyyy-mm-dd
  date: Date,
  time: String,
  description: String,
  price: Number,
  completed: Boolean,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

var Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
