import { JuegoDeCasino } from "./juegoDeCasino";

export class Ruleta extends JuegoDeCasino{
    private _tiradorDeBolillasExperto:string;
    private _cantidadDePlenos:number;
    

    public constructor(apuestaMinima : number, cantJugadores:number, tiradorDeBolillasExperto:string, cantidadDePlenos:number){
        super(cantJugadores, apuestaMinima);
        this._tiradorDeBolillasExperto = tiradorDeBolillasExperto;
        this._cantidadDePlenos = cantidadDePlenos;
    }

    public getTiradorDeBolillasExperto():string{
        return this._tiradorDeBolillasExperto
    }
    public setTiradorDeBolillasExperto(tiradorDeBolillasExperto:string):void{
        this._tiradorDeBolillasExperto = tiradorDeBolillasExperto;
    }

    public getCantidadDePlenos():number{
        return this._cantidadDePlenos
    }
    public setCantidadDePlenos(cantidadDePlenos:number):void{
        this._cantidadDePlenos = cantidadDePlenos;
    }

    public changeDealer():void{
        if(this.getCantidadDePlenos() > 10){
            this.enJuego=false;
            console.log('Cambiamos el Tirador');
        }else{
            this.enJuego=true;
            console.log("La ruleta comienza a girar, armen sus apuestas...");
         }
    }
}
Ruleta.prototype.setCantidadDePlenos(25)
Ruleta.prototype.changeDealer()