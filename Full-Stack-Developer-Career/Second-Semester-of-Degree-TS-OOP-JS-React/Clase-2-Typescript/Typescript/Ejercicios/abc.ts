import * as fs from 'fs';

let texto: string = fs.readFileSync('Ejercicios/abc.txt', 'utf8');

let palabras: string[] = texto.split(' ');

console.log(palabras);

// Definir funciones (con todos los tipos necesarios) para hacer lo siguiente:
// Cargar un listado de palabras (por esta vez, usar el arreglo como variable global)
// Insertar/eliminar/buscar/actualizar una palabra del listado
import * as ReadlineSync from "readline-sync";

const wordGame = (): any => {
    let wordLenght: number = Number(ReadlineSync.question('Especifique la cantidad de palabras a ingresar:'))
    let wordInput: string[] = [];
    let counter: number = 1
    while (counter <= wordLenght) {
        wordInput.push(ReadlineSync.question(`Ingrese su ${counter} palabra: `));
        counter++
    }
    
    return wordInput;
};
let arrWords:string[] = wordGame();
console.log(arrWords);




wordGame();


