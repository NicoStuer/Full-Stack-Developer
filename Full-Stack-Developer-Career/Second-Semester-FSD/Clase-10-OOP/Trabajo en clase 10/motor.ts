export class Motor{
    private _caballosDeFuerza:number;
    private _combustible:string;

    constructor(caballosDeFuerza:number, combustible:string){
        this._caballosDeFuerza = caballosDeFuerza;
        this._combustible = combustible;
    }

    public setCaballos(caballosDeFuerza:number):void{
        this._caballosDeFuerza = caballosDeFuerza
    }
    public getCaballos():number{
        return this._caballosDeFuerza
    }

    public setCombustible(combustible:string):void{
        this._combustible = combustible
    }
    public getCombustible():string{
        return this._combustible
    }
}