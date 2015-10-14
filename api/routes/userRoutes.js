/**
 * userRoutes
 * Created by dcorns on 10/9/15
 * Copyright © 2015 Dale Corns
 */
'use strict';
var User = require('../models/user');
module.exports = function(app){
  /**
   * Add user routes for json data and CRUD
   */
  app.route('/users')
//create a user
    .post(function(req, res) {
      var user = new User();
      console.log('post');
      console.dir(req.body);
      user.username = req.body.username;
      user.email = req.body.email;
      user.password = req.body.password;
      console.log(user.username);
      user.save(function(err) {
        if (err) res.send(err);
        res.json(user);
      });
    })

//get all users
    .get(function(req, res) {
      User.find(function(err, users) {
        if (err)
          res.send(err);
        res.json(users);
      });
    });

//On routes that end in /users/:user_id
  app.route('/users/:user_id')
    .get(function(req, res) {
      console.log('req: ' + req.params.user_id);
      User.findById(req.params.user_id, function(err, user) {
        if (err)
          res.send(err);
        res.json(user);
      });
    })
    .put(function(req, res) {
      console.dir(req.body);
      User.findById(req.params.user_id, function(err, user) {
        if (err)
          res.send(err);
        user.username = req.body.username;
        user.email = req.body.email;
        user.save(function(err) {
          if (err)
            res.send(err);
          res.json({
            message: 'User updated!'
          });
        });
      });
    })

    .delete(function(req, res) {
      User.remove({
        _id: req.params.user_id
      }, function(err, user) {
        if (err)
          res.send(err);
        res.json({
          message: 'User deleted!'
        });

      });
    });

  app.route('/login')
    .post(function(req, res) {
      User.findOne({'email': req.body.email, 'password': req.body.password},'email username', function(err, user){
        if (err) {
          console.dir(err);
          res.json(err);
        }
        if(user){
          user.lastLogin = new Date();
          user.save(function(err) {
            if (err) res.send(err);
            res.json(user);
          });
        }else{
          res.json({error: 'authentication failed'});
        }
      });
    });

};