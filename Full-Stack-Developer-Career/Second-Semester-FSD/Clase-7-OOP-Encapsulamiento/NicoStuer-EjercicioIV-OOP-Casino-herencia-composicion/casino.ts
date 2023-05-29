import { JuegoDeCasino } from "./juegoDeCasino";
import { Cliente } from "./cliente";

export class Casino{
    private direccion:string;
    private localidad:string;
    private dineroDisponible:number;
    private juegosDeCasino:JuegoDeCasino[];
    private cliente:Cliente[];

    constructor(dineroDisponible:number, juegosDeCasino:JuegoDeCasino[]){
        this.dineroDisponible = dineroDisponible;
        this.juegosDeCasino = juegosDeCasino;
        this.cliente = [];
        this.direccion = 'Los Manzanares 1565';
        this.localidad = `Las Flores`
    }

    public getDineroDisponible():number{
        return this.dineroDisponible
    }
    public setDineroDisponible(dineroDisponible:number){
        this.dineroDisponible = dineroDisponible;
    }

    public getJuegosDeCasino():JuegoDeCasino[]{
        return this.juegosDeCasino
    }
    public setJuegosDeCasino(juegoDeCasino:JuegoDeCasino):void{
        this.juegosDeCasino.push(juegoDeCasino)
    }

    public getCliente():Cliente[]{
        return this.cliente
    }
    public setCliente(cliente:Cliente):void{
        this.cliente.push(cliente)
    }
}