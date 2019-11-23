$(function() {
  'use strict';

  var
  minute,
  second,
  millisecond,
  defaultTime = 0,
  time = defaultTime,
  checkStopwatch = false,
  $stopwatch = $('#stopwatch');

  setTime();

  $('#start').on('click', function() {
    checkStopwatch = setInterval(function() {
      time++;
      setTime();
    },10);
  });
  $('#stop').on('click', function() {
    clearInterval(checkStopwatch);
  });
  $('#reset').on('click', function() {
    clearInterval(checkStopwatch);
    time = defaultTime;
    setTime();
  });
  function setTime() {
    minute = ("0" + Math.floor(time / 6000)).slice(-2);
    second = ("0" + Math.floor((time / 100)) % 60).slice(-2);
    millisecond = ("0" + time % 1000).slice(-2);
    $stopwatch.text(minute + ":" + second + "." + millisecond);
  };
});