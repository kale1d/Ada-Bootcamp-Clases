//Crear un archivo vacio. html
//crear un titulo h1
//agregarle "ahora si todo esto es dinámico"
//crear un elemento párrafo
//Agregarle "este documento se crea utilizando solo ECMAsCRIPT"
//insertar el elemento titulo dentro del elemento body
//insertar el elemento párrafo dentro del elemento

// var body = document.querySelector('body');
// var h1 = document.createElement ('h1');
// h1.innerHTML = '<h1>"ahora si todo esto es dinámico"</h1>';
// var parrafo = document.createElement ('p');
// parrafo.textContent = 'este documento se crea utilizando solo ECMAsCRIPT';
// body.appendChild(h1);
// body.appendChild (parrafo);

//seleccionar el eleemento body
//crear un array con 10 nombres
// crear un elemento ul
// recorrer el array nombres y por cada uno crear un elemento li y asignar el texto correspondiente
// ir insertando cada elemento li dentro de la lista ul
// insertar el elemento dentro del body 

// Seleccionar el elemento h1 y agregar los siguientes estilos:
// color: red
// font weight: normal
// text decoration: underline
// Seleccionar el elemento p y agregar los siguientes estilos:
// color: green
// font weight: bold
// border: 1px solid black
// Manejo de propiedades de CSS

// Los elementos HTML tienen una propiedad llamada style que retorna un objeto literal que representa los estilos que tiene un objeto
// Al ser un objeto de ECMAScript podemos agregar o modificar sus atributos
// Los nombres de las propiedades de CSS en ECMAScript se escriben con el siguiente formato: nombreDePropiedadDeCss
// Por ejemplo la propiedad de CSS background-color se escribe en ECMA como backgroundColor
// Ejemplo:

//  <p>Elemento sin estilo pero se lo vamos a agregar de forma dinámica</p>

// let elemento = document.querySelector('p');
// elemento.style; // {}
// elemento.style.color = ‘red’; // seteo el color a rojo
// elemento.style.fontWeight = ‘bold’; //seteo el weight a bold
// De esta forma podemos manipular las propiedades de style en nuestros elementos

var body = document.querySelector('body');
var lista = document.createElement('ul');

var nombres = ['ada','ana','jana','lala','tata','tita','tuto','tuta','tato','tati'];

for(let i = 0; i < nombres.length; i++){
	
	var eLista = document.createElement('li');
	eLista.textContent =  nombres[i];
	lista.appendChild(eLista);

	}

	body.appendChild(lista);