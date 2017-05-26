$(onReady);

function onReady() {
  $("#playDiv").hide();
  $("#resultsDiv").hide();
  $('.setupBtn').on('click', startGame);

}


function startGame() {
  var max = Number($(this).text());
  $('#setupDiv').hide();
  $('#playDiv').show();

  console.log($(this).text());
}
