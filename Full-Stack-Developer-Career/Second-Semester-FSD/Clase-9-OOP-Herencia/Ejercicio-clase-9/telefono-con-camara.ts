import { Telefono } from "./telefono";

export class TelefonoConCamara extends Telefono{

   
    public sacarFoto() {
        if(this._estaPrendido)
        console.log('Sacando Foto');
        
    }

}

const object1 = [
    {name:'juan',
    lastName:'perez',
    dni:30240510},
    {
        name:'nico',
    lastName:'perez',
    dni:302510
    },
    {
    name:'papa',
    lastName:'perez',
    dni:3020
}
]

let found = object1.find(e => e.name === 'nico');
console.log(found?.dni);

