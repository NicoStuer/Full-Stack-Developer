export class Pizza{
    protected tamaño:string;
    protected tipoDeMasa:string;
    protected ingredientes:string[] = [];

    constructor(tamaño:string, tipoDeMasa:string){
        this.tamaño = tamaño;
        this.tipoDeMasa = tipoDeMasa;
    }

    public setTamaño(tamaño:string):void{
        this.tamaño = tamaño;
    }
    public setTipoDeMasa(tipoDeMasa:string):void{
        this.tipoDeMasa = tipoDeMasa;
    }
    public agregarIngresiente(ingrediente:string):void{
        this.ingredientes.push(ingrediente)
    }
}

export class PizzaBuilder{
    protected piza:Pizza;

    constructor(tamaño:string, tipoDeMasa:string){
        this.piza = new Pizza(tamaño, tipoDeMasa)
    }

    public agregarIngrediente(ingrediente:string):Pizza{
     this.piza.agregarIngresiente(ingrediente);
     return this.piza   
    }

    public build():Pizza{
        return this.piza
    }
}