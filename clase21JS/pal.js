var palabra = 'amor a roma';
var palabrainvertida = '';
var longitud = palabra.length;

for(i = longitud -1 ; i >= 0; i--){
	//console.log (palabra [i], i);
 palabrainvertida = palabrainvertida + palabra[i];
//console.log(palabrainvertida);

if (palabrainvertida==palabra) {
	console.log('es palindromo')
} else {
	console.log('no!')
}
}
