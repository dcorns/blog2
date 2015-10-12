/**
 * user
 * Created by dcorns on 10/9/15
 * Copyright © 2015 Dale Corns
 */
'use strict';

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  addDate: Date,
  lastLogin: Date
});

module.exports = mongoose.model('user', userSchema);