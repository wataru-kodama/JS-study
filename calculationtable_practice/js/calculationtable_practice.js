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
  $('#addition').on('click', function() {
    for(i = 1; i < 10; i++) {
      for(var j = 1; j < 10; j++) {
        $('#line' + i).find('td').eq(j).text(i + j);
      };
    };
  });
  $('#multiplication').on('click', function() {
    for(var i = 1; i < 10; i++) {
      for(var j = 1; j < 10; j++) {
        $('#line' + i).find('td').eq(j).text(i * j);
      };
    }
    $('#line1').find('td').eq(2).text(1 * 2);
  });
  $('#reset').on('click', function() {
    for(var i = 1; i < 10; i++) {
      for(var j = 1; j < 10; j++) {
        $('#line' + i).find('td').eq(j).text('');
      };
    };
  });
});