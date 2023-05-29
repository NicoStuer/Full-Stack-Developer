"use strict";
//# sourceMappingURL=index.js.map

//Template string

const numero = (numUno, numDos) => (`el numero es: ${numUno + numDos}`);
const result = numero(10 ,20);
console.log(result);

//objetos

const mascota = {
    nombre: 'Tom',
    edad: 10,
    vivo: true,
    colores:['marron', 'blanco']
}

console.log(mascota);
console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota.vivo);

mascota.id = 1

console.log(mascota.id);
console.log(mascota.colores[1]);

//Destructuring objects

console.log(mascota.nombre);
const nombreMascota = mascota.nombre
console.log(nombreMascota);

//const {edad, nombre} = mascota
//console.log(edad);
//console.log(nombre);

const web = {
    nombre: 'bluuweb',
    links: {
        enlace: 'www.bluuweb.cl'
    },
    redesSociales: {
        youtube: {
            enlace: 'youtube.com/bluuweb',
            nombre: 'bluuweb yt'
        },
        facebook:{
            enlace: 'facebook.com/bluuweb',
            nombre: 'bluuweb fb'
        }
    } 
}

console.log(web.redesSociales.youtube.enlace);

const enlaceYt = web.redesSociales.youtube.enlace
console.log(enlaceYt);

const {enlace, nombre} = web.redesSociales.youtube
console.log(enlace);
console.log(nombre);

//fetch

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(res => res.json())
.then(data => {
    //console.log(data.results)
    let arrayNombres = []
    data.results.forEach(element => {
        console.log(element.name);
        arrayNombres.push(element.name)
    });
    console.log(arrayNombres);
})

.catch(error => console.log(error))

//async await

const obtenerPokemones = async() => {
    try{
       const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
       const data = await res.json()
       console.log(data.results)
       const arrayNombres = data.results.map(poke => poke.name)
       const arraySelectivo = data.results.filter(poke => poke.name === 'bulbasaur')
       console.log(arraySelectivo);
       console.log(arrayNombres);
       const arraySinBulbasaur = data.results.filter(poke => poke.name !== 'bulbasaur')
       console.log(arraySinBulbasaur)
    } catch (error){
        console.log(error);
    }
}
obtenerPokemones()