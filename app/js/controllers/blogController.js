/**
 * blogController
 * Created by dcorns on 10/9/15
 * Copyright © 2015 Dale Corns
 */
'use strict';

module.exports = function(app){
  app.controller('blogController', function($scope){
    $scope.blogApp = {}; $scope.blogApp.blogs = [];
    var blog = {title: '', article: '', author: '', date: '', lastUpdate: '', comments: [{username: '', comment: '', like: 0}]};
    blog.title = 'Blog number 1';
    blog.article = 'This is a blog so you better read it!';
    $scope.blogApp.blogs.push(blog);
  });
};