/**
 * blog
 * Created by dcorns on 10/9/15
 * Copyright © 2015 Dale Corns
 */
'use strict';
var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
  title: String,
  article: String,
  author: String,
  date: Date,
  lastUpdate: Date,
  comments: Array//{username: String, comment: String, like: Number}
});

module.exports = mongoose.model('blog', blogSchema);