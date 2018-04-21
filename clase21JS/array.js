var arr1 = [5,2,10,20,1,84];
var elmasgrande = 0;
var elsegundomasgrande = 0;

for(i = 0; i < arr1.length; i++){
	if (elmasgrande< arr1[i]) {
		elsegundomasgrande = elmasgrande;
		elmasgrande=arr1[i];
	}	
}
	console.log (elmasgrande,elsegundomasgrande);


