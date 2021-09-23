//Expresion de clase
//const Rectangulo = class R {

//}
//Declaracion de clase
//clases declaradas con class no tiene Hoisting
class Rectangulo {}
// Hoisting
// esto es cuando tomados variables definidas con var
// y las funciones definidas con function
// y las lleva al comienzo del archivo
//console.log(Cuadrado);

function Cuadrado() {}

//console.log(Cuadrado, Rectangulo);
const r = new Rectangulo();

class Chancho {
  propiedad = "mi propiedad";
  #hambre;
  static estatico = 42;
  constructor(estado = "feliz", hambre = false) {
    this.estado = estado;
    this.hambre = hambre;
  }

  hablar() {
    console.log(
      `yo soy un chancho ${this.estado} ${
        this.#hambre ? "con mucha hambre" : "satisfecho"
      }`
    );
  }

  static comer() {
    console.log(this.estatico, "Estoy comiendo");
  }
}

Chancho.comer();
const feliz = new Chancho("feliz");
//console.log(feliz.__proto__.hablar);
feliz.hablar();
const triste = new Chancho("triste");
//triste.hablar();
const nose = new Chancho();
//nose.hablar();
