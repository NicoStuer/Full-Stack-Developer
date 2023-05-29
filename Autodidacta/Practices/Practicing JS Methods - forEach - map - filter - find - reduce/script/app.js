let personas = [
    {nombre: 'Boris', hobby: 'correr', salario: '2000'},
    {nombre: 'Luis', hobby: 'cantar', salario: '1500'},
    {nombre: 'Carmen', hobby: 'cocinar', salario: '800'},
    {nombre: 'Percy', hobby: 'cantar', salario: '1100'},
    {nombre: 'Rosa', hobby: 'leer', salario: '3000'},
];

//forEach

personas.forEach((persona, index) => {
    //console.log(persona.nombre, index);
})

// map

let newList = personas.map((persona) => {
    return 'hola'+ persona.nombre 
})

//console.log(newList);

// filter

let newListDos = personas.filter(persona => persona.salario >= 1100)
//console.log(newListDos);

//find : encuentra al primer elemento q cumpla una determinada condicion

let newListTres = personas.find(object => object.hobby === 'cantar')
//console.log(newListTres);

const lista = [3, 4, 8, 12, 10];

let suma = 0
for(let num of lista){
    //console.log(num);
    suma += num;
}

//console.log(suma);

let total = lista.reduce((accumulator, currentValue) => {
    //console.log(accumulator, currentValue);
    return accumulator + currentValue
});
//console.log(total);

let persons = [
    {nombre: 'Alice', edad: '21'},
    {nombre: 'Max', edad: '20'},
    {nombre: 'Boris', edad: '21'},
    {nombre: 'Luis', edad: '19'},
    {nombre: 'Rosa', edad:'20'},
    {nombre: 'Carmen', edad:'21'}
];

const groupBy = (miLista, property) => {
    return miLista.reduce((accumulator, object) => {
            let key = object[property];
            console.log(key);
            if(!accumulator.hasOwnProperty(key)){
                accumulator[key] = [];
            }
            accumulator[key].push(object);
        return accumulator;
    }, {});
}

console.log(groupBy(persons, 'edad'));


const groupByName = (arr, propiedad) => {
    return arr.reduce((acc, object) => {
        let key = object[propiedad];
        if(!acc[key]){
            acc[key] = []
        }
        acc[key].push(object)

        return acc
    }, [])
}

console.log(groupByName(persons, 'nombre'));