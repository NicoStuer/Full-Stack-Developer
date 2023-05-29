export class Cubierta {

    public _rodado:number;
    public _marca:string;

    constructor(rodado:number, marca:string){
        this._rodado = rodado;
        this._marca = marca
    }

    public setRodado(rodado:number):void{
        this._rodado = rodado
    }
    public getRodado():number{
        return this._rodado
    }

    public setMarca(marca:string):void{
        this._marca = marca
    }
    public getMarca():string{
        return this._marca
    }
}
