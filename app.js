var config = require('./config');
var express = require('express');
var route = require('./route')
http = require('http');

var app = express();

app.configure(function() {
    app.set('port', config.port);

    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
    app.use(express.errorHandler());
});

route.setRequestUrl(app);

http.createServer(app).listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});