import { Auto } from "./auto";

export class AutoCDeportivo extends Auto{
    private torke:number;
    constructor(torke:number){
        super('Ferrary', 'F50', 2020)
        this.torke = torke
    }

    public acelerar(): void {
        
    }

    public frenar(): void {
        
    }
}