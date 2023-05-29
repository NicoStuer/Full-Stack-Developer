import { Cliente } from "./cliente";
import { Casino } from "./casino";
import { JuegoDeCasino } from "./juegoDeCasino";
import { Poker } from "./poker";
import { Ruleta } from "./ruleta";

const poker01:Poker = new Poker(50, 7, 'Juan', 12); 
const poker02:Poker = new Poker(100, 8, 'Guepardo', 36);
const rula01:Ruleta = new Ruleta(5, 14, 'El LookyGuy', 12);
const rula02:Ruleta = new Ruleta(10, 23, 'Manos Agiles', 2);

const cliente001 = new Cliente(1500, 0o0, 1);
const cliente002 = new Cliente(10000, 200, 3);

const juegos:JuegoDeCasino[] = [poker01, poker02, rula01, rula02];

const casino = new Casino(1000000, juegos);

casino.setCliente(cliente001)
casino.setCliente(cliente002)

console.log(casino.getJuegosDeCasino());

console.log(casino.getCliente());


