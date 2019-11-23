$(function() {
  'use strict';
  var
  result,
  $multiplication = $('#multiplication');

  $multiplication.append($('<tr>').attr('id','line1'));
  for(var i = 1; i < 10; i++) {
    result = 1 * i;
    $('#line1').append($('<td>').text('1*' + i + '=' + result));
  };
});