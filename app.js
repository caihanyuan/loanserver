var config = require('./config');
var express = require('express');
var path = require('path');
var route = require('./route')
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();

app.set('port', config.port);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public'), {
    noCache: 1,
    maxAge: 0
}));

if (process.env.NODE_ENV == "development") {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
} else if (process.env.NODE_ENV == "production") {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}

route.setRequestUrl(app);

app.listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});