function tildes (palabra) {

var tilde = ['á','é','í','ó','ú'];
var tildesi = false;


for(i = 0; i < palabra.length; i++){
	for (z = 0; z< tilde.length; z++) {
		if (palabra [i]==tilde[z]) {
			tildesi=true	
		} 
	}

} 
if (tildesi==true) {
	console.log ('lleva tilde')
}
else {
	console.log ('no lleva tilde');
}

}

