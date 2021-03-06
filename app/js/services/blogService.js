/**
 * postBlogService
 * Created by dcorns on 10/15/15
 * Copyright © 2015 Dale Corns
 */
'use strict';

module.exports = function(app){
  var oneBlog = {title: '', article: ''};
  var blogs = [];
  var itemsPerPage = 3;
  var pagenumber = 0;
  var BlogInterface = function($http, $location){
    this.getBlogs = function($scope){
      console.log('getBlogs');
      $http.get('../blog')
        .then(function success(res){
          $scope.blogApp.blogs = res.data || [];
          if($scope.blogApp.blogs.length > 0){
          //  $scope.blogApp.oneBlog.title ? oneBlog = $scope.blogApp.oneBlog = oneBlog : $scope.blogApp.oneBlog = {title: $scope.blogApp.blogs[0].title, article: $scope.blogApp.blogs[0].article};
            blogs = res.data;
           $scope.blogApp.oneBlog = oneBlog || {title: $scope.blogApp.blogs[0].title, article: $scope.blogApp.blogs[0].article};
          }
          else $scope.blogApp.oneBlog = {};
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
    this.showOneBlog = function($scope){
      var adjIdx = $scope.blogApp.idx;
      if(pagenumber > 1){
        adjIdx = $scope.blogApp.idx + ((pagenumber - 1) * itemsPerPage);
      }
      //console.dir('pagenumber: ' + pagenumber + ' adjIdx: ' + adjIdx);
      $scope.blogApp.oneBlog.title = $scope.blogApp.blogs[adjIdx].title;
      $scope.blogApp.oneBlog.article = $scope.blogApp.blogs[adjIdx].article;
      $location.url('/blog/oneblog');
    };
    //get page number from paginator since it resets the ng-repeat $index every time it changes the page.
    this.setPageNumber = function(pgn){
      pagenumber = pgn;
    };
    this.getOneBlog = function(){
      return oneBlog;
    };
    this.getBlogList = function(){
      return blogs;
    };
  };
  app.service('blogService', BlogInterface);
};