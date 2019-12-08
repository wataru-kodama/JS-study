$(function() {
  'use strict';

  var
    tascList = [],
    idCount = 1;
  $('#addbtn').on('click', function() {
    var
      tasc = $('#text').val(),
      setlist = $('#listtable').children('tr'),
      length = setlist.length,
      getTasc;

    $('#warning').empty();
    if(tasc === '') {
      $('#warning').append($('<p>').text('入力されていません').css('color', 'red'));
      return;
    };
    for(var i = 0; i < length; i++) {
      getTasc = setlist.eq(i).children('#tasc').text();
      if(tasc === getTasc) {
        $('#warning').append($('<p>').text('すでに登録されています').css('color', 'red'));
        return;
      };
    };
    tascList.push({id:idCount,name:tasc});
    idCount++;
    var
    length = tascList.length;
    $('.listtable').empty();
    for(var i = 0; i < length; i++) {
      $('#listtable').append($('<tr>').attr('id', tascList[i].id)
      .append($('<td>').attr('id', 'num').text(i + 1))
      .append($('<td>').attr('id', 'tasc').text(tascList[i].name))
      .append($('<td>').append($('<button>').attr('id', 'editbtn').text('編集')))
      .append($('<td>').append($('<button>').attr('id', 'deletebtn').text('削除')))
      .append($('<td>').append($('<button>').attr('id', 'completebtn').text('終了'))));
    };
    $('#text').val('');
  });
  $(document).on('click', '#editbtn', function() {
    var
      tasc = $(this).parents('tr').children('#tasc').text();

    $('.edit').removeClass('edit');
    $(this).parents('tr').children('#tasc').addClass('edit');
    $('#text').val(tasc);
    $('#addbtn').hide();
    $('#savebtn').show();
  });
  $('#savebtn').on('click', function() {
    var
      tasc = $('#text').val(),
      setlist = $('#listtable').children('tr'),
      length = setlist.length,
      getTasc;

    $('#warning').empty();
    if(tasc === '') {
      $('#warning').append($('<p>').text('入力されていません').css('color', 'red'));
      return;
    };
    for(var i = 0; i < length; i++) {
      getTasc = setlist.eq(i).children('#tasc').text();
      if(tasc === getTasc) {
        $('#warning').append($('<p>').text('すでに登録されています').css('color', 'red'));
        return;
      };
    };
    var
      eidtTasc = $('.edit').parents('tr').attr('id');
    $.each(tascList, function(i, val) {
      if(parseInt(eidtTasc, 10) === val.id) {
        val.name = tasc;
        return;
      };
    });
    $('.edit').text(tasc);
    $('#text').val('');
    $('.edit').removeClass('edit');
    $('#addbtn').show();
    $('#savebtn').hide()
  });
  $(document).on('click', '#deletebtn', function() {
    var
      setId = $(this).parents('tr').attr('id');
    $.each(tascList, function(i, val) {
      if(parseInt(setId,10) === val.id) {
        tascList.splice(i, 1);
        return false;
      };
    });
    $(this).parents('tr').remove();
  });
  $(document).on('click', '#completebtn', function() {
    $(this).parents('tr').find('#editbtn').addClass('completebtn');
    $(this).parents('tr').find('#deletebtn').addClass('completebtn');
    $(this).parents('tr').addClass('complete');
    $(this).attr('id', 'cancelbtn').text('取り消し');
    return;
  });
  $(document).on('click', '#cancelbtn', function() {
    $(this).parents('tr').removeClass('complete');
    $('.completebtn').removeClass('completebtn');
    $(this).attr('id', 'completebtn').text('終了');
  });
});