# restify-redirect
Middleware to add .redirect() method to the Response object. Based on Express.

### res.redirect([status,] path)

Same as Express `redirect` method.

```
var restify = require('restify');
var redirect = require('restify-redirect');

var server = restify.createServer();

server.use(redirect());

server.use('/logout', function(req, res, next) {
    // do stuff here

    // redirect home
    res.redirect(302, '/');
});
```

