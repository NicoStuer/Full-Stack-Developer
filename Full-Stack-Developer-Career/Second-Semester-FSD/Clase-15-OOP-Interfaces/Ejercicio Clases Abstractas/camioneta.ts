import { Auto } from "./auto";

export class Camioneta extends Auto{
    private todoterreno:boolean;
    constructor(todoterreno:boolean){
        super('Doge', 'Ram', 2015)
        this.todoterreno = todoterreno
    }

    public acelerar(): void {
        
    }

    public frenar(): void {
        
    }
}