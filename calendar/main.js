$(function() {
  'use strict';

  var 
    week_list = ['日', '月', '火', '水', '木', '金', '土'],
    week_listLength = week_list.length;

    $('#calendar-table').append($('<thead>').append($('<tr>').attr('id', 'week')));
    for(var i = 0; i < week_listLength; i++) {
      $('#week').append($('<th>').text(week_list[i]));
    }

  var
    setDay = new Date(),
    today = setDay.getDate(),
    setYear = setDay.getFullYear(),
    setMonth = setDay.getMonth(),
    startDay = new Date(setYear, setMonth, 1),
    lastDay = new Date(setYear, setMonth + 1, 0),
    startDay_Week = startDay.getDay(),
    month_lastDay = lastDay.getDate(),
    textSkip = true,
    textDate = 1,
    tableBody ='',
    i,
    j;

  $('.title').append($('<h1>').text(setYear + '年 ' + (setMonth + 1) + '月'));
  for(var i = 0; i < 5; i++) {
    var $tr = '<tr>';
    for(var j = 0; j < 7; j++) {
      if(i === 0 && startDay_Week === j) {
        textSkip = false;
      }
      if(textDate > month_lastDay) {
        textSkip = true;
      }
      var 
        textTd = textSkip ? ' ' : textDate++,
        addClass = today === textDate ? 'today': '',
        $td = '<td class='+addClass+'>'+textTd+'</td>';
      $tr += $td;
    }
    $tr += '</tr>';
    tableBody += $tr;
  }
  $('#calendar-table').append($('<tbody>').html(tableBody));
})