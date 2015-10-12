/**
 * userController
 * Created by dcorns on 10/9/15
 * Copyright © 2015 Dale Corns
 */
'use strict';

module.exports = function(app){
  app.controller('userController', function($scope, $http, $location){
    $scope.user = {
      username: '',
      email: '',
      password: ''
    };
    $scope.addUser = function(){
      console.log('addUser');
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
      $http.post('../users/login', $scope.user)
        .then(function success(res){
          alert('Login Complete');
          $location.url('/#/blog');
        },
      function failure(res){
        alert('Login Failed');
        console.dir(res);
      })
    };
  });
};