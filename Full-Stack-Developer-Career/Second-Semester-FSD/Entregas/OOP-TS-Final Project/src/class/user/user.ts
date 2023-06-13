
export class User{
    private name:string;
    private age:number;
    private coins:number;
    private password:string;
    private userId:string;

    public constructor(name:string,age:number,password:string){
        this.name=name
        this.age=age
        this.coins=0
        this.password=password
        this.userId = this.generateId()
    }

    public getInfoUser():User{
        return this
    }

    public getName():string{
        return this.name
       
    }
    public getAge():number{
        return this.age
    }

    public getPasword():string{
        return this.password
    }

    public getMonedas():number{
        return this.coins
    }
    public setMonedas(coins:number):void{
        this.coins=coins
    }

    public winMonedas(coins:number):void{
        this.coins+= coins
    }
    
    public loseMonedas(coins:number):void{
        this.coins-= coins
    }

    private generateId():string{
        return Math.random().toString().substring(2, 10)
    }

    
}