/**
 * blogController
 * Created by dcorns on 10/9/15
 * Copyright © 2015 Dale Corns
 */
'use strict';

module.exports = function(app){
  app.controller('blogController', function($scope, $window, $http, blogService){
    $scope.blogApp = {}; $scope.blogApp.blogs = []; $scope.blogApp.oneBlog = {title: '', article: ''};

    $scope.blogApp.user ={id:''};
    $scope.blogApp.user.id = $window.sessionStorage.getItem('blogLogin');
    $scope.postNew = function(){
      blogService.postNew($scope);
    };
    $scope.blogApp.showOne = function(idx){
      $scope.blogApp.idx = idx;
      blogService.showOneBlog($scope);
    };
    $scope.setPageNumber = function(pgn){
      blogService.setPageNumber(pgn);
    };
    blogService.getBlogs($scope);
  });
};