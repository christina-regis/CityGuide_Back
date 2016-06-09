//mongo connection
var mongoose = require('mongoose');
var mongoURL = process.env.MONGODB_URI || 'mongodb://localhost/CityGuide_Back';
mongoose.connect(mongoURL, function(err){
  if (err){
    return console.log('Cannot connect to database', err);
  }
  return console.log('Database connected');
});

module.exports = mongoose;
