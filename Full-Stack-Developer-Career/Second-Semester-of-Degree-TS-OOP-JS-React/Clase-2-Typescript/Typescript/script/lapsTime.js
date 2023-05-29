"use strict";
//Muestra de código
// En una prueba, un piloto tiene que completar 4 vueltas
// Se necesita un programa que permita ingresar por teclado el tiempo de cada vuelta
// El programa debe retornar el tiempo total y el promedio de vuelta
exports.__esModule = true;
var ReadlineSync = require("readline-sync");
var time = function () {
    var laps = 1;
    var totalLaps = [];
    while (laps <= 4) {
        totalLaps.push(Number(ReadlineSync.question("Tiempo vuelta ".concat(laps, ": "))));
        laps++;
    }
    console.log(totalLaps);
    var finalTime = totalLaps.reduce(function (a, b) { return a + b; });
    console.log("El tiempo total de la carrera es: ".concat(finalTime, "s"));
    var lapAverage = finalTime / 4;
    console.log("El promedio de vuelta es: ".concat(lapAverage, "s"));
};
time();
//Preguntas
//Por que no me mustra los resultados en el navegador...???
//app.js:6 Uncaught ReferenceError: exports is not defined
//at app.js:6:1
