//to do list luego de apretar botón se tienen
//que agregar a una lista 
var a = document.getElementsByTagName('h1');
a[0].textContent = 'To-Do List';
// a.textContent = 'To-Do List';
var body = document.querySelector ('body');
var lista = document.createElement('ul');
var input= document.querySelector ('input')

body.appendChild(lista);

function agregar() {

	var eLista = document.createElement('li');
	eLista.textContent =  input.value;
	lista.appendChild(eLista);
	input.value = "";
	
}

