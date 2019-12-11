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
      errorResult = '',
      i;

    $warning.empty();

    errorResult = checkError(addtask, taskList);
    if(errorResult !== true) {
      setError(errorResult, $warning);
      return;
    }

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
    }
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
      $edit    = $('.edit'),
      errorResult = '',
      i;

    $warning.empty();

    errorResult = checkError(edittask, taskList);
    if(errorResult !== true) {
      setError(errorResult, $warning);
      return;
    }

    var eidtId = $edit.parents('tr').attr('id');
    $.each(taskList, function(i, val) {
      if(parseInt(eidtId, 10) === val.id) {
        val.name = edittask;
        return false;
      }
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
        }
      });
      $(this).parents('tr').remove();
      $('.edit').removeClass('edit');
      $addbtn.show();
      $savebtn.hide();
    }
  });
  $(document).on('click', '#completebtn', function() {
    var completeId = $(this).parents('tr').attr('id');
    $warning.empty(); 
    $text.val('');
    $.each(taskList, function(i, val) {
      if(parseInt(completeId, 10) === val.id) {
        val.done = true;
        return false;
      }
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
      }
    });
    $(this).parents('tr').removeClass('complete');
    $('.completebtn').removeClass('completebtn');
    $(this).attr('id', 'completebtn').text('終了');
  });

  function checkError(insertTask, list) {
      if(insertTask === '') {
        return '未入力';
      }
      var
        length = list.length,
        gettask = '',
        i;
      for(i = 0; i < length; i++) {
        gettask = list[i].name;
        if(insertTask === gettask) {
          return '重複';
        }
      }
      return true;
  };
  function setError(kind, $target) {
    switch(kind) {
      case '未入力':
        $target.append($('<p>').text('入力されてません').css('color', 'red'));
        break;
      case '重複':
        $target.append($('<p>').text('すでに登録されてます').css('color', 'red'));
        break;
      default:
        break;
    }
  };
});