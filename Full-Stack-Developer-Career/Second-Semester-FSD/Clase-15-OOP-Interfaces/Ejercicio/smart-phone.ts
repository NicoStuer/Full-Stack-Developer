import { Telefono } from "./telefono";

export class SmartPhone implements Telefono{
    private estaPrendido:boolean;
    constructor(estaPrendido:boolean){
        this.estaPrendido = estaPrendido;
    }

    public prender(): void {
        
    }
    public apagar(): void {
        
    }
    public llamar(numero:string):void {
        
    }
}