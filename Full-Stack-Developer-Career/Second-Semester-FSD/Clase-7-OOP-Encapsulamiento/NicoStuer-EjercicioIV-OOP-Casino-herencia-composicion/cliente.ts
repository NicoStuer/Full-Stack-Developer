export class Cliente{
   private _compraDeFichas:number
   private _fichasAcumuladas:number
   private _cantidadDeVisitas:number

   public constructor(compraDeFichas:number, fichasAcumuladas:number, cantidadDeVisitas:number){
    this._compraDeFichas = compraDeFichas;
    this._fichasAcumuladas = fichasAcumuladas;
    this._cantidadDeVisitas = cantidadDeVisitas;
   }

   public getCompraDeFichas():number{
    return this._compraDeFichas
   }
   public setCompraDeFichas(compraDeFichas:number):void{
    this._compraDeFichas = compraDeFichas
   }

   public getFichasAcumuladas():number{
    return this._fichasAcumuladas
   }
   public setFichasAcumuladas(fichasAcumuladas:number):void{
    this._fichasAcumuladas = fichasAcumuladas + this.getCompraDeFichas()
   }

   public getCantidadDeVisitas():number{
    return this._cantidadDeVisitas
   }
   public setCantidadDeVisitas(cantidadDeVisitas:number):void{
    this._cantidadDeVisitas = cantidadDeVisitas + 1
   }
}

