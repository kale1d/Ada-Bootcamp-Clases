// const list = $('#list');

// function add () {
// 	inputv = $('action');
// 	list.append('<li>'+ inputv.val() +'</li>');
// 	inputv.val();
	
// }

//.append('<button onclick="remove('+contador+')">x</button>

// const list = $('#list');
// let cont = 0;

// function add() {
//   const inputValue = $('#action')
//   list.append('<li>' + inputValue.val() + ' ' + '<button onclick="remove('+cont+')">X</button>' + '</li>')
//   inputValue.val('')
//   cont++;
//   console.log(cont)
// }

// function remove (index){

// $('list').children()[index].remove();
// }


const list = $('#list')
function add() {
  const inputValue = $('#action').val()
  const listItem = "<li>" + inputValue + '</li><button>Borrar</button>'

  list.append(listItem)
  $('#action').val('')
}


$(document).on('click', 'ul button' , function() {
  console.log(123)
  const index = $('ul button').index(this)

  console.log(index)
  $('ul li')[index].remove()
  $('ul button')[index].remove()

});