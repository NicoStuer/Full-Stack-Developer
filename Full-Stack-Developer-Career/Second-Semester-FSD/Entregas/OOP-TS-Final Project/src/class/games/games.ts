//import { uuid } from "";

export abstract class Games {
    protected gameName: string;
    protected minBet: number;
    protected image: string;

    public constructor(gameName:string, minBet:number){
        this.gameName = gameName;
        this.minBet = minBet
        this.image = this.setImage()
    }
   
    public getGameName(): string {return this.gameName}
    
    public getMinBet(): number {return this.minBet};
    
    public setImage(): string {
        if(this.gameName.toLowerCase() === 'Roulette'.toLowerCase()){
        return this.image = '../../../src/img/games-img/Roulette.jpg'
    }else if(this.gameName.toLowerCase() === 'Slots'.toLowerCase()){
        return this.image = '../../../src/img/games-img/Slots.jpg'
    }else  
    return this.image = '../../../src/img/games-img/Black-Jack.jpg'}

}
