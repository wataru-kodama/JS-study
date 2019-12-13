$(function() {
  'use strict';

  var
  cards = [],
  kind = ['d', 's', 'c', 'h'],
  kind_length = kind.length,
  $li = $('<li>'),
  $img = $('<img>'),
  $table = $('#table'),
  cards_len,
  i,
  j;


  for(i = 0; i < kind_length; i++) {
    for(j = 1; j <= 13; j++) {
      cards.push(kind[i] + ('0' + j).slice(-2) + '.png');
    }
  }

  cards_len = cards.length;

  shuffle()

  for(i = 0; i < cards_len; i++) {
    $li
     .clone()
     .addClass('card is-surface')
     .data('num', cards[i].replace(/[^0-9]/g, ''))
     .append(
      $img
        .clone()
        .attr('src', '../images/z01.png')
        .addClass('card_surface')
     )
     .append(
      $img
        .clone()
        .attr('src', '../images/' + cards[i])
        .addClass('card_reverse')
     )
    .appendTo($table)
  }

  var
    selectNum = '',
    selectList = [],
    defaultTime = 180,
    time = defaultTime,
    minute,
    second,
    timer,
    $timer = $('#timer'),
    startFlag = false;

    $timer.text(setTimer());

  $('.card').on('click', function() {
    if(!startFlag) {
      countTime();
      startFlag = true;
    }
    if(selectList.length >= 2) {
      return false;
    };
    $(this).toggleClass('is-reverse').toggleClass('is-surface');
    if(selectNum === '') {
      selectNum = $(this).data('num');
      selectList.push($(this).index());
    } else {
      if($(this).index() !== selectList[0]){
        selectList.push($(this).index());
        if($(this).data('num') === selectNum) {
          setTimeout(function() {
            $table.children('li').eq(selectList[0]).addClass('hit');
            $table.children('li').eq(selectList[1]).addClass('hit');
            selectList = [];
            selectNum = '';
          }, 1000)
        } else {
          setTimeout(function() {
            $table.children('li').eq(selectList[0]).toggleClass('is-reverse').toggleClass('is-surface');
            $table.children('li').eq(selectList[1]).toggleClass('is-reverse').toggleClass('is-surface');
            selectList = [];
            selectNum = '';
          }, 1000)
        }
      } else {
        selectNum = '';
        selectList = [];
      }
    }
  });

  function setTimer() {
    minute = ('0' + Math.floor(time / 60)).slice(-2);
    second = ('0' + time % 60).slice(-2);
    return minute + ':' + second;
  }
  function countTime() {
    timer = setInterval(function() {
      time--;
      $timer.text(setTimer());
      if(time === 0) {
        clearInterval(timer);
        $timer.text('Time Up!').css('color', 'red');
      }
    }, 1000);
  }
  function shuffle() {
    var tmp;
    for(i = cards_len-1; i > 0; i--) {
      j = Math.floor(Math.random() * i);
      tmp = cards[i];
      cards[i] = cards[j];
      cards[j] = tmp;
    }
  };
});