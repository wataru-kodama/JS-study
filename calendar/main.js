$(function() {
  'use strict';

  var 
    week_list = ['日', '月', '火', '水', '木', '金', '土'],
    week_listLength = week_list.length;

    $('#table-week').append($('<tr>'));
    for(var i = 0; i < week_listLength; i++) {
      $('#table-week tr').append($('<th>').text(week_list[i]));
      $("th").eq(0).css('color', 'red');
      $("th").eq(6).css('color', '#aaa');
    }

  var
    set_Day = new Date(),
    today = set_Day.getDate(),
    set_Year = set_Day.getFullYear(),
    set_Month = set_Day.getMonth(),
    $last_btn = $('.last-month'),
    $next_btn = $('.next-month');

  calendar(set_Year, set_Month, set_Day);

  $last_btn.on('click', function() {
    set_Month --;
    if(set_Month === -1) {
      set_Month = 11;
      set_Year --;
    }
    calendar(set_Year, set_Month, set_Day);
  })

  $next_btn.on('click', function() {
    set_Month++;
    if(set_Month === 12) {
      set_Month = 0;
      set_Year ++;
    }
    calendar(set_Year, set_Month, set_Day);
  })

  function calendar(year, month, day) {
    var
    startDay = new Date(year, month, 1),
    lastDay = new Date(year, month + 1, 0),
    startDay_Week = startDay.getDay(),
    month_lastDay = lastDay.getDate(),
    textSkip = true,
    textDate = 1,
    tableBody ='',
    col,
    low,
    todayFlag = day.getFullYear() === year && day.getMonth() === month ? true : false;

  $('.title').text(year + '年 ' + (month + 1) + '月');
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
        addClass = todayFlag && today === textDate ? 'today': '',
        textTd = textSkip ? ' ' : textDate++,
        $td = '<td class='+addClass+'>'+textTd+'</td>';
      $tr += $td;
    }
    $tr += '</tr>';
    tableBody += $tr;
  }
  $('#table-date').html(tableBody);
  }
})