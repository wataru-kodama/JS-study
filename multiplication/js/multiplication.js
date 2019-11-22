$(function() {
  'use strict';
  var
  result,
  $target = $('#multiplication');
  
  for(var i = 1; i <= 9; i++) {
    $target.append($('<tr>').attr('id','line' + i));
    for(var j = 1; j<= 9; j++) {
      result = j * i;
      $('#line' + i).append($('<td>').text(j + '*' + i + "=" + result));
    };
  };
});