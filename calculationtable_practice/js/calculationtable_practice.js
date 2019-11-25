$(function() {
  'use strict';
  var
  $calculationtable = $('#calculationtable');

  for(var i = 0; i < 10; i++) {
    $calculationtable.append($('<tr>').attr('id','line' + i));
    for(var j = 0; j < 10; j++) {
      if (i === 0 && j === 0) {
        $('#line' + i).append($('<td>'));
      }else if(i === 0 && j !== 0) {
        $('#line' + i).append($('<td>').text(j));
      }else if(j === 0 && i !== 0) {
        $('#line' + i).append($('<td>').text(i));
      }else {
        $('#line' + i).append($('<td>'));
      }
    };
  };
  // $calculationtable.append($('<tr>').attr('id','line2'));
  // for(var i = 0; i < 10; i++) {
  //   $('#line2').append($('<td>').text(i));
  // };
  // $('#line1').append($('<td>').text(2));
  // $('#line1').append($('<td>').text(3));
  // $('#line1').append($('<td>').text(4));
});