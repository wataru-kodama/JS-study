$(function() {
  'use strict';
  var
  minute,
  second,
  millisecond,
  defaultTIme = 6000,
  time = defaultTIme,
  $timer = $('#timer');

  setTime();

  $('#start').on('click', function() {
    setInterval(function() {
      time--;
      setTime();
    }, 10);
  });
  $('#stop').on('click', function() {
    console.log('stop');
  });
  $('#reset').on('click', function() {
    console.log('reset');
  });
  function setTime() {
    minute = ("0" + Math.floor(time / 6000)).slice(-2);
    second = ("0" + Math.floor(time / 100) % 60).slice(-2);
    millisecond = ("0" + time % 1000).slice(-2);
    $timer.text(minute + ":" + second + "." + millisecond);
  };
});