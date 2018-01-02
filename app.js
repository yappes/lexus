var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var reg = require('./routes/reg');
var goodslist = require('./routes/goodslist');
var goodsdetail = require('./routes/goodsdetail');
var addgoods = require('./routes/addgoods');
var comment = require('./routes/comment');
var uploader = require('./routes/uploader');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use(session({
  secret:'recommend 128 bytes random string',
  cookie:{maxAge:20*60*1000},
  resave:true,
  saveUninitialized:true
}));
app.use('/html/login',login);
app.use('/html/reg',reg);
app.use('/html/goodslist',goodslist);
app.use('/html/goodsdetail',goodsdetail);
app.use('/html/addgoods',addgoods);
app.use('/html/Addcomment',comment);
app.use('/uploader', uploader);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
