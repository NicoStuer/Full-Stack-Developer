import { Games } from "./games.js";

export class Roulette {

    private minBet: number;
    private image: string;
    private name: string;

    public constructor(minBet: number, name:string) {
        
        this.name = name
        this.minBet = minBet;
        this.image = this.setImage()
    }

    public getName():string{
        return this.name
    }

    public getminBet(): number {
        return this.minBet
    }

    public setImage(): string {
        return this.image = '../../../src/img/games-img/Roulette.jpg'
    }
}