function sumadedos(numeros, resultadodelasuma) {
    var i = 0;
    var z = numeros.length - 1;
    var resultado = []
    sumaresultado = false
    while (i < z) {
        var resultadoq = numeros[i] + numeros[z];
        if (resultadoq < resultadodelasuma) {
            i++;
        } else if (resultadoq > resultadodelasuma) {
            z--;
        } else {
            sumaresultado = true
            break;
        }
    }
 if (sumaresultado == true) {
      resultado.push(numeros[i]);
      resultado.push(numeros[z]);
    console.log("El array se compone de " + numeros);
    console.log("El numero buscado es " + resultadodelasuma);
    console.log("Los numeros que suman " + resultadodelasuma + " son " + resultado);
  } else {console.log("No hay dos numeros que sumen ese numero en el array");}
}
