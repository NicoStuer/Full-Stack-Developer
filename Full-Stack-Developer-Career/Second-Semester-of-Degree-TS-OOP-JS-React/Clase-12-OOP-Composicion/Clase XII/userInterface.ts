import { celular } from "./celular";
import { SimCard } from "./simCard";
import { Battery } from "./battery";

const simUno:SimCard = new SimCard('Movistar', 2244911)
const simDos:SimCard = new SimCard('Personal', 2244452222)

const simsArr:SimCard[] = [simUno, simDos]

const batteryOne:Battery = new Battery(97, 'Energizer', 'AAA')

const cellOne = new celular('Samsung', 'A50', batteryOne)

cellOne.setSimCard(simUno)
cellOne.setSimCard(simDos)

console.log(cellOne.getInfo());

//console.log(cellOne);

cellOne.getInfo()