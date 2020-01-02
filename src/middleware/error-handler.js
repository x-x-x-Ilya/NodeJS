const createError = require('http-errors');
const express = require('express');

const app = express();
// const app = require('../app');


// catch 404 and forward to error handler
exports.errorHandler = () => {
  app.use((req, res, next) => {
    next(createError(404));
  });

  // error handler
  app.use((err, req, res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.send('error');
  });
};


module.exports = app;
