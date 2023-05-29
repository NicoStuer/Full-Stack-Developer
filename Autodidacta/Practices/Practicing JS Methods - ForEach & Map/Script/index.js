const numeros = [1, 2, 3, 4, 5, 10, 15]

numeros.forEach(escribirNumero);

function escribirNumero(item, index, arr) {
    console.log('a[' + index + '] = ' + item);
}

numeros.forEach((item, index, arr) => {
    console.log('a[' + index + '] = ' + item);
})

let suma = 0

numeros.forEach(item => {
    suma += item
})

console.log(suma);

const letras = ['a', 'b', 'a', 'b', 'c', 'a', 'd'];

let counter = {};

letras.forEach(item => {
    if (counter[item]) {
        counter[item]++;
    }else{
        counter[item] = 1
    }
})

console.log(counter);

const miArray = ['hola', 5, true, null, undefined, {a:2, b:3}, ()=>'hola', [1, 2, 3]];

console.log(miArray);

miArray[4] = 'Pablo';

console.log(typeof miArray);

const miArrayDos = [1, 2, 3, 4, 5, 6]

miArrayDos.push(7);
const ultimoElemento = miArrayDos.pop()
console.log(ultimoElemento);
console.log(miArrayDos.length);

const primerElemento = miArrayDos.shift()
console.log(primerElemento);

miArrayDos.unshift(1)
console.log(miArrayDos);

//miArrayDos.splice(3, 0, 'hola')
console.log(miArrayDos);


const miArrayForeach = [1, 2, 3, 4]
//const forEachFunction = (elemento, indice, array) => {
//}

miArrayForeach.forEach((elem, index) => {
 //console.log(Number(elem)+2, index);
 console.log(elem * index);
})

//const miArrayForeachDos = miArrayForeach.map(function(i) {return i+3})
const miArrayForeachDos = miArrayForeach.map((i) => i+3)
console.log(miArrayForeachDos);

const facturas = [
    {
        precio: 23,
        cantidad: 1,
    },
    {
        precio: 19,
        cantidad: 2,
    },
    {
        precio: 14,
        cantidad: 4,
    },
    {
        precio: 22,
        cantidad: 1,
    }
]

const iva = 1.21;

const totalFacturas = facturas.map(i => i.precio * i.cantidad * iva)

//totalFacturas.forEach((e, index) => console.log('Elemento', index, e))

const total = totalFacturas.reduce((a, b) => a+b)

const totalDos = facturas.map(i => i.precio * i.cantidad).reduce((a, b) => a+b)

console.log(totalFacturas);

console.log(total);
console.log(totalDos);

const totalTres = facturas.map(i => i.precio * i.cantidad).filter(i => i > 30)
console.log(totalTres);

//Ejercicio: Usar el method forEach para recorrer un arreglo.

let lenguajes = ['javascript', 'c#', 'PHP', 'Java', 'Python']

lenguajes.forEach(function(valor, indice, lenguajes){
    console.log(`${valor} se encuentra en el indice ${indice} `);
})

function recorridoArreglo(valor, indice, lenguajes){
    console.log(`${valor} se encuentra en el indice ${indice} `);
}

lenguajes.forEach(recorridoArreglo)

lenguajes.forEach((valor, indice, lenguajes) => {
    console.log(`${valor} se encuentra en el indice ${indice} `);
})

//Recorrer arreglos

let arreglo = [2, 4, 6, 8, 10, 12];

for (let i = 0; i < arreglo.length; i++) {
    const item = arreglo[i];
    const index = i;
    console.log(item, index);
}

arreglo.forEach((item, index) => {
    console.log(item, index);
})

//.map
//Parecido al forEach pero nos devuelve un nuevo arreglo,
// hace una operacion en cada operacion sin modificar al arreglo original.

let arr = ['juan', 'marcos', 'lena', 'sergio']

let result = []
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    result.push(`<div>${element}</div>`)
}
console.log(result);

let resultDos = arr.map((item, index) => {
    return '<div>${item}</div>';
})
console.log(resultDos);
console.log(arr);

//.filter
//Nos permite filtrar elementos con una determinada condicion
//en un nuevo array

let arrDos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

let resArrDos = []

for (let i = 0; i < arrDos.length; i++) {
    const element = arrDos[i];

    if (element >= 5 && element <= 11) {
        resArrDos.push(element)
    }
    
}
console.log(resArrDos);

let resDosArrDos = arrDos.filter(item => item >= 5 && item <=11)
console.log(resDosArrDos);

//.find()
//Nos premite encontrar la primera coincidencia dentro de nuestro array.

let arrTres = [
    {
        city: 'California',
        budget: 15500
    },
    {
        city: 'NY',
        budget: 8000
    },
    {
        city: 'Orlando',
        budget: 2000
    }
]

let resArrTres = {}
for (let i = 0; i < arrTres.length; i++) {
    const element = arrTres[i];

    if(element.budget < 8000){
        resArrTres = element;
        break
    }
}
console.log(resArrTres);

let arrTresResDos = arrTres.find(item => item.budget < 8000);
console.log(arrTresResDos);