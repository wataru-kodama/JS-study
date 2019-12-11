$(function() {
  'use strict';

  var
    $text    = $('#text'),
    $warning = $('#warning'),
    $addbtn = $('#addbtn'),
    $savebtn = $('#savebtn'),
    $listTable = $('#listtable'),
    taskList = [],
    idCount = 1;

  $addbtn.on('click', function() {
    var
      addtask  = $text.val(),
      todoList  = $listTable.children('tr'),
      listLength   = todoList.length,
      gettask  = '',
      i;

    $warning.empty();
    if(addtask === '') {
      $warning.append($('<p>').text('入力されていません').css('color', 'red'));
      return;
    };
    for(i = 0; i < listLength; i++) {
      gettask = todoList.eq(i).children('#task').text();
      if(addtask === gettask) {
        $warning.append($('<p>').text('すでに登録されています').css('color', 'red'));
        return;
      };
    };
    taskList.push({id:idCount, name:addtask, done:false});
    idCount++;
    var taskLength = taskList.length;
    $listTable.empty();
    for(i = 0; i < taskLength; i++) {
      $listTable.append($('<tr>').attr('id', taskList[i].id)
        .append($('<td>').attr('id', 'task').text(taskList[i].name))
        .append($('<td>').append($('<button>').attr('id', 'editbtn').text('編集')))
        .append($('<td>').append($('<button>').attr('id', 'deletebtn').text('削除')))
        .append($('<td>').append($('<button>').attr('id', 'completebtn').text('終了'))));
    };
    $text.val('');
  });
  $(document).on('click', '#editbtn', function() {
    var 
      taskName = $(this).parents('tr').children('#task'),
      settask = taskName.text();
    $warning.empty();
    $('.edit').removeClass('edit');
    taskName.addClass('edit');
    $text.val(settask);
    $addbtn.hide();
    $savebtn.show();
  });
  $savebtn.on('click', function() {
    var
      edittask = $text.val(),
      setList  = $listTable.children('tr'),
      length   = setList.length,
      gettask  = '',
      $edit    = $('.edit'),
      i;

    $warning.empty();
    if(edittask === '') {
      $warning.append($('<p>').text('入力されていません').css('color', 'red'));
      return;
    };
    for(i = 0; i < length; i++) {
      gettask = setList.eq(i).children('#task').text();
      if(edittask === gettask) {
        $warning.append($('<p>').text('すでに登録されています').css('color', 'red'));
        return;
      };
    };
    var eidtId = $edit.parents('tr').attr('id');
    $.each(taskList, function(i, val) {
      if(parseInt(eidtId, 10) === val.id) {
        val.name = edittask;
        return false;
      };
    });
    $edit.text(edittask);
    $text.val('');
    $edit.removeClass('edit');
    $addbtn.show();
    $savebtn.hide();
  });
  $(document).on('click', '#deletebtn', function() {
    var setId  = $(this).parents('tr').attr('id');
    if(!confirm('本当に削除しますか？')) {
      return false;
    } else {
      $warning.empty();
      $text.val('');
      $.each(taskList, function(i, val) {
        if(parseInt(setId,10) === val.id) {
          taskList.splice(i, 1);
          return false;
        };
      });
      $(this).parents('tr').remove();
      $('.edit').removeClass('edit');
      $addbtn.show();
      $savebtn.hide();
    };
  });
  $(document).on('click', '#completebtn', function() {
    var completeId = $(this).parents('tr').attr('id');
    $warning.empty(); 
    $text.val('');
    $.each(taskList, function(i, val) {
      if(parseInt(completeId, 10) === val.id) {
        val.done = true;
        return false;
      };
    });
    $(this).parents('tr').addClass('complete');
    $(this).attr('id', 'cancelbtn').text('取り消し');
    $addbtn.show();
    $savebtn.hide();
    $('.edit').removeClass('edit');
    return false;
  });
  $(document).on('click', '#cancelbtn', function() {
    var cancelId = $(this).parents('tr').attr('id');
    $.each(taskList, function(i, val) {
      if(parseInt(cancelId, 10) === val.id) {
        val.done = false;
        return false;
      };
    });
    $(this).parents('tr').removeClass('complete');
    $('.completebtn').removeClass('completebtn');
    $(this).attr('id', 'completebtn').text('終了');
  });
});