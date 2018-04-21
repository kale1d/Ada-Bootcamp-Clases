var randomIzq = Math.ceil(Math.random() * 100)
var randomAbajo = Math.ceil(Math.random() * 100)

var izq = []
var aba = []

for (var i = 0; i < randomIzq; i++) {
 izq.push('verde');
}

for (var i = 0; i < randomAbajo; i++) {
 aba.push('rojo');
}

 console.log (izq.length);
 console.log (aba.length);

 if (izq.length >aba.length) {
 	grande = izq;
 } else {
 	grande = aba;
 }

 console.log (grande);

 for (var i = 0; i < grande.length; i++) {
 if (izq.length > i) {
   console.log(izq[i])
 }

 if (aba.length > i) {
   console.log(aba[i])
 }
}