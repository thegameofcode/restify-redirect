module.exports = function() {

  return function(req, res, next) {
    res.redirect = function(url) {
      var status = 302;

      // allow status / url
      if (arguments.length === 2) {
        status = arguments[0];
        url = arguments[1];
      }

      // Set Location header
      res.header('Location', url);
      res.send(status);
    };
    next();
  };
};
