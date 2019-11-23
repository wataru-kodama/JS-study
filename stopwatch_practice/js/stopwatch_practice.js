$(function() {
  'use strict';

  var
  minute,
  second,
  millisecond,
  defaultTime = 0,
  time = defaultTime,
  $stopwatch = $('#stopwatch');

  setTime();

  $('#start').on('click', function() {
    setInterval(function() {
      time++;
      setTime();
    },10);
  });
  $('#stop').on('click', function() {
    console.log(2);
  });
  $('#reset').on('click', function() {
    console.log(3);
  });
  function setTime() {
    minute = ("0" + Math.floor(time / 6000)).slice(-2);
    second = ("0" + Math.floor((time / 100)) % 60).slice(-2);
    millisecond = ("0" + time % 1000).slice(-2);
    $stopwatch.text(minute + ":" + second + "." + millisecond);
  };
});