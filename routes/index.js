const express = require('express');

const router = express.Router();
// const { sessionChecker } = require('../middleware/auth');
// const mongoose = require('mongoose');
const User = require('../models/User');
const Task = require('../models/Task');

router.get('/', (req, res) => {
  res.render('helloPage');
});

router.get('/registration', (req, res) => {
  res.render('registrationPage');
});
router.post('/registration', async (req, res) => {
  try {
    const user = new User({
      email: req.body.email,
      login: req.body.login,
      password: req.body.password,
    });
    // console.log(user);

    await user.save();
    // req.session.user = user;
    res.redirect('/entry');
  } catch (error) {
    res.redirect('/registration');
  }
});

router.get('/entry', (req, res) => {
  res.render('entryPage');
});
router.post('/entry', async (req, res) => {
  const { login } = req.body;
  const { password } = req.body;
  const user = await User.findOne({ login });
  // console.log(user);

  if (!user) {
    res.redirect('/entry');
  } else if (user.password !== password) {
    res.redirect('/entry');
  } else {
    // req.session.user = user;
    res.redirect(`/accounts/${user.id}`);
  }
});

router.get('/accounts/:id', async (req, res) => {
  if (true) {
    const user = await User.findById(req.params.id);
    // console.log(user);
    const { todolist } = user;
    res.render('accountPage', { user, todolist });
  } else {
    res.redirect('/entry');
  }
});

router.post('/accounts/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  const task = new Task({
    title: req.body.title,
    group: req.body.group,
    done: false,
  });
  user.todolist.push(task);
  await user.save();
  res.redirect(`/accounts/${user.id}`);
});

router.get('/accounts/:user/:id/update', async (req, res) => {
  const { id, user } = req.params;

  const findTask = await User.findOne({ 'todolist._id': id });
    // const findTask = await User.findOne();
  console.log(findTask);
  //   const users = await User.find({});
  //   for (let i = 0; i < users.length; i++) {
  //     if(users[i].todolist )
  //   }
  //   console.log(task);

  //   // let taskFind = users.todolist.filter(id => req.params.id);
  //   // console.log(taskFind);

  //   // const task = await Task.findById(req.params.id);
  //   // console.log(task);
});

module.exports = router;
