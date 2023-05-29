import { JuegoDeCasino } from "./juegoDeCasino";

export class Poker extends JuegoDeCasino{
    private _dealer:string;
    private _manosGanadas:number;

    public constructor(apuestaMinima : number, cantJugadores:number, dealer:string, manosGanadas:number){
        super(cantJugadores, apuestaMinima);
        this._dealer = dealer;
        this._manosGanadas = manosGanadas;
    }

    public getDealer():string{
        return this._dealer
    }
    public setDealer(dealer:string):void{
        this._dealer = dealer;
    }

    public getManosGanadas():number{
        return this._manosGanadas
    }
    public setManosGanadas(manosGanadas:number):void{
        this._manosGanadas = manosGanadas;
    }

    public dealerReward():number{
        if(this._manosGanadas > 25)
        console.log(`El dealer obtuvo un premio de $${this.apuestaMinima*4}.-`);
        return this.apuestaMinima*4
    }
}
