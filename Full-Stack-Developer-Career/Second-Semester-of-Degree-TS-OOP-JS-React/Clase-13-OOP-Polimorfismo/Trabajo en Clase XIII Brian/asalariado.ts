export class Asalariado {
    private nombre:string;
    private dni:number;
    private diasVacaciones:number;
    private salarioBase:number;

    constructor(_nombre:string, _dni:number, _diasVacaciones:number, _salarioBase:number){
        this.nombre = _nombre;
        this.dni = _dni;
        this.diasVacaciones = _diasVacaciones;
        this.salarioBase = _salarioBase;
    }

    public getName():string{
        return this.nombre;
    }
    public setName(_nombre:string):void{
        this.nombre = _nombre;
    }

    public getDni():number{
        return this.dni;
    }
    public setDni(_dni:number):void{
        this.dni = _dni;
    }

    public getDiasVacaciones():number{
        return this.diasVacaciones;
    }
    public setDiasVacaciones(_diasVacaciones:number):void{
        this.diasVacaciones = _diasVacaciones;
    }

    public getSalario():number{
        return this.salarioBase;
    }
    public setSalarioBase(_salarioBase:number):void{
        this.salarioBase = _salarioBase;
    }
}