$(function() {
  'use strict';
  var
  $calculation = $('#calculation'),
  i,
  j,
  calc,
  Formula;

  for(i = 0; i < 10; i++) {
    $calculation.append($('<tr>').attr('id','line' + i));
    for(j = 0; j < 10; j++) {
      if(i === 0 && j ===0) {
        $('#line' + i).append($('<td>'));
      }else if(i === 0 && j !== 0) {
        $('#line' + i).append($('<td>').text(j));
      }else if(i !== 0 && j === 0) {
        $('#line' + i).append($('<td>').text(i));
      }else {
        $('#line' + i).append($('<td>'));
      };
    };
  };
  $('#addition').on('click', function() {
    setCalclation('addition')
  });
  $('#multiplication').on('click', function() {
    setCalclation('multiplication')
  });
  $('#reset').on('click', function() {
    setCalclation('reset');
  });

  function setCalclation(kind) {
    for(i = 1; i < 10; i++) {
      for(j = 1; j < 10; j++) {
        switch(kind) {
          case 'addition':
            calc = i + j;
            Formula = '+';
            break;
          case 'multiplication':
            calc = i * j;
            Formula = '×';
            break;
          case 'reset':
           calc = '';
           Formula = '';
           break;
          default:
            break;
        };
        $('#line' + i).find('td').eq(j).text(calc);
      };
    };
    $('#line0').find('td').eq(0).text(Formula);
  };
});