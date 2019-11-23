$(function() {
  'use strict';
  var
  $multiplication = $('#multiplication');

  $multiplication.append($('<tr>').attr('id','line1'));
  $('#line1').append($('<td>').text('1*1'));
  $('#line1').append($('<td>').text('1*2'));
  $('#line1').append($('<td>').text('1*3'));
  $('#line1').append($('<td>').text('1*4'));
});