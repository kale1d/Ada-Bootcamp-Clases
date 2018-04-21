//cuando se clickea afuera del campo tiene q aparecer un error 
var section = document.getElementsByTagName('section');
var nom = document.getElementById('nombre');
var ape = document.getElementById('apellido');
var consulta = document.getElementById('consulta');
var input = document.getElementById('nombre')

function enviar () {
	if (nom.value != "" && ape.value != "" && consulta.value != "") {
		
	} else {
		var error = document.createElement('p')
		error.textContent = 'Error';
		section[0].insertBefore(error,input);
		 
	}
	 
}

