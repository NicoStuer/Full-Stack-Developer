let readlineSync = require('readline-sync');


//Modificar el primer script de “Hola Mundo” para que:
// El mensaje que se muestra al usuario se almacene en una variable llamada mensaje y el funcionamiento del script sea el mismo.
let mensaje = readlineSync.question('Mensaje a enviar:'); 
console.log(mensaje);

//Modificar el ejemplo de secuencia:
//Qué cada mensaje se almacene en una variable a mostrar por consola y que el funcionamiento del script sea el mismo


//Modificar el ejemplo de base por altura
//Almacenar la base y la altura en variables y el resultado y que el funcionamiento del script sea el mismo

let altura = readlineSync.question('Indique la altura:');
//console.log(alturaPersona);
let base = readlineSync.question('Indique la base:')

let superficie = altura * base

console.log(superficie);