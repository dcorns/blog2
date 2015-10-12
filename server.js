/**
 * server.js
 * Created by dcorns on 9/27/15
 * Copyright © 2015 Dale Corns
 */
'use strict';
/**
 * Pull in express function
 */
var express = require('express');
/**
 * require body-parser for parsing post data
 */
var bodyParser = require('body-parser');
/**
 * require mongoose for communications with the mongo database
 */
var mongoose = require('mongoose');
/**
 * Create express application using the express function
 */
var app = express();
/**
 * use for parsing json
 */
app.use(bodyParser.json());
/**
 * Use express routing here and below. Here it is used to execute code for every route request before forwarding to next route
 */
app.route('*')
  .get(function(req, res, next){
    console.log('Request was made');
    next();
  });
/**
 * Import additional routes
 */
require('./api/routes/userRoutes')(app);
require('./api/routes/blogRoutes')(app);
/**
 * Setup sending of all static assets to the client. Everything the page itself requests will be routed to the public directory.
 */
app.use(express.static(__dirname + '/public'));
/**
 * Set server port to the environment variable PORT setting or to port 3000
 */
var port = process.env.PORT || 3000;
/**
 * Connect to the mongo database
 */
mongoose.connect('mongodb://localhost/blogDatabase');
/**
 * Starting up the server by running the express function listen(). We pass the port and a call back to the function.
 */
var server = app.listen(port, 'localhost', function(){
  /**
   * Since server is assigned its value before the callback is called, we are able to access the server variable in the callback itself.
   * var port and host are not needed here but added for instructional purposes.
   */
  var port = server.address().port;
  var host = server.address().address;
  console.log('Server listening at http://' + host + ':' + port);
});