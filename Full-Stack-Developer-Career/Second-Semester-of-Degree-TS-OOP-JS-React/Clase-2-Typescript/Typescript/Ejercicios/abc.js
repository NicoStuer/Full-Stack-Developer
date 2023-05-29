"use strict";
exports.__esModule = true;
var fs = require("fs");
var texto = fs.readFileSync('Ejercicios/abc.txt', 'utf8');
var palabras = texto.split(' ');
console.log(palabras);
// Definir funciones (con todos los tipos necesarios) para hacer lo siguiente:
// Cargar un listado de palabras (por esta vez, usar el arreglo como variable global)
// Insertar/eliminar/buscar/actualizar una palabra del listado
var ReadlineSync = require("readline-sync");
var wordGame = function () {
    var wordLenght = Number(ReadlineSync.question('Especifique la cantidad de palabras a ingresar:'));
    var wordInput = [];
    var counter = 1;
    while (counter <= wordLenght) {
        wordInput.push(ReadlineSync.question("Ingrese su ".concat(counter, " palabra: ")));
        counter++;
    }
    return wordInput;
};
var arrWords = wordGame();
console.log(arrWords);
wordGame();
