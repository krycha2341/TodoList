$('.confirmBtn').on('click', addItem);
$('ul').on('click', 'button.deleteBtn', removeItem);


function addItem(){
  var text=$('.itemText').val();
  var newItem = $('<li></li>');
  var newBtn=$('<button></button>');
  newBtn.addClass('deleteBtn');
  newBtn.html('<b>X</b>');
  newItem.text(text);
  newItem.append(newBtn);
  $('#theList ul').append(newItem);
  $('.itemText').val('');
}

function removeItem(e){
  var newRem=$(e.currentTarget);
  newRem.parent().remove();
}
