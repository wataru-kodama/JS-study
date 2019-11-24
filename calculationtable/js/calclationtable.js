$(function() {
  'use strict';
  var
  $calculation = $('#calculation');

  // for(var j = 0; j < 10; j++) {
  //   if(j === 0) {
  //     $('#line1').append($('<th>'));
  //   }else{
  //     $('#line1').append($('<th>').text(i));
  //   };
  // };
  for(var i = 0; i < 10; i++) {
    $calculation.append($('<tr>').attr('id','line' + i));
    for(var j = 0; j < 10; j++) {
      if(i === 0 && j ===0) {
        $('#line' + i).append($('<th>'));
      }else if(i === 0 && j !== 0) {
        $('#line' + i).append($('<th>').text(j));
      }else if(i !== 0 && j === 0) {
        $('#line' + i).append($('<th>').text(i));
      }else {
        $('#line' + i).append($('<td>'));
      };
    };
  };
  $('#addition').on('click', function() {
    for(i = 1; i < 10; i++) {
      $('#line1').find('td').eq(i - 1).text(1 + i)
      // $('#line1').find('td').eq(1).text(1 + 2)
      // $('#line1').find('td').eq(2).text(1 + 3)
    }
  });
  $('#miltiplication').on('click', function() {
    console.log(1);
  });
  $('#reset').on('click', function() {
    console.log(2);
  });
});