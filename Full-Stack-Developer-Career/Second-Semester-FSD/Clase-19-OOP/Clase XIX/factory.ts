import { log } from "console";

export interface Figura {
    dibujar(): void;
}

export class FiguraFactory {

    public crearFigura(tipoDeFigura: string): any {
        if (tipoDeFigura === 'circulo') {
            return new Circulo
        } else if (tipoDeFigura === 'triangulo') {
            return new Triangulo
        } else {
            console.log();

        }
    }
}

export class Circulo implements Figura {

    public dibujar(): void {
        console.log('Soy un Circulo');

    }
}

export class Triangulo implements Figura {

    public dibujar(): void {
        console.log('Soy un Triangulo');

    }
}

const figuraFactory: FiguraFactory = new FiguraFactory();

let miNuevoCirculo = figuraFactory.crearFigura('circulo');
miNuevoCirculo.dibujar();