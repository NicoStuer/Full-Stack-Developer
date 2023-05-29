import { Auto } from "./auto";

export class AutoCiudad extends Auto{
    private color:string;
    constructor(color:string){
        super('Ford', 'Ka', 2010)
    }

    public acelerar(): void {
        
    }

    public frenar(): void {
        
    }
}