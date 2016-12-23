var express = require('express');
var path = require('path');
var app = express();
app.get('/', function(req, res) {
  res.status(200).send('All 200');
});
app.get('/image', function(req, res) {
  res.sendFile('./images/helisnki1.jpg');
});
var port = process.env.PORT || 1337;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('parse-server-example running on port test ' + port + '.');
});
