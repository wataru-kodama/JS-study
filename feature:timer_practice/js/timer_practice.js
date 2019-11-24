$(function() {
  'use strict';
  var
  minute,
  second,
  millisecond,
  defaultTime = 6000,
  time = defaultTime,
  checkTimer = false,
  $timer = $('#timer');

  setTime();

  $('#start').on('click', function() {
    if(checkTimer === false && time > 0) {
      checkTimer = setInterval(function() {
        time--;
        setTime();
        if(time === 0) {
          clearInterval(checkTimer);
          $timer.text('-Time up-');
        };
      }, 10);
    };
  });
  $('#stop').on('click', function() {
    clearInterval(checkTimer);
    checkTimer = false;
  });
  $('#reset').on('click', function() {
    clearInterval(checkTimer);
    time = defaultTime;
    setTime();
    checkTimer = false;
  });
  function setTime() {
    minute = ("0" + Math.floor(time / 6000)).slice(-2);
    second = ("0" + Math.floor(time / 100) % 60).slice(-2);
    millisecond = ("0" + time % 1000).slice(-2);
    $timer.text(minute + ":" + second + "." + millisecond);
  };
});