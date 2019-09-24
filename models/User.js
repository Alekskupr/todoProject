const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  login: String,
  password: String,
  todolist: [],
});

// const taskSchema = new mongoose.Schema({
//   title: String,
//   group: String,
//   done: Boolean,
// });

module.exports = mongoose.model('User', userSchema);
// module.exports = mongoose.model('Task', taskSchema);
