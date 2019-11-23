$(function() {
  'use strict';
  var
  result,
  $multiplication = $('#multiplication');

  for(var i = 1; i < 10; i++) {
    $multiplication.append($('<tr>').attr('id','line' + i));
    for(var j = 1; j < 10; j++) {
      result = i * j;
      $('#line' + i).append($('<td>').text(i + '*' + j + '=' + result));
    };
  };
});