class Arbol {
//constructor('eucalipto'){}
    talar: boolean = false;
    cantidadDeAños: number = 0;
    tipoMadera: string = '';
    paisProcedencia: string = '';
    paraAmoblamiento: boolean = false;
    paraLeña: boolean = false;

    public tipoDeMadera(): void {
        if (this.tipoMadera == 'eucaliptus') {
            this.talar = true
        } else {
            this.talar == false
        }
    };

    public decidirUso(): void {

        if (this.tipoMadera == 'eucaliptus' && this.cantidadDeAños < 10) {
            this.paraLeña = true
        } else {
            this.paraLeña = false
        }
    };

}
//constructor(secuoya)

//const arbol2 = new Arbol(secuoya)
//const arbol3 = new Arbol(Palmera)
