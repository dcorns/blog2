/**
 * blogRoutes
 * Created by dcorns on 10/9/15
 * Copyright © 2015 Dale Corns
 */
'use strict';
var Blog = require('../models/blog');
module.exports = function(app){
  /**
   * Add user routes for json data and CRUD
   */
  app.route('/blog')
//create a post
    .post(function(req, res) {
      var blog = new Blog();
      blog.title = req.body.title;
      blog.author = req.body.author;
      blog.article = req.body.article;
      blog.date = new Date();
      blog.save(function(err) {
        if (err)
          res.send(err);
        res.json({
          message: 'Blog Posted!'
        });
      });
    })

//get all posts
    .get(function(req, res) {
      Blog.find(function(err, blogs) {
        if (err)
          res.send(err);
        res.json(blogs);
      });
    });

//On blogs that end in /users/:user_id
  app.route('/blog/:blog_id')
    .get(function(req, res) {
      Blog.findById(req.params.blog_id, function(err, blog) {
        if (err)
          res.send(err);
        res.json(blog);
      });
    })

    .put(function(req, res) {
      Blog.findById(req.params.blog_id, function(err, blog) {
        if (err)
          res.send(err);
        blog.title = req.body.title;
        blog.article = req.body.article;
        blog.lastUpdate = new Date();
        blog.save(function(err) {
          if (err)
            res.send(err);
          res.json({
            message: 'Blog updated!'
          });
        });
      });
    })

    .delete(function(req, res) {
      Blog.remove({
        _id: req.params.blog_id
      }, function(err, blog) {
        if (err)
          res.send(err);
        res.json({
          message: 'Blog deleted!'
        });

      });
    });
};