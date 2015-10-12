/**
 * main
 * Created by dcorns on 10/8/15
 * Copyright © 2015 Dale Corns
 */
'use strict';
require('angular');
require('angular-route');

(function () {
  var app = angular.module('blog', ['ngRoute']);
  require('./routes')(app);
  require('./controllers/blogController')(app);
  require('./controllers/userController')(app);
}());