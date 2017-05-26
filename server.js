var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static('public'));

app.listen(3000, function() {
  console.log('server on 3000');
});

app.get('/', function(req, res) {
  console.log('Hi I"m working');
  res.sendFile(path.resolve('views/index.html'));
});
