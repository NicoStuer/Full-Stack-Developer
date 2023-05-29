import { Asalariado } from "./asalariado";

export class EmpleadoDistribucion extends Asalariado{
    private zona:string;

    constructor(_zona:string, _nombre:string, _dni:number, _diasVacaciones:number, _salarioBase:number){
        super(_nombre, _dni, _diasVacaciones, _salarioBase)
        this.zona = _zona;
    }

    public getZona():string{
        return this.zona
    }
    public setZona(_zona:string):void{
        this.zona = _zona
    }

    public getSalario():number{
        console.log(this.getSalario()*2);
        
        return this.getSalario() 
    }
}

