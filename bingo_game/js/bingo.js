$(function() {
  'use strict';
var
  i,
  numMax = 50,
  numList = [];
for(var i = 1; i <= numMax; i++) {
  numList.push(i);
  $('#numberarea').append($('<li>').attr('id', 'num' + i).text(i));
};
console.log(numList);
$('#result').text(1);
});