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

  $('.card').on('click', function() {
    // var getNum = $(this).data('num');
    $(this).toggleClass('is-reverse');
  });
});