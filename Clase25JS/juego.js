/*function char(nombre, ataque, vida) {
this.nombre = nombre;
this.ataque = ataque;
this.vida = vida;
}

var enemigo1 = new char('pepe', 2, 30);
var enemigo2 = new char('pj2', 4, 10);
var enemigo3 = new char('pj3', 1, 50);
var enemigo4 = new char('pj4', 10, 10);
var enemigo5 = new char('pj5', 3, 30);
var miPj = new char('kaleid', 15, 150);

var enemigos = [enemigo1, enemigo2, enemigo3, enemigo4, enemigo5];
var turno = 0;

	for(i = 0; i < enemigos.length; i++){
		while (miPj.vida > 0 && enemigos[i].vida > 0) {
			if (turno == 0) {
				enemigos[i].vida = enemigos[i].vida - miPj.ataque;
				turno = 1;
					if
			} else {
				// statement
			}
		}
	}
*/
function Char(name, health, attack, speed) {
  this.name = name
  this.health = health
  this.attack = attack
  this.speed = speed
}

var enemigo1 = new Char('Javascript', 100, 50, 10)
var enemigo2 = new Char('Juani', 100, 23, 10)
var enemigo3 = new Char('Guason', 100, 10, 10)
var enemigo4 = new Char('Pikachu', 100, 1, 100)
var enemigo5 = new Char('Rita', 100, 15, 1)

var nosotros = new Char('Ada', 100, 85, 30)
var enemigos = [enemigo1, enemigo2, enemigo3, enemigo4, enemigo5]

for (var i = 0; i < enemigos.length; i++) {
  var turno

  if (nosotros.speed >= enemigos[i].speed) {
    turno = 0
  } else {
    turno = 1
  }
  
  while(nosotros.health > 0 && enemigos[i].health > 0) {
    if (turno == 0) {
      enemigos[i].health = enemigos[i].health - nosotros.attack
      turno = 1
      if (enemigos[i].health <=  0) {
        console.log(enemigos[i].name + ' murio')
      }
    } else {
      nosotros.health = nosotros.health - enemigos[i].attack
      turno = 0
      if (nosotros.health <= 0) {
        console.log(nosotros.name + ' nos morimos')
      }
    }
  }
}