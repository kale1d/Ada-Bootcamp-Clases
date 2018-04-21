var palabra = 'pepe';
var palabrainvertida = '';
var longitud = palabra.length;

for(i = longitud -1 ; i >= 0; i--){
	//console.log (palabra [i], i);
 	palabrainvertida = palabrainvertida + palabra[i];
}
console.log(palabrainvertida);
