$(function() {
  "use strict";

  var
  minute,
  second,
  millisecond,
  defaultTime = 180,
  defaultMilliTime = 100,
  time = defaultTime * defaultMilliTime,
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
          $timer.text('Time Up!');
        };
      }, 10);
    }
  });
  $('#stop').on('click', function() {
    clearInterval(checkTimer);
    checkTimer = false;
  });
  $('#reset').on('click', function() {
    clearInterval(checkTimer);
    checkTimer = false;
    time = defaultTime * defaultMilliTime;
    setTime();
  });

  function setTime() {
    minute = ("0" + Math.floor((time / defaultMilliTime) / 60)).slice(-2);
    second = ("0" + Math.floor(time / defaultMilliTime ) % 60).slice(-2);
    millisecond = ("0" + time % defaultMilliTime).slice(-2);
    $timer.text(minute + ":" + second + "." + millisecond);
  }
});