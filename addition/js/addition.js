$(function() {
  var
  result,
  $addition = $('#addition');

  for(i = 1; i < 10; i++) {
    $addition.append($('<tr>').attr('id','line' + i));
    for(var j = 1; j < 10; j++) {
      result = i + j;
      $('#line' + i).append($('<td>').text(j + '+' + i + '=' + result));
    };
  };
});