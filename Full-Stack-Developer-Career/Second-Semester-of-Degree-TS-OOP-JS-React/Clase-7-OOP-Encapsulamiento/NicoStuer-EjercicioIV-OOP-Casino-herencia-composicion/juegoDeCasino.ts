export class JuegoDeCasino {
    protected cantJugadores: number;
    protected apuestaMinima: number;
    protected enJuego: boolean;

    public constructor(cantJugadores: number, apuestaMinima: number) {
        this.cantJugadores = cantJugadores;
        this.apuestaMinima = apuestaMinima;
        this.enJuego = true;
    }

    public setCantJugadores(cant: number): void {
        this.cantJugadores = cant;
    }
    public getCantJugadores(): number {
        return this.cantJugadores;
    }
    
    public setSaldo(cant: number): void {
        this.cantJugadores = cant;
    }
    public getSaldo(): number {
        return this.cantJugadores;
    }

    public getApuestaMinima():number{
        return this.apuestaMinima
    }
    public setApuestaMinima(apuestaMinima:number):void{
        this.apuestaMinima = apuestaMinima;
    }

}