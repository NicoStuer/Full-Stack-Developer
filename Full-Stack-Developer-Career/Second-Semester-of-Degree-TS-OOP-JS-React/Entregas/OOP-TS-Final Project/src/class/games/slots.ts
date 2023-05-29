import { User } from "../user/user.js"
import { Games } from "./games.js"

export class Slots extends Games {



    private doing: boolean = false

    public constructor(gameName: string, minBet: number) {
        super(gameName, minBet)
        this.doing = false


    }



    public setDoing(doing: boolean): void {
        this.doing = doing
    }




    //  src\ class\games\games.ts
    //  img\games-img\Black-Jack.jpg



    public doSlot(user: User) {
        let slotTile = document.getElementById("slot3")! as HTMLDivElement;
        let status = document.getElementById("status")! as HTMLDivElement;
        if (this.doing) { return null; }
        this.doing = true;
        let numChanges: number = randomInt(1, 4) * 7
        let numeberSlot1: number = numChanges + randomInt(1, 7)
        let numeberSlot2: number = numChanges + 2 * 7 + randomInt(1, 7)
        let numeberSlot3: number = numChanges + 4 * 7 + randomInt(1, 7)

        let i1: number = 0;
        let i2: number = 0;
        let i3: number = 0;

        status.innerHTML = "SPINNING";

        let slot1 = setInterval(spin1, 50);
        let slot2 = setInterval(spin2, 50);
        let slot3 = setInterval(spin3, 50);
        function spin1() {
            i1++;
            if (i1 >= numeberSlot1) {
                clearInterval(slot1);
                return null;
            }
            let slotTile = document.getElementById("slot1")! as HTMLDivElement;
            if (slotTile.className == "a7") {
                slotTile.className = "a0";
            }
            slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1)
        }
        function spin2() {
            i2++;
            if (i2 >= numeberSlot2) {
                clearInterval(slot2);
                return null;
            }
            slotTile = document.getElementById("slot2")! as HTMLDivElement;
            if (slotTile.className == "a7") {
                slotTile.className = "a0";
            }
            slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1)
        }
        function spin3(minBet: Slots) {
            i3++;
            if (i3 >= numeberSlot3) {
                clearInterval(slot3);
                testWin(user);
                return null;
            }
            slotTile = document.getElementById("slot3")! as HTMLDivElement;
            if (slotTile.className == "a7") {
                slotTile.className = "a0";
            }

            slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1)
        }

        const testWin = (user: User) => {
            let status = document.getElementById("status") as HTMLDivElement;
            let slot1 = document.getElementById("slot1")!.className;
            let slot2 = document.getElementById("slot2")!.className;
            let slot3 = document.getElementById("slot3")!.className;

            if (slot1 == slot2 && slot2 == slot3) {
                user.setMonedas(user.getMonedas() + (this.getMinBet() * 4))
                console.log(user.getMonedas());

            } else if ((
                (slot1 == slot2 && slot3 == "a7") ||
                (slot1 == slot3 && slot2 == "a7") ||
                (slot2 == slot3 && slot1 == "a7") ||
                (slot1 == slot2 && slot1 == "a7") ||
                (slot1 == slot3 && slot1 == "a7") ||
                (slot2 == slot3 && slot2 == "a7")) && !(slot1 == slot2 && slot2 == slot3 && slot1 == "a7")) {
                console.log('ganaste algo');
                user.setMonedas(user.getMonedas() + (this.getMinBet() * 2))
                console.log(user.getMonedas());
                status.innerHTML = "YOU WIN!";
            } else {
                status.innerText = "YOU LOSE!";
                user.setMonedas((user.getMonedas() - this.getMinBet()))

            }
            this.doing = false;
        }

        function randomInt(min: number, max: number): number {
            return Math.floor((Math.random() * (max - min + 1)) + min);
        }
    }



}


