$(function() {
  'use strict';
  var
    $calculationtable = $('#calculationtable'),
    i,
    j,
    Calc,
    Folmula;

  for(i = 0; i < 10; i++) {
    $calculationtable.append($('<tr>').attr('id','line' + i));
    for(j = 0; j < 10; j++) {
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
    Calculation('addition');
    $('#line0').find('td').eq(0).text(setForumula('addition'));
  });
  $('#multiplication').on('click', function() {
    Calculation('multiplication');
    $('#line0').find('td').eq(0).text(setForumula('multiplication'));
  });
  $('#reset').on('click', function() {
    Calculation('reset');
    $('#line0').find('td').eq(0).text(setForumula('reset'));
  });
  function Calculation(kind) {
    for(i = 1; i < 10; i++) {
      for(j = 1; j < 10; j++) {
        switch(kind) {
          case 'addition':
            Calc = i + j;
            break;
          case 'multiplication':
            Calc = i * j;
            break;
          case 'reset':
            Calc = '';
            break;
          default:
            break;
        };
        $('#line' + i).find('td').eq(j).text(Calc);
      };
    };
  };
  function setForumula(kind) {
    switch(kind) {
      case 'addition':
        Folmula = '+'
        break;
      case 'multiplication':
        Folmula = '×'
        break;
      case 'reset':
        Folmula = '';
        break;
      default:
        break;
    };
    return Folmula;
  };
});