$(function() {
  'use strict';

  var
  minute,
  second,
  millisecond,
  defaultTime = 0,
  time = defaultTime,
  $stopwatch = $('#stopwatch');

  minute = ("0" + Math.floor(time / 60000)).slice(-2);
  second = ("0" + Math.floor((time / 1000)) % 60).slice(-2);
  millisecond = ("0" + time % 10000);
  $stopwatch.text(minute + ":" + second + "." + millisecond);

  $('#start').on('click', function() {
    console.log(1);
  });
  $('#stop').on('click', function() {
    console.log(2);
  });
  $('#reset').on('click', function() {
    console.log(3);
  });
});