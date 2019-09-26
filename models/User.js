const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  login: String,
  password: String,
  todolist: [],
});


module.exports = mongoose.model('User', userSchema);

