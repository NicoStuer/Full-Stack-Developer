import { Auto } from "./auto";
import { Cubierta } from "./cubiertas";
import { Motor } from "./motor";

let marcaDeMiAuto:string = 'Ford';
let modeloDelAuto:number = 2018;

let motorDeMiAuto:Motor = new Motor(45, 'Diesel');

let cubierta1 = new Cubierta(75, 'Pirelli')
let cubierta2 = new Cubierta(75, 'Pirelli')
let cubierta3 = new Cubierta(75, 'Pirelli')
let cubierta4 = new Cubierta(75, 'Pirelli')

let arrDeCubiertas:Cubierta[] = [cubierta1, cubierta2, cubierta3, cubierta4];

let miAuto:Auto = new Auto(marcaDeMiAuto, modeloDelAuto, motorDeMiAuto, arrDeCubiertas)

console.log(miAuto);
