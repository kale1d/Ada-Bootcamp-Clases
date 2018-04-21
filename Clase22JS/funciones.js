/*function ne (nombre, edad) {
	//console.log ('mi nombre es ' + nombre + ' y tengo ' + edad + ' años');
}

ne ('denise', '30');

function validar () {
	a = [0,1,2,3,4,5,6,7,8,9];
for(i = 0; i <= 9; i++){
 if (a==i) {
 	// statement
 }
}
}

function suma (a,b) {
	var resultado = a+b;
//	a = [0,1,2,3,4,5,6,7,8,9];
//for(i = 0; i <= 9; i++){
// if (a[i]==i) {
 		console.log (resultado);
 
 	
 }

 //else {
 //	console.log('else');
 //}
//}

//}

//suma ('a','b');

function resta (a,b) {
	if (a>=0 || a<0 && b>=0 || b<0){
	var resultado = a-b;
	console.log (resultado);	
	}
	else {
		console.log('errorrrr');
	}
	
}

//resta ('10','20')

function suma (a,b){
	if (a>=0 || a<0 && b>=0 || b<0) {
	ret = a + b;
	}
	else {
		ret = 'hubo un errorrrr'
	}
	return ret;
}
/*
var sum = suma ('a','b');
console.log (sum);
*/

function ordenar (arr) {

for( i = 0; i < arr.length; i++){
	for (z=0; z< arr.length-i-1; z++) {
		if (arr[z]> arr[z+1]) {
			var temp = arr[z];
			arr[z] = arr[z+1];
			arr[z+1] = temp;
			// statement
		}
	}
 	
 } 
 return arr;
}

var arr = [1,4,3,23,80];

console.log (ordenar(arr));





