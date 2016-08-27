var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
// var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var _ = require("underscore");
var sequelize = require("sequelize");

var routes = require('./routes/index');
// var userManagement = require('./routes/userManagement');
// var student = require('./routes/student');
// var studentDetail = require('./routes/studentDetail');
// var company = require('./routes/company');
// var jobs = require('./routes/jobs');
// var notification = require('./routes/notification');

var app = module.exports = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(session({
  secret: 'ssshhhhh',
  resave: true,
  saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
// app.use('/userManagement', userManagement);
// app.use('/studentDetail', studentDetail);
// app.use('/notification', notification);
// app.use('/company', company);
// app.use('/student', student);
// app.use('/jobs', jobs);

// app.get('*', routes.index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler: will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler: no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// module.exports = app;
