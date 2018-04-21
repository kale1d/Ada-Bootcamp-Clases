/*
function validatePassword (pwd) {
var numeros = ['0','1','2','3','4','5','6','7','8','9'];
var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var hasLetters = false;
var hasNumbers = false;
if (pwd < 6) {
	console.log ('contraseña incorrecta');
} 
else {
	for(i = 0; i < pwd.length; i++){
 		if (numeros.indexOf(pwd[i]>-1)) {
 			hasNumbers = true;
 		}
 		if (letras.indexOf(pwd[i]> -1)){
 			hasLetters = true;
 		}
 		if (hasNumbers==true && hasLetters == true){
 			console.log ('ok');
 			break;

 		}
	}
}
}*/


function validatePassword(pwd) {
   var numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
   var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
   var hasLetters = false
   var hasNumbers = false
   
  if (pwd.length < 6) { 
    console.log('Contraseña incorrecta')
  } else {
    for (var i = 0; i < pwd.length; i++) {
      if (numeros.indexOf(pwd[i]) > -1) {
        hasNumbers = true
        console.log('Numero')
      }

      if (letras.indexOf(pwd[i]) > -1) {
        hasLetters = true
        console.log('Letra')
      }

      if (hasNumbers == true && hasLetters == true) {
        console.log('Ok')
        break; 
      }
    }
  }
}