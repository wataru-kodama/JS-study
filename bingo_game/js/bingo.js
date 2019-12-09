$(function() {
  'use strict';
  var
    i,
    numMax = 50,
    numList = [],
    roulette,
    number,
    result = 0,
    $start = $('#startsound'),
    $stop = $('#stopsound'),
    start_Time = 7 * 1000,
    roulette_Count = 0,
    roulette_Time = 0;
    
  for(i = 1; i <= numMax; i++) {
    numList.push(i);
    $('#numberarea').append($('<li>').attr('id', 'num' + i).text(i));
  };

  $('#result').text(0);
  $('#startbtn').on('click', function() {
    roulette = setInterval(function() {
      number = Math.floor(Math.random() * numList.length);
      $('#result').text(numList[number]);
      roulette_Count++;
      roulette_Time = roulette_Count * 10;
      if(roulette_Time === start_Time) {
        stopRoulette();
      }
    }, 10);
    $('#startbtn').hide();
    $('#stopbtn').show();
    $start.trigger('play');
    $stop.trigger('pause');
    $stop[0].currentTime = 0;
  });
  
  $('#stopbtn').on('click', function() {
    stopRoulette();
  });
  function stopRoulette() {
    clearInterval(roulette);
    roulette_Count = 0;
    result = numList[number];
    numList.splice(number, 1);
    $('#numberarea').find('li').eq(parseInt(result, 10) - 1).addClass('hitnum');
    $('#startbtn').show();
    $('#stopbtn').hide();
    $start.trigger('pause');
    $start[0].currentTime = 0;
    $stop.trigger('play');
  };
});