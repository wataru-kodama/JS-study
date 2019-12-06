$(function() {
  'use strict';
  var
    i,
    numMax = 50,
    numList = [],
    roulette,
    number,
    result = 0;
  for(var i = 1; i <= numMax; i++) {
    numList.push(i);
    $('#numberarea').append($('<li>').attr('id', 'num' + i).text(i));
  };

  $('#result').text(1);
  $('#startbtn').on('click', function() {
    roulette = setInterval(function() {
      number = Math.floor(Math.random() * numList.length);
      $('#result').text(numList[number]);
    }, 10);
    $('#startbtn').hide();
    $('#stopbtn').show();
  });
  
  $('#stopbtn').on('click', function() {
    clearInterval(roulette);
    result = numList[number];
    numList.splice(number, 1);
    $('#numberarea').find('li').eq(parseInt(result, 10) - 1).addClass('hitnum');
    $('#startbtn').show();
    $('#stopbtn').hide();
  });
});