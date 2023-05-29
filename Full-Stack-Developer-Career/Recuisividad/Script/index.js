//Recorremos un arreglo de manera secuencias

//solucion iterativa
const arr = [2, 6, 8, 9, 60, 34, 25]

function recorrerArr([]){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        
    }
    return arr
}
//recorrerArr(arr)



//Recorremos un arreglo de manera recursiva

const itFibonacci = (num) => {
    const sequence = [1, 1];
    let newFibChild = 0;
    for (let i = 2; i < num; i++) {
        newFibChild = sequence[i-1] + sequence[i-2]
        console.log(`Hijo de Fibonacci en la posicion ${i}, es: ${newFibChild}`);
        sequence.push(newFibChild)
    }
    return sequence[sequence.length-1];
}
console.log(itFibonacci(5));  

/*Solucion recursiva
Vamos a iniciar con n, bajando hasta 2 (caso base) por q si es menor o igual a dos retorna 1
*/

const recFibonacci = (num) => {
    if(n <= 2) return 1;
    return recFibonacci(n-1) + recFibonacci(n-2)
}