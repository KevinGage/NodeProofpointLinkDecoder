"use strict";

const express = require('express');
//const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const path = require('path');
const index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Load Middleware
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, '/public/', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes for static public content
app.use(express.static(path.join(__dirname, 'public')));

//Include all routes
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in developmentlogger
  res.locals.message = err.message;
  res.locals.error = process.env.LOG_LEVEL === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;