var mongoose = require('mongoose');

var tourSchema = mongoose.Schema({
  city: String,
  //yyyy-mm-dd
  date: Date,
  time: String,
  description: String,
  price: Number,
  completed: {type: Boolean, default: false},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  guide: {type: mongoose.Schema.Types.ObjectId, ref: 'Guide'}
});

var Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
