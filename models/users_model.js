var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
  password: String,
  email: String,
  firstName: String,
  lastName: String,
  phoneNumber: String,
  description: String,
  guide: {type: Boolean, default: false},
  //reference tour model
  tours: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tour'}]
});

userSchema.methods.validPassword = function(pwd){
  return bcrypt.compareSync(pwd, this.password);
};

userSchema.methods.encrypt = function(pwd){
  return bcrypt.hashSync(pwd, 8);
};

var User = mongoose.model('User', userSchema);

module.exports = User;
