const createError = require('http-errors');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const morgan = require('morgan')
const MongoStore = require('connect-mongo')(session);


// LOAD .env  values
require('dotenv').config();


const router = require('./routes/index');
// const profileRouter = require ('./routes/site-routes.js')
// commented bc we aren't sure to add it here

const dbName = "Dog-Network";
// const PORT = 3000;

const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('tiny')); //tiny or dev. tiny small info dev more

// SESSION MIDDLEWARE
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    // cookie: { maxAge: 3600000 * 1 },	// 1 hour
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 60 * 60 * 24 * 7 // Time to live - 7 days (14 days - Default)
    })
  })
);

// ROUTER
app.use('/', router);
// app.use('/', profileRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
