import { SimCard } from "./simCard";
import { Battery } from "./battery";

export class celular{
 private make:string
 private model:string
 private simCard: SimCard[]
 private battery: Battery

 constructor(make:string, model: string, battery:Battery) {
    this.make = make,
    this.model = model
    this.simCard = []
    this.battery = battery
 }

 public getMake():string{
    return this.make
 }
 public setMake(make:string):void{
    this.make = make
 }

 public getModel():string{
    return this.model
 }
 public setModel(model:string):void{
    this.model = model
 }

 public getSimCard():SimCard[]{
    return this.simCard
 }
 public setSimCard(simCard:SimCard):void{
    this.simCard.push(simCard)
 }

 public getBattery():Battery{
   return this.battery
 }
 public setBattery(battery:Battery):void{
   this.battery = battery
 }
 
public getInfo():celular{
   return this
}

public removeSimCard(id:string){

}

}