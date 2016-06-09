var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
  password: String,
  email: String,
  firstName: String,
  lastName: String
});

userSchema.methods.validPassword = function(pwd){
  return bcrypt.compareSync(pwd, this.password);
};

userSchema.methods.encrypt = function(pwd){
  return bcrypt.hashSync(pwd, 8);
};

var User = mongoose.model('User', userSchema);

module.exports = User;
