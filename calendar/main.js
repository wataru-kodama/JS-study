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
    set_Day = new Date(),
    today = set_Day.getDate(),
    set_Year = set_Day.getFullYear(),
    set_Month = set_Day.getMonth(),
    startDay = new Date(set_Year, set_Month, 1),
    lastDay = new Date(set_Year, set_Month + 1, 0),
    startDay_Week = startDay.getDay(),
    month_lastDay = lastDay.getDate(),
    textSkip = true,
    textDate = 1,
    tableBody ='',
    col,
    low;
    
  $('.title').append($('<h1>').text(set_Year + '年 ' + (set_Month + 1) + '月'));
  for(col = 0; col < 5; col++) {
    var $tr = '<tr>';
    for(low = 0; low < 7; low++) {
      if(col === 0 && startDay_Week === low) {
        textSkip = false;
      }
      if(textDate > month_lastDay) {
        textSkip = true;
      }
      var 
        addClass = today === textDate ? 'today': '',
        textTd = textSkip ? ' ' : textDate++,
        $td = '<td class='+addClass+'>'+textTd+'</td>';
      $tr += $td;
    }
    $tr += '</tr>';
    tableBody += $tr;
  }
  $('#calendar-table').append($('<tbody>').html(tableBody));
})