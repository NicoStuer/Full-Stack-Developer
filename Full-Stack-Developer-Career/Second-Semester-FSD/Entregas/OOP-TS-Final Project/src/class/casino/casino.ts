import { User } from "../user/user.js";
import { iCasino } from "../casino/icasino.js";
import { Roulette } from "../games/roulette.js";
import { Slots } from "../games/slots.js";
import { BlackJack } from "../games/black-jack.js";
import { Games } from "../games/games.js";

export class Casino implements iCasino {
    private user:User[];
    private roulette:Roulette[]
    private slot:Slots[]
    private blackJack:BlackJack[]
    private gamesArr: Games[]
     accountBalance :number;
     name:string;
     address:string;

    public constructor(){
        this.name = 'Casino Las Flores';
        this.address = 'Laguna del Difunto Manuel';
        this.accountBalance  = 1000000;
        this.user = [];
        this.roulette = [];
        this.slot = [];
        this.blackJack = [];
        this.gamesArr = []

    }

    public getInfoCasino():Casino{
        return this
    }

    public getname():string{
        return this.name
    }
    public getDireccion():string{
        return this.address
    }
    
    public setUser(user:User){
        this.user.push(user)
    }
    public getUsers():User[]{
        return this.user
    }
    
    public setGames(game:Games){
        this.gamesArr.push(game)
    }
    public setRoulette(roulette:Roulette):void{
        this.roulette.push(roulette)
    }

    public setSlot(slot:Slots):void{
        this.slot.push(slot)
    }

    public getSlots():Slots[]{
        return this.slot
    }

    public setBlackJack(blackJack:BlackJack):void{
        this.blackJack.push(blackJack)
    }

    public getBlackJack():BlackJack[]{
        return this.blackJack
    }

    public getFondoC():number{
        return this.accountBalance 
    }
    public setFondoC(accountBalance :number){
        this.accountBalance =accountBalance 
    }

}