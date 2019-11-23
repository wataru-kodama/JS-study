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
  $multiplication.append($('<tr>').attr('id','line2'));
  for(var i = 1; i < 10; i++) {
    result = 2 * i;
    $('#line2').append($('<td>').text('2*' + i + '=' + result));
  };
  $multiplication.append($('<tr>').attr('id','line3'));
  for(var i = 1; i < 10; i++) {
    result = 3 * i;
    $('#line3').append($('<td>').text('3*' + i + '=' + result));
  };
});