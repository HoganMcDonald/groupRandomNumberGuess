var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//random number
var number = 0;

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

//listen
app.listen(3000, function() {
  console.log('server on 3000');
});

//other stuff
app.get('/', function(req, res) {
  res.sendFile(path.resolve('views/index.html'));
});

app.post('/setNumber', function(req, res) {
  number = generateRandomNumber(req.body.maxNumber);
  res.send('number set');
});

app.post('/checkGuess', function(req, res) {
  var responseObject = {
    responseArray: []
  };
  //loop through requesr array
  for (var i = 0; i < req.body.requestArray.length; i++) {
    responseObject.responseArray[i] = {
      result: compareGuesses(Number(req.body.requestArray[i]))
    };
  }
  res.send(responseObject);
});

//number generator
function generateRandomNumber(max) {
  return Math.round(Math.random() * max);
}

function compareGuesses(guess) {
  if (guess === number) {
    return 0;
  } else if (guess > number) {
    return 1;
  } else {
    return -1;
  }
}


// look up .map
