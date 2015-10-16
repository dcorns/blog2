/**
 * userController
 * Created by dcorns on 10/9/15
 * Copyright © 2015 Dale Corns
 */
'use strict';

module.exports = function(app){
  app.controller('userController', function($scope, $http, $location, $window){
    $scope.user = {
      username: '',
      email: '',
      password: ''
    };
    $scope.addUser = function(){
      $http.post('../users', $scope.user)
        .then(function success(res){
         alert('New user ' + res.data.username + ' saved!');
          $location.url('/#/blog');
        },
      function failure(res){
        alert('Add user failed');
        console.dir(res);
      });
    };
    $scope.userLogin = function(){
      $http.post('../login', $scope.user)
        .then(function success(res){
          console.dir(res.data);
          $window.sessionStorage.setItem('blogLogin', res.data._id);
          $window.sessionStorage.setItem('isBlogUser', true);
          alert('Login Complete');
          $location.url('/#/blog');
        },
      function failure(res){
        alert('Login Failed');
        console.dir(res);
      });
    };
  });
};