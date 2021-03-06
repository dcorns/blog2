/**
 * routes
 * Created by dcorns on 10/9/15
 * Copyright © 2015 Dale Corns
 */
'use strict';

module.exports = function(app){
  app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/user/login", {
      templateUrl: "views/login.html",
      controller: "userController"
    })
      .when('/user/new', {
        templateUrl: 'views/join.html',
        controller: 'userController'
      })
      //.when('/blog/allblogs',{
      //  templateUrl: 'views/viewBlog.html',
      //  controller: 'blogController'
      //})
      //.when('/blog/edit/:blog_id/', {
      //  templateUrl: 'views/editBlog.html',
      //  controller: 'blogController'
      //})
      .when('/blog/oneblog', {
        templateUrl: 'views/viewBlog.html',
        controller: 'blogController'
      })
      .when('/blog/newblog',{
        templateUrl: 'views/editBlog.html',
        controller: 'blogController'
      })
      .when('/blog/home',{
        templateUrl: 'views/home.html',
        controller: 'homeController'
      })
      .otherwise({
        redirectTo: '/blog/home'
      });
  }]);
};