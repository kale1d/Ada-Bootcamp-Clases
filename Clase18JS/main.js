console.log ('a')
var nombre = 'pepe';
var edad = 1*3+4;
console.log(edad,nombre);
edad=edad+1;
console.log(edad);
var hola;
console.log (hola);
console.log (nombre + ' tiene ' + edad + ' años ');

var clima = 'lluvia';
if (clima=='lluvia') {
	console.log('paraguas');
	clima='sol';
	console.log(clima);
}
else if (clima=='sol') {
	console.log(clima=='anteojos');
}

else{

	console.log ('remera');
}


var edad=-1;
if (edad>=18) {
	console.log('es mayor de edad')
}
else if (edad<0) {
	console.log ('no existisssss');
}
else {
	console.log('es menor de edad')
}

var semaforo='verde'

if (semaforo == 'verde') {
	console.log('verde');
	semaforo='rojo';
}
if (semaforo=='rojo') {
	console.log('rojo');
	semaforo='verde';
}
if (semaforo=='verde') {
	console.log('verde');
	semaforo='rojo';

}
if(semaforo=='rojo') {
console.log('rojo');

}


var humanos = ['h1','h2','h3','h4'];
console.log(humanos[0]);

humanos.push ('h5');
console.log(humanos);
