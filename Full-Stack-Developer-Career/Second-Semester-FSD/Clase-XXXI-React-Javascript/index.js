//Karen 
//Prototipe => hereda las propiedades de otro objeto.


function Persona(nombreCompleto, edad, ocupacion, estadoCivil, sexo, hobbies){
    this.nombreCompleto = nombreCompleto;
    this.edad = edad;
    this.ocupacion = ocupacion;
    this.estadoCivil = estadoCivil;
    this.sexo = sexo;
    this.hobbies = hobbies
} 

Persona.prototype.presentarse = function () {
    console.log(`Mi nombre es ${this.nombreCompleto}, tengo ${this.edad} años, y me gusta ${this.hobbies}`);
}

const persona = new Persona('Nicolas Stuer', 40, 'Mecanico', 'Soltero', 'Masculino', 'Lol');


console.log(persona);

// El cliente por el otro lado debe ser una Persona
// y además contar con las siguientes
// características: debe tener un número de cliente,
// la fecha de la última compra y un número de
// compras realizadas, además debe poseer un
// método que sea comprar.

function Cliente(id , ultimaCompra, comprasRealizadas){
    this.id = id;
    this.ultimaCompra = ultimaCompra;
    this.ultimaCompra = ultimaCompra
}

const cliente = new Cliente(0o1, '09/12/2018', 52)

cliente.prototype = new Persona('Nicolas Stuer', 40, 'Mecanico', 'Soltero', 'Masculino', 'Lol')

console.log(cliente);

//Crear objeto Gato y q a su vez sea un animal, agregarle un metodo q muestre sus caracteristicas.

function Animal(color, peso, altura) {
    this.color= color;
    this.peso = peso;
    this.altura = altura;
}


function Gato(raza, edad, vacunas){
    this.raza = raza;
    this.edad= edad; 
    this.vacunas= vacunas;
}

Gato.prototype = new Animal('Atigrado', 6.3, 23.5)

const gato = new Gato('Angora', 5, 'Al Dia');

Gato.prototype.caracteristicas = function () {
   console.log(`El gato de Raza ${this.raza} de ${this.edad} años de edad, tiene todad sus vacunas ${this.vacunas}; Color:${this.color}, Peso:${this.peso}, Altura:${this.altura}`);
}
console.log(gato);
console.log(gato.caracteristicas());

//Javascript: 
//es un lenguaje de programacion orientado a objetos con una estructura basada en prototipos, teniendo el concepto de objeto como principal abstraccion.

//Prototipó:
//Es un objeto de delegacion utilizado para implementar la herencia basada en prototipos. Cada objeto, cuando se crea, recibe su prototipo. Si el prototipo no esta establecido explicitamente, los objetos reciben un prototipo predeterminado como su objeto de herencia.

//Funcionamiento:
//La regla es muy simple, si una propiedad no se encuentra en el objeto mismo, hay un intento de buscar en el prototipo, si no se encontro entonces se busca en el prototipo del prototipo, etc., hasta que se agoten todas las cadenas de prototipos. Tecnicamente, este mecanismo se conoce como envio dinamico o delegacion.

//Ejemplos de prototipo

function Letter(number){
    this.number = number
}

Letter.prototype.getNumber = function () {
    return this.number
}

let a = new Letter(15);
let b = new Letter(100);

console.log(a.getNumber()); //15
console.log(b.getNumber()); //100

//C#  C-Sharp
//var a = 'Marluan';
//a.IsNullOrEmpty() -> Boolean
//Con el prototipe podemos crear funciones q nos faciliten el manejo de propiedades o metodos.

String.prototype.isNullOrEmpty = function(){
    if(this == null){
        return true;
    }
    if(this.trim().length === 0){
        return true;
    }
    return false;
}

let studentName = 'Ernesto';
let g = '  ';
console.log(studentName.isNullOrEmpty());
console.log(g.isNullOrEmpty());


let Students = [
    {
        name: 'Narluan'
    },
    {
        name: 'Alexis'
    },
    {
        name: 'Jeffrey'
    },
    {
        name: 'Franklin'
    }
];

Array.prototype.where = function(object, name){
    let studenObject = {}
    
}

