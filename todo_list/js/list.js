$(function() {
  'use strict';

  var
    $text    = $('#text'),
    $warning = $('#warning'),
    $addbtn = $('#addbtn'),
    $savebtn = $('#savebtn'),
    tascList = [],
    idCount = 1;

  $addbtn.on('click', function() {
    var
      addTasc  = $text.val(),
      todoList  = $('#listtable').children('tr'),
      listLength   = todoList.length,
      getTasc  = '',
      i;

    $warning.empty();
    if(addTasc === '') {
      $warning.append($('<p>').text('入力されていません').css('color', 'red'));
      return;
    };
    for(i = 0; i < listLength; i++) {
      getTasc = todoList.eq(i).children('#tasc').text();
      if(addTasc === getTasc) {
        $warning.append($('<p>').text('すでに登録されています').css('color', 'red'));
        return;
      };
    };
    tascList.push({id:idCount,name:addTasc});
    idCount++;
    var
      tascLength   = tascList.length;
    $('.listtable').empty();
    for(i = 0; i < tascLength; i++) {
      $('#listtable').append($('<tr>').attr('id', tascList[i].id)
      .append($('<td>').attr('id', 'tasc').text(tascList[i].name))
      .append($('<td>').append($('<button>').attr('id', 'editbtn').text('編集')))
      .append($('<td>').append($('<button>').attr('id', 'deletebtn').text('削除')))
      .append($('<td>').append($('<button>').attr('id', 'completebtn').text('終了'))));
    };
    $text.val('');
  });
  $(document).on('click', '#editbtn', function() {
    var
      setTasc     = $(this).parents('tr').children('#tasc').text();

    $warning.empty();
    $('.edit').removeClass('edit');
    $(this).parents('tr').children('#tasc').addClass('edit');
    $text.val(setTasc);
    $addbtn.hide();
    $savebtn.show();
  });
  $savebtn.on('click', function() {
    var
      editTasc = $text.val(),
      setList  = $('#listtable').children('tr'),
      length   = setList.length,
      getTasc  = '',
      i;

    $warning.empty();
    if(editTasc === '') {
      $warning.append($('<p>').text('入力されていません').css('color', 'red'));
      return;
    };
    for(i = 0; i < length; i++) {
      getTasc = setList.eq(i).children('#tasc').text();
      if(editTasc === getTasc) {
        $warning.append($('<p>').text('すでに登録されています').css('color', 'red'));
        return;
      };
    };
    var
      eidtId = $('.edit').parents('tr').attr('id');

    $.each(tascList, function(i, val) {
      if(parseInt(eidtId, 10) === val.id) {
        val.name = editTasc;
        return false;
      };
    });
    $('.edit').text(editTasc);
    $text.val('');
    $('.edit').removeClass('edit');
    $addbtn.show();
    $savebtn.hide();
  });
  $(document).on('click', '#deletebtn', function() {
    var
      setId  = $(this).parents('tr').attr('id');

    $warning.empty();
    $text.val('');
    $.each(tascList, function(i, val) {
      if(parseInt(setId,10) === val.id) {
        tascList.splice(i, 1);
        return false;
      };
    });
    $(this).parents('tr').remove();
    $addbtn.show();
    $savebtn.hide();
  });
  $(document).on('click', '#completebtn', function() {
    $warning.empty();
    $text.val('');
    $(this).parents('tr').find('#editbtn').addClass('completebtn');
    $(this).parents('tr').find('#deletebtn').addClass('completebtn');
    $(this).parents('tr').addClass('complete');
    $(this).attr('id', 'cancelbtn').text('取り消し');
    $addbtn.show();
    $savebtn.hide();
    $('.edit').removeClass('edit');
    return false;
  });
  $(document).on('click', '#cancelbtn', function() {
    $(this).parents('tr').removeClass('complete');
    $('.completebtn').removeClass('completebtn');
    $(this).attr('id', 'completebtn').text('終了');
  });
});