/**
 * main
 * Created by dcorns on 10/8/15
 * Copyright © 2015 Dale Corns
 */
'use strict';
require('angular');
require('angular-route');
require('angular-utils-pagination');

(function () {
  var app = angular.module('blog', ['ngRoute','angularUtils.directives.dirPagination']);
  require('./routes')(app);
  require('./controllers/blogController')(app);
  require('./controllers/userController')(app);
  require('./controllers/homeController')(app);
  require('./services/blogService')(app);
}());