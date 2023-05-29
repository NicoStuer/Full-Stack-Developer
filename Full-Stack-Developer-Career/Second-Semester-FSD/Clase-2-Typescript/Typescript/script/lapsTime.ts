//Muestra de código
// En una prueba, un piloto tiene que completar 4 vueltas
// Se necesita un programa que permita ingresar por teclado el tiempo de cada vuelta
// El programa debe retornar el tiempo total y el promedio de vuelta

import * as ReadlineSync from "readline-sync";


const time = () => {
    let laps: number = 1;
    let totalLaps: Array<number> = [];
    while (laps <= 4) {
        totalLaps.push(Number(ReadlineSync.question(`Tiempo vuelta ${laps}: `)));
        laps++
        
    }
    console.log(totalLaps);
    let finalTime:number = totalLaps.reduce((a:number, b:number) => { return a + b})
    console.log(`El tiempo total de la carrera es: ${finalTime}s`);
    let lapAverage:number = finalTime/4
    console.log(`El promedio de vuelta es: ${lapAverage}s`);
    
} 

time();

//Preguntas
//Por que no me mustra los resultados en el navegador...???

//app.js:6 Uncaught ReferenceError: exports is not defined
//at app.js:6:1

