import { Telefono } from "./telefono";

export class TelefonoConRadio extends Telefono{

    private _frecuenciaActual:number;

    constructor(estaPrendido:boolean ,  bateriaActual:number, frecuenciaActual:number) {
        super(estaPrendido, bateriaActual);
        this._frecuenciaActual = frecuenciaActual;
    }

    public setFrecuenciaActual(frecuenciaActual:number):void {
        this._frecuenciaActual = frecuenciaActual;
    }

    public verFrecuenciaActual():number {
        if(this._estaPrendido){
            console.log(this._frecuenciaActual);
        return this._frecuenciaActual
        
    }else{
        console.log(this._frecuenciaActual);
        
        return 0
    }
    }
    
}