/**
 * blogController
 * Created by dcorns on 10/9/15
 * Copyright © 2015 Dale Corns
 */
'use strict';

module.exports = function(app){
  app.controller('blogController', function($scope, $window, $http, blogService){
    $scope.blogApp = {}; $scope.blogApp.blogs = [];
    $scope.blogApp.oneBlog = {title: 'Blog Title', article: 'article here', id: ''};
    $scope.blogApp.user ={id:''};
    $scope.blogApp.user.id = $window.sessionStorage.getItem('blogLogin');
    //$scope.getBlogs = function(){
    //  $http.get('../blog')
    //    .then(function success(res){
    //      $scope.blogApp.blogs = res.data || [];
    //    },
    //    function failure(res){
    //      alert('Blog Requisition Failed!');
    //      console.dir(res);
    //    })
    //};
    $scope.postNew = function(){
      blogService.postNew($scope);
    };
    //$scope.postNew = function(){
    //  $scope.blogApp.oneBlog.author = $scope.blogApp.user.id;
    //  $http.post('../blog', $scope.blogApp.oneBlog)
    //    .then(function success(res){
    //      console.dir(res.data);
    //      alert('New blog ' + res.data.title + ' Posted!');
    //      $scope.blogApp.blogs.push(res.data);
    //    },
    //    function failure(res){
    //      alert('Blog Post Failed!');
    //      console.dir(res.body);
    //    })
    //};
    blogService.getBlogs($scope);
  });
};