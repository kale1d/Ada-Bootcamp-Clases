/*var i =15

for (var i = 1; i < i; i=i+2) {

if (i%i == i, 1 && i%5!=0) {
	console.log (i, 'es primo');
} else {console.log (i, 'no es primo');

}
}
if (i%5!=0 && i%3!=0 && i%2!=0) {
	console.log (num, 'es primo');
} else {console.log (num, 'no es primo');
}
}

*/
var num = 11;
var esprimo= 'es primo';

for (var i = 2; i < num; i++) {

if (num % i == 0) {
	esprimo = 'no es primo'
	break
}
}

console.log (num, esprimo);