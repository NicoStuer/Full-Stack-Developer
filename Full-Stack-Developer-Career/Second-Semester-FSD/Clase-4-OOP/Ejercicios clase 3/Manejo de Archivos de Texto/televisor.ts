class Arbol {

    _talar: boolean;
    _cantidadDeAños: number;
    _tipoMadera: string;
    _paisProcedencia: string;
    _paraAmoblamiento: boolean;
    _paraLeña: boolean;

    constructor(talar:boolean, cantidadAños:number, tipoMadera:string, paisProcedencia:string, paraAmoblamiento:boolean, paraLeña:boolean) {
        this._talar = false;
        this._cantidadDeAños = 0;
        this._tipoMadera = '';
        this._paisProcedencia = '';
        this._paraAmoblamiento = false;
        this._paraLeña = false;

    }

    public tipoDeMadera(): void {
        if (this._tipoMadera == 'eucaliptus') {
            this._talar = true
        } else {
            this._talar == false
        }
    };

    public decidirUso(): void {

        if (this._tipoMadera == 'eucaliptus' && this._cantidadDeAños < 10) {
            this._paraLeña = true
        } else {
            this._paraLeña = false
        }
    };

}


//const arbol2 = new Arbol(secuoya)
//const arbol3 = new Arbol(Palmera)
