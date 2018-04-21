/*var persona = {
	nombre: 'juani',
	apellido: 'gallo',
	nombre: 23,
	esPelado: true,
	coloresPreferidos: ['rojo','verde'],
}

console.log(persona.esPelado, persona.nombre); */

//e/18-20 años -excluyente
//menos de 40cm de altura -excluyente
//al menos 3 piernas o 4 brazos
//array de 5 personas
//cumple con la altura y disfuncion de extremidades si se llama carla y tiene 17 puede entrar
var cuantaplatatengo = 0;
var persona = [{
	nombre: 'pedro',
	edad: 17,
	altura: 40,
	piernas: 3,
	brazos: 3,
	plata: 250,
	pago: function() {
			if (this.plata >= 200) {
				this.plata = this.plata - 200;

				cuantaplatatengo = cuantaplatatengo + 200;
				this.edad = 18;
				console.log(this.nombre + ' entra y ahora tiene ' + this.edad);
				console.log('la caja tiene ' + cuantaplatatengo + ' y ' + this.nombre + ' ahora tiene ' + this.plata);
			}
			else
				console.log (this.nombre + ' no puede entrar y tiene ' + this.edad);
	}
},

{
	nombre: 'juana',
	edad: 10,
	altura: 20,
	piernas: 5,
	brazos: 2,
	plata: 500,
	pago: function() {
			if (this.plata >= 200) {
				this.plata = this.plata - 200;

				cuantaplatatengo = cuantaplatatengo + 200;
				this.edad = 18;
				console.log(this.nombre + ' entra y ahora tiene ' + this.edad);
				console.log('la caja tiene ' + cuantaplatatengo + ' y ' + this.nombre + ' ahora tiene ' + this.plata);
			}
			else
				console.log (this.nombre + ' no puede entrar y tiene ' + this.edad);
	}
},

{
	nombre: 'roberta',
	edad: 23,
	altura: 50,
	piernas: 7,
	brazos: 2,
	plata: 2,
	pago: function() {
			if (this.plata >= 200) {
				this.plata = this.plata - 200;

				cuantaplatatengo = cuantaplatatengo + 200;
				this.edad = 18;
				console.log(this.nombre + ' entra y ahora tiene ' + this.edad);
				console.log('la caja tiene ' + cuantaplatatengo + ' y ' + this.nombre + ' ahora tiene ' + this.plata);
			}
			else
				console.log (this.nombre + ' no puede entrar y tiene ' + this.edad);
	}
},

{ nombre: 'antonio',
	edad: 19,
	altura: 10,
	piernas: 2,
	brazos: 2,
	plata: 300,
	pago: function() {
			if (this.plata >= 200) {
				this.plata = this.plata - 200;

				cuantaplatatengo = cuantaplatatengo + 200;
				this.edad = 18;
				console.log(this.nombre + ' entra y ahora tiene ' + this.edad);
				console.log('la caja tiene ' + cuantaplatatengo + ' y ' + this.nombre + ' ahora tiene ' + this.plata);
			}
			else
				console.log (this.nombre + ' no puede entrar y tiene ' + this.edad);
	}
},

{
	nombre: 'pepa',
	edad: 20,
	altura: 15,
	piernas: 3,
	brazos: 3,
	plata: 250,
	pago: function() {
			if (this.plata >= 200) {
				this.plata = this.plata - 200;

				cuantaplatatengo = cuantaplatatengo + 200;
				this.edad = 18;
				console.log(this.nombre + ' entra y ahora tiene ' + this.edad);
				console.log('la caja tiene ' + cuantaplatatengo + ' y ' + this.nombre + ' ahora tiene ' + this.plata);
			}
			else
				console.log (this.nombre + ' no puede entrar y tiene ' + this.edad);
	}
},
{
	nombre: 'carla',
	edad: 17,
	altura: 15,
	piernas: 3,
	brazos: 3,
	plata: 200,
	pago: function() {
			if (this.plata >= 200) {
				this.plata = this.plata - 200;

				cuantaplatatengo = cuantaplatatengo + 200;
				this.edad = 18;
				console.log(this.nombre + ' entra y ahora tiene ' + this.edad);
				console.log('la caja tiene ' + cuantaplatatengo + ' y ' + this.nombre + ' ahora tiene ' + this.plata);
			}
			else
				console.log (this.nombre + ' no puede entrar y tiene ' + this.edad);
	}
},
{
	nombre: 'josefa',
	edad: 17,
	altura: 15,
	piernas: 3,
	brazos: 3,
	plata: 300,
	pago: function() {
			if (this.plata >= 200) {
				this.plata = this.plata - 200;

				cuantaplatatengo = cuantaplatatengo + 200;
				this.edad = 18;
				console.log(this.nombre + ' entra y ahora tiene ' + this.edad);
				console.log('la caja tiene ' + cuantaplatatengo + ' y ' + this.nombre + ' ahora tiene ' + this.plata);
			}
			else
				console.log (this.nombre + ' no puede entrar y tiene ' + this.edad);
	}
},
]

//cualquiera que tenga 200 pesos puede entrar  y hacer una funcion que tenga 200 pesos menos  y yo 200 p mas
//tiene que ser mayor de 18 y menor a 20 
function entra(persona) {
	for(i = 0; i < persona.length; i++){
		if (persona[i].altura<=40 && (persona[i].piernas>=3 || persona[i].brazos>=4)
		|| (persona[i].nombre == 'carla')) {
			if (persona[i].nombre == 'carla'){
				persona[i].edad = 18;
			}
			if (persona[i].edad>=18 && persona[i].edad<=20) {
				console.log ('entra ' + persona[i].nombre);
			} else {
				persona[i].pago();
			}
			
			}
 

 		else {
 			console.log ('no entra '+ persona[i].nombre);
 		}
}
		
	} 


/*	function plata(persona.plata) {
		for(i = 0; i < persona.length; i++){
			if (persona[i].plata >= 200) {
				var resta = persona[i].plata - 200;
				var = persona[7].plata + resta;
			}
	}
	console.log (persona[7].nombre + ' tiene' + persona[7].plata)
}

/*
var objfunc = {
	nombre: 'lalala'
	saludo: function() {
		console.log ('hola mi nombre es ' + this.nombre );		 
	}
}
*/


//codigo juani 

var plataDelChorro = 0

function Persona(nombre, apellido, edad, plata) {
    this.name = nombre
    this.surname = apellido
    this.age = edad
    this.money = plata
    this.pagarPlata = function() {
        if (this.money >= 200) {
            this.money = this.money - 200
            plataDelChorro += 200 // plataDelChorro+200
            return true
        } else {
            return false
        }
    }
}

var persona1 = new Persona('Juani', 'Gallo', 23, 9999999999999);
var persona2 = new Persona('Juani2', 'Gallo', 17, 210);

var personas = [persona1, persona2]

for (var i = 0; i < personas.length; i++) {
    if (personas[i].age >= 18 && personas[i].age <= 20) {
        console.log(personas[i].name, ' puede entrar')
    } else {
        var puedePasar = personas[i].pagarPlata()
        if (puedePasar) {
            console.log(personas[i].name + ' puede pasar porque pago la coima')
        } else {
            console.log(personas[i].name + ' no puede pasar porque no pudo pagar la coima')
        }
    }
}