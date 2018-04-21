var numeros = document.getElementById("num");
var priNum = "";
var secNum = "";
var lastOp = "";


function carga (numeros) {
	var res = document.getElementById("resultado");

	if (lastOp == "") {

priNum = priNum + numeros;	
		console.log(priNum);
		res.value = priNum;
	}
	else {
	 	secNum = secNum + numeros;
	 	console.log (secNum);
	 	res.value = secNum;
	 } 
}

function suma () {
	if (lastOp == ""){
		lastOp = "sum";
	} 
	else {
		calculate()
		
	}
}

function resta () {
if (lastOp == ""){
		lastOp = "resta";
	} 
	else {
		calculate()
		
	}
}

function mult () {
	if (lastOp == ""){
		lastOp = "mult";
	} 
	else {
		calculate() 
	}
}
function div () {
	if (lastOp == ""){
		lastOp = "div";
	} 
	else {
		calculate()
}
}

function calculate () {
	switch (lastOp) {
		case "sum":
			priNum = parseFloat(priNum) + parseFloat(secNum);
			lastOp = "";
			secNum = "";
			break;
		case "resta":
			priNum = parseFloat (priNum) - parseFloat (secNum);
			lastOp = "";
			secNum = "";
			break;
			case "mult":
			priNum = parseFloat(priNum) * parseFloat(secNum);
			lastOp = "";
			secNum = "";
			break;
			case "div" :
			priNum = parseFloat(priNum) / parseFloat(secNum);
			lastOp = "";
			secNum = "";
			break;

	}
}

function resultado () {
var res = document.getElementById("resultado");
calculate();
res.value = priNum;
}

function borrar () {
	var res = document.getElementById("resultado");
	res.value = "";
	priNum = "";
}