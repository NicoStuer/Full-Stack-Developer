
export class SimCard{
private carrier:string;
private number:number;

constructor(carrier:string, number:number){
    this.carrier = carrier;
    this.number =number;
}

public getCarrier():string{
    return this.carrier
}
public setCarrier(carrier:string):void{
    this.carrier = carrier
}

public getNumber():number{
    return this.number
}
public setNumber(number:number):void{
    this.number = number
}
}