
//mayor de 18, telefono tiene que aceptar solo numeros

//var body = document.querySelector('body');
var section = document.getElementsByTagName('section');
var nom = document.getElementById('nombre');
var ape = document.getElementById('apellido');
var input = document.getElementById('nombre');
var fdn = document.getElementById ('fdn');
var tel = document.getElementById ('tel');
var prov = document.getElementById('prov');
var barrio = document.getElementById('barrio');


function enviar () {
	if (nom.value != ""
		&& ape.value != ""
		&& fdn.value !=""
		&& tel.value != ""
		&& prov.value != ""
		&& barrio.value !="" ) {
		
	} else {
		var error = document.createElement('p')
		error.textContent = 'Error';
		section[0].appendChild(error);
				//section[0].insertBefore(error,input);
	}
}