$(function() {
  'use strict';

  var
  cards       = [],
  kind        = ['d', 's', 'c', 'h'],
  kind_length = kind.length,
  $li         = $('<li>'),
  $img        = $('<img>'),
  $table      = $('#table'),
  cards_len,
  selectNum   = '',
  selectList  = [],
  defaultTime = 180,
  time        = defaultTime,
  minute,
  second,
  timer,
  $timer      = $('#timer'),
  startFlag   = false,
  getCount    = 0,
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

   $timer.text(countDown());

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
            getCount += 2;
            if(getCount === 52) {
              gameResult('Game Clear!!')
            }
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

  function countDown() {
    minute = ('0' + Math.floor(time / 60)).slice(-2);
    second = ('0' + time % 60).slice(-2);
    return minute + ':' + second;
  }
  function countTime() {
    timer = setInterval(function() {
      time--;
      $timer.text(countDown());
      if(time === 0) {
        clearInterval(timer);
        $('.card').off();
        $timer.text('Time Up!').css('color', 'red');
        gameResult('-Game over-');
      }
    }, 1000);
  }
  function gameResult(resultText) {
    $('.gamefinish').show();
    $('.gameresult').show();
    $('#end').text(resultText);
    $('#count').text('獲得枚数' + getCount + '枚');
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