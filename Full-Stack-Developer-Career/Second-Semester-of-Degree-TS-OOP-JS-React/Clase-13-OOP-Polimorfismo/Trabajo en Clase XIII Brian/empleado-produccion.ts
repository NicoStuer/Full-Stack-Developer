import { Asalariado } from "./asalariado";

export class EmpleadoProduccion extends Asalariado{
    private turno:string;

    constructor(_turno:string, _nombre:string, _dni:number, _diasVacaciones:number, _salarioBase:number) {
        super(_nombre, _dni, _diasVacaciones, _salarioBase)
        this.turno = _turno;
    }

    public getTurno():string{
        return this.turno;
    }
    public setTurno(_turno:string):void{
        this.turno = _turno;
    }

    public getSalario(): number {
        return this.getSalario() 
    }
}