$(onReady);

function onReady() {
  $("#playDiv").hide();
  $("#resultsDiv").hide();
  $('.setupBtn').on('click', startGame);
  $('#submitButton').on('click', getResults);
}


function startGame() {
  var max = Number($(this).text());
  $('#setupDiv').hide();
  $('#playDiv').show();

  var requestObject = {
    maxNumber: max
  };

  $.ajax({
    type: 'POST',
    url: '/setNumber',
    data: requestObject,
    success: function(response) {
      console.log(response);
    }
  });

  console.log($(this).text());
}

function getResults() {
  var requestObject = {
    requestArray: []
  };
  //loop through inputs
  for (var i = 0; i < $('#playDiv > input').length; i++) {
    requestObject.requestArray[i] = $('#playDiv > input').eq(i).val();

  }
  $('#playDiv > input').val('');
  $.ajax({
    type: 'POST',
    url: '/checkGuess',
    data: requestObject,
    success: function(response) {
      console.log(response);
      for (var i = 0; i < response.responseArray.length; i++) {
        console.log(response.responseArray[i]);
        $('#playDiv > input').eq(i).attr('placeholder', interpretResults(response.responseArray[i].result));
      }

    }
  });
}

function interpretResults(result) {
  switch (result) {
    case -1:
      return "Too low.";
    case 1:
      return "Too high.";
    case 0:
      return winner();
    default:
      break;
  }
}

function winner() {
  $('#resultsDiv').show();

  return "winner";
}
