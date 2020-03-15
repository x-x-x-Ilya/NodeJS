const createError = require('http-errors');

module.exports.NotFound = () => {
  return (req, res, next) => {
    console.log("NotFound 5");
    next(createError(404));
    console.log("NotFound 7");
  }
};

module.exports.ErrorHandler = () => {
  return (err, req, res, next) => {
    console.log("ErrorHandler 13");
    res.message = err.message;
    console.log("ErrorHandler 15");
    res.error = req.app.get('env') === 'development' ? err : {};
    console.log("ErrorHandler 17");
    res.status(err.status || 500);
    console.log("ErrorHandler 19");
    res.send('error');
    console.log("ErrorHandler 21");
  }
};


