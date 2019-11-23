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
    if(checkStopwatch === false) {
      checkStopwatch = setInterval(function() {
        time++;
        setTime();
      },10);
    };
  });
  $('#stop').on('click', function() {
    clearInterval(checkStopwatch);
    checkStopwatch = false;
  });
  $('#reset').on('click', function() {
    clearInterval(checkStopwatch);
    time = defaultTime;
    setTime();
    checkStopwatch = false;
  });
  function setTime() {
    minute = ("0" + Math.floor(time / 6000)).slice(-2);
    second = ("0" + Math.floor((time / 100)) % 60).slice(-2);
    millisecond = ("0" + time % 1000).slice(-2);
    $stopwatch.text(minute + ":" + second + "." + millisecond);
  };
});