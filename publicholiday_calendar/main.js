$(function() {
  'use strict';

  let 
    week_list       = ['日', '月', '火', '水', '木', '金', '土'],
    week_listLength = week_list.length,
    i,
    set_Day         = new Date(),
    today           = set_Day.getDate(),
    set_Year        = set_Day.getFullYear(),
    set_Month       = set_Day.getMonth(),
    $last_btn       = $('.last-month'),
    $next_btn       = $('.next-month');

  $('#table-week').append($('<tr>'));
  for(i = 0; i < week_listLength; i++) {
    $('#table-week tr').append($('<th>').text(week_list[i]));
    $("th").eq(0).css('color', 'red');
    $("th").eq(6).css('color', '#0000aa');
  }

  calendar(set_Year, set_Month, set_Day, week_list);

  $last_btn.on('click', function() {
    set_Month --;
    if(set_Month === -1) {
      set_Month = 11;
      set_Year --;
    }
    calendar(set_Year, set_Month, set_Day, week_list);
  })

  $next_btn.on('click', function() {
    set_Month++;
    if(set_Month === 12) {
      set_Month = 0;
      set_Year ++;
    }
    calendar(set_Year, set_Month, set_Day, week_list);
  })

  function calendar(year, month, date, week) {
    let csvfile = 'syukujitsu.csv';
    $.ajax({
      beforeSend: function(xhr) {
        xhr.overrideMimeType("text/plane; charset=shift_jis");
      },
      url: csvfile,
      dataType: 'text'
    }).done(function (data) {
      let
        dataArray             = data.split("\n"),
        csvArray              = [],
        i,
        dataArray_length      = dataArray.length,
        publicholiday_dayList = [],
        holidayList           = [];

      for(i = 0; i < dataArray_length; i++) {
        csvArray.push(dataArray[i].split(","));
        let csvArray_length = csvArray[i].length;
        for(var j = 0; j < csvArray_length; j++) {
          if(i > 0 && j === 0) {
            publicholiday_dayList.push(csvArray[i][0]);
          }else if(i > 0) {
            holidayList.push(csvArray[i])
          }
        }
      }

    let
      startDay          = new Date(year, month, 1),
      lastDay           = new Date(year, month + 1, 0),
      startDay_Week     = startDay.getDay(),
      month_lastDay     = lastDay.getDate(),
      textSkip          = true,
      textDate          = 1,
      tableBody         ='',
      thisMonth         = month + 1,
      col,
      low,
      todayFlag         = date.getFullYear() === year && date.getMonth() === month ? true : false,
      publicholidayFlag = '';

    $('.title').text(year + '年 ' + thisMonth + '月');
    for(col = 0; col < 5; col++) {
      let $tr = '<tr>';
      for(low = 0; low < week.length; low++) {
        if(col === 0 && startDay_Week === low) {
          textSkip = false;
        }
        if(textDate > month_lastDay) {
          textSkip = true;
        }

        let
          setClassList = [],
          textTd    = textSkip ? ' ' : textDate++,
          setDate   = year + '/' + thisMonth + '/' + textTd,
          holidayIndex = $.inArray(setDate, publicholiday_dayList),
          holidyTitle = "";

        if(holidayIndex !== -1) {
          holidyTitle = holidayList[holidayIndex][1];
          publicholidayFlag = true;
        }else {
          publicholidayFlag = false;
        }
        if(todayFlag && today === textDate) { setClassList.push('today') };
        if(col >= 0 && low === 0) { setClassList.push('sunday') };
        if(col >= 0 && low === 6) {setClassList.push('saturday') };
        if(publicholidayFlag) { setClassList.push('public-holiday') };

        let
          setClass = setClassList.join(" "),
          $td = '<td class="' + setClass + '" title="' + holidyTitle +  '">'+textTd+'</td>';

        $tr += $td;
      }
      $tr += '</tr>';
      tableBody += $tr;
    }
    $('#table-date').html(tableBody);
    $('.public-holiday').hover(
      function() {
        let
          thisDay = $(this).text(),
          thisDate = year + '/' + thisMonth + '/' + thisDay;
        $.each(holidayList, function(i, val) {
          if(val.indexOf(thisDate) !== -1) {
            $('#publicholiday-area').text(this[1]);
          }
        })
      },
      function() {
        $('#publicholiday-area').text('');
      }
    )
    });
  }
})