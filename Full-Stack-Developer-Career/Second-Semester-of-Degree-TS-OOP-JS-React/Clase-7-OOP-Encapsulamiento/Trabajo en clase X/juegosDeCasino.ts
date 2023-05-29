export class JuegoDeCasino{
    protected _cantidadDeJugadores:number;
    protected _fichas:number[];
    protected _nombreDelDealer:string;
    
    constructor(cantidadDeJugadores:number, fichas:number[], cantidadDeFichas:number, cartas:boolean, nombreDelDealer:string){
        this._cantidadDeJugadores = cantidadDeJugadores;
        this._fichas = fichas;
        


    }

}