/**
 * postBlogService
 * Created by dcorns on 10/15/15
 * Copyright © 2015 Dale Corns
 */
'use strict';

module.exports = function(app){
  var BlogInterface = function($http, $location){
    this.getBlogs = function($scope){
      $http.get('../blog')
        .then(function success(res){
          $scope.blogApp.blogs = res.data || [];
        },
        function failure(res){
          alert('Blog Requisition Failed!');
          console.dir(res);
        })
    };
    this.postNew = function($scope){
      $scope.blogApp.oneBlog.author = $scope.blogApp.user.id;
      $http.post('../blog', $scope.blogApp.oneBlog)
        .then(function success(res){
          console.dir(res.data);
          alert('New blog ' + res.data.title + ' Posted!');
          $scope.blogApp.blogs.push(res.data);
          $location.url('/#/blog');
        },
        function failure(res){
          alert('Blog Post Failed!');
          console.dir(res.body);
        })
    };
  };
  app.service('blogService', BlogInterface);
};