/**
 * homeController
 * Created by dcorns on 10/18/15
 * Copyright © 2015 Dale Corns
 */
'use strict';
module.exports = function(app){
  app.controller('homeController', function($scope, blogService){
    //set home page featured blog here
    $scope.homeBlog = blogService.getBlogList()[0];
  });
};