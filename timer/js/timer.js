$(function() {
  "use strict";

  var
  minute,
  second,
  defaultTime = 180,
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
          $timer.text('Time Up!');
        };
      }, 1000);
    }
  });
  $('#stop').on('click', function() {
    clearInterval(checkTimer);
    checkTimer = false;
  });
  $('#reset').on('click', function() {
    clearInterval(checkTimer);
    checkTimer = false;
    time = defaultTime;
    setTime();
  });

  function setTime() {
    minute = ("0" + Math.floor(time / 60)).slice(-2);
    second = ("0" + time % 60).slice(-2);
    $timer.text(minute + ":" + second);
  }
});