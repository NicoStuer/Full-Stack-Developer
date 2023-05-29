// Implementar las clases y métodos que se muestran
// Agregar variables/métodos adicionales
// Implementar cada clase en un archivo diferente
// Ojo con la forma de hacer los import
// Subir las cosas a GitHub y avisar por Slack


export class Telefono{
    protected _estaPrendido:boolean;
    protected _bateriaActual:number;
    
    constructor(estaPrendido:boolean, bateriaActual:number){
        this._estaPrendido = estaPrendido;
        this._bateriaActual = bateriaActual;
    }

    public getEstaPrendido():boolean{
        return this._estaPrendido
    }
    public setEstaPrendido(estaPrendido:boolean):void{
        this._estaPrendido = estaPrendido
    }

    public mandarMensaje():void{
        if(this._estaPrendido)
        console.log('Enviando mensaje');
        
    }
    
    public hacerLlamada():void{
        if(this._estaPrendido)
        console.log('Haciendo llamada');
        
    }

    public prenderApagar():void{
        this._estaPrendido = !this._estaPrendido 
    }
}