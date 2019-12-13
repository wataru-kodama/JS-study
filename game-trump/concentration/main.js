$(function() {
  'use strict';

  var
  cards = [],
  kind = ['d', 's', 'c', 'h'],
  kind_length = kind.length,
  $li = $('<li>'),
  $img = $('<img>'),
  $table = $('#table'),
  cards_len;


  for(var i = 0; i < kind_length; i++) {
    for(var j = 1; j <= 13; j++) {
      cards.push(kind[i] + ('0' + j).slice(-2) + '.png');
    }
  }

  cards_len = cards.length;
  for(var i = 0; i < cards_len; i++) {
    $li
     .clone()
     .addClass('card is-surface')
     .data("num", cards[i].replace(/[^0-9]/g, ""))
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
    secondSelectNum,
    selectList = [];
  $('.card').on('click', function() {
    $(this).toggleClass('is-reverse').toggleClass('is-surface');
    if(selectNum === '') {
      selectNum = $(this).data('num');
      selectList.push($(this).index());
    } else {
      if($(this).index() !== selectList[0]){
        secondSelectNum = $(this).data('num')
        selectList.push($(this).index());
        if(secondSelectNum === selectNum) {
          $.each(cards, function(i, val) {
            if(selectList[i] === i) {
              delete cards[i];
            }
          });
          console.log(cards)
          console.log(cards[0]);
          $table.children('li').eq(selectList[0]).addClass('hit');
          $table.children('li').eq(selectList[1]).addClass('hit');
          selectList = [];
          selectNum = '';
        } else {
          $table.children('li').eq(selectList[0]).toggleClass('is-reverse').toggleClass('is-surface');
          $table.children('li').eq(selectList[1]).toggleClass('is-reverse').toggleClass('is-surface');
          selectList = [];
          selectNum = '';
        }
      } else {
        selectNum = '';
        selectList = [];
      }
    }
  });
});