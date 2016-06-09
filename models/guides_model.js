var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var guideSchema = mongoose.Schema({
  password: String,
  email: String,
  firstName: String,
  lastName: String
});

guideSchema.methods.validPassword = function(pwd){
  return bcrypt.compareSync(pwd, this.password);
};

guideSchema.methods.encrypt = function(pwd){
  return bcrypt.hashSync(pwd, 8);
};

var Guide = mongoose.model('Guide', guideSchema);

module.exports = Guide;
