export abstract class Auto{
    private mark:string;
    private model:string;
    private year:number;
     public constructor(mark:string, model:string, year:number){
        this.mark = mark;
        this.model = model;
        this.year = year;
     }

     public abstract acelerar():void;

     public abstract frenar():void;

    
}