import { Motor } from "./motor";
import { Cubierta } from "./cubiertas";

export class Auto{
    private _marca:string;
    private _model:number;
    private _motor:Motor;
    private _cubierta:Cubierta[];

    constructor(marca:string, model:number, motor:Motor, cubierta:Cubierta[]){
        this._marca = marca;
        this._model = model;
        this._motor = motor;
        this._cubierta = cubierta;
    }

    public setMarca(marca:string):void{
        this._marca = marca
    }
    public getMarca():string{
        return this._marca
    }

    public setModel(model:number):void{
        this._model = model 
    }
    public getModel():number{
        return this._model
    }

    public setMotor(motor:Motor):void{
        this._motor = motor
    }
    public getMotor():Motor{
        return this._motor
    }

    public setCubiertas(cubiertas:Cubierta[]):void{
        this._cubierta = cubiertas
    }
    public getCubiertas():Cubierta[]{
        return this._cubierta
    }

}
