
/**
 * Module dependencies.
 */

var server,
    io = require("socket.io");
    express = require('express'),
    http = require("http"),
    path = require("path"),
    env = process.env.NODE_ENV || "development",
    app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

server = http.createServer(app);

io = io.listen(server);

server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

io.sockets.on("connection", function (socket) {
    socket.emit("connected", "CONNECTED!");
    socket.on("disconnect", function () {
    });
});
