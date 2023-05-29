
import { Roulette } from "../games/roulette.js";
import { Slots } from "../games/slots.js";
import { BlackJack } from "../games/black-jack.js";
import { Casino } from "../casino/casino.js";
import { User } from "./user.js";
import { Games } from "../games/games.js";

const setCoinsButton = document.getElementById("setCoinsButton") as HTMLButtonElement;
const userInert = document.querySelectorAll("#userInert") as NodeListOf<HTMLInputElement>;
const coinsInert = document.querySelectorAll("#coinsInert") as NodeListOf<HTMLInputElement>;
const coinsBuyed = document.getElementById("coinsBuyed") as HTMLInputElement;
const bigButton = document.getElementById('big-button') as HTMLButtonElement;

const clearConsole = document.querySelectorAll('#clear-console') as NodeListOf<HTMLAnchorElement>;
const sectionOne = document.getElementById('sectionOne') as HTMLElement;

const templateCard = document.getElementById('template-card') as HTMLTemplateElement;
const cards = document.getElementById('cards') as HTMLDivElement;
const templateCardClone = templateCard.content.cloneNode(true) as HTMLTemplateElement;
const fragment = document.createDocumentFragment()

const templateSlot = document.getElementById('template-slot') as HTMLTemplateElement;
const slot = document.getElementById('slot') as HTMLDivElement;
const templateSlotClone = templateSlot.content.cloneNode(true) as HTMLTemplateElement;
const slotFragment = document.createDocumentFragment();

const templateBlackJack = document.getElementById('template-black-jack') as HTMLTemplateElement;
const blackJack = document.getElementById('black-jack-body') as HTMLDivElement;
const templateBlackJackClone = templateBlackJack.content.cloneNode(true) as HTMLTemplateElement;
const blackJackFragment = document.createDocumentFragment();




let totalCoins: number[] = []

document.addEventListener('DOMContentLoaded', () => {

    const casino = new Casino()

    const user = JSON.parse((localStorage.getItem('newUser') || '{}'));
    const newUser: User = new User(user.name, user.age, user.password)
    userInert.forEach(e => e.innerText = newUser.getName())

    casino.setUser(newUser)

    // casino.setGames(newRouletteI)
    // casino.setGames(newRouletteII)
    // casino.setGames(newRouletteIII)
    casino.setSlot(newSlotI)
    casino.setSlot(newSlotII)
    casino.setSlot(newSlotIII)
    casino.setBlackJack(newBlackJackI)
    casino.setBlackJack(newBlackJackII)
    casino.setBlackJack(newBlackJackIII)
    casino.setGames(casino.getSlots())
    const gamesArr:Games[] = [casino.getSlots()]
    //Seteo dinero jugador
    setCoinsButton.addEventListener('click', () => {
        totalCoins = [...totalCoins, Number(coinsBuyed.value)]
        //.forEach(e => e.innerText = newUser.getName())
        coinsInert.forEach(e => e.innerHTML = '');
        const totalCoinsValue = totalCoins.reduce((totalCoins, coinsBuyed) => totalCoins + coinsBuyed, Number((coinsInert[0].innerHTML)))
        coinsInert.forEach(e => e.innerHTML = totalCoinsValue.toString());
        newUser.setMonedas(totalCoinsValue)
        coinsBuyed.value = ''
    })
    bigButton.addEventListener('click', () => {

        DOM.paintGames(gamesArr)

    })
    cards.addEventListener('click', e => {
        DOM.playGame(e, casino.getSlots(), newUser)
    })

    clearConsole.forEach(sectionClear => sectionClear.addEventListener('click', () => {
        
            cards.innerHTML = '';
            slot.innerHTML = '';
       // sectionOne.innerHTML = ''
    }))
})

class DOM {
    static paintGames = (game:Games[]) => {
        game.forEach(game => {
            templateCardClone.querySelector('h5')!.textContent = game.getGameName()
            templateCardClone.querySelector('p')!.textContent = game.getMinBet().toString()
            templateCardClone.querySelector('img')!.setAttribute('src', game.setImage())
            const clone = templateCardClone.cloneNode(true)
            fragment.appendChild(clone)
        })
        cards.appendChild(fragment)
    }
    static paintBlackJack = (blackJackParam: BlackJack, user: User) => {
        const clone = templateBlackJackClone.cloneNode(true);
        blackJackFragment.appendChild(clone);
        blackJack.appendChild(blackJackFragment);

    }

    static paintSlots = (slotParam: Slots, user: User) => {
        const clone = templateSlotClone.cloneNode(true)
        slotFragment.appendChild(clone)
        slot.appendChild(slotFragment)
        const doSlotButton = document.getElementById("doSlotId") as HTMLButtonElement;
        doSlotButton.addEventListener('click', () => {

            Slots.prototype.doSlot(user)
            if (user.getMonedas() < slotParam.getMinBet()) {
                coinsInert.forEach(e => e.innerText = `Señor ${user.getName()}, debe ingresar mas dinero para continuar jugando!!!`)
            }
            let looseOne: number = (user.getMonedas() - slotParam.getMinBet())

            user.setMonedas(Number(looseOne))
            coinsInert.forEach(e => e.innerText = looseOne.toString())
        })

    }

    //Captura Botones tarjetas
    static playGame = (e: MouseEvent, slotArr: Slots[], user: User) => {
        if ((e.target as Element).classList.contains('btn-dark')) {
            DOM.setGames((e.target as Element)!.parentElement, slotArr, user)
        }
        e.stopPropagation()
    }

    static setGames = (objeto: any, slotArr: Slots[], user: User) => {
        const gameName = objeto.querySelector('h5')!.textContent;
        const gameBet = objeto.querySelector('.gameBet')!.textContent;

        if (gameName!.toLowerCase() === 'Roulette'.toLocaleLowerCase()) {
            location.href = '#sectionTwo';
            console.log('rula');
            if (gameBet === (100).toString()) {
                console.log('aposto 100 rula');
            } else if (gameBet === (200).toString()) {
                console.log('aposto 200 rula');
            } else if (gameBet === (500).toString()) {
                console.log('aposto 500 rula');
            }
        } else if (gameName.toLowerCase() === 'Slots'.toLocaleLowerCase()) {
            location.href = '#sectionTwo';
            console.log('slots');

            if (gameBet === (100).toString()) {
                console.log('aposto 100 slots');
                DOM.paintSlots(slotArr[0], user)

            } else if (gameBet === (200).toString()) {
                DOM.paintSlots(slotArr[1], user)
                console.log('aposto 200 slots');
            } else if (gameBet === (500).toString()) {
                DOM.paintSlots(slotArr[2], user)
                console.log('aposto 500 slots');
            }
        } else {
            location.href = '#sectionTwo';
            console.log('black-jack');
            if (gameBet === (100).toString()) {
                console.log('aposto 100 black-jack');
            } else if (gameBet === (200).toString()) {
                console.log('aposto 200 black-jack');
            } else if (gameBet === (500).toString()) {
                console.log('aposto 500 black-jack');
            }
        }

    }
}



// const newRouletteI: Games = new Roulette('Roulette', 100, 0o1,)
// const newRouletteII: Games = new Roulette('Roulette', 200, 0o2)
// const newRouletteIII: Games = new Roulette('Roulette', 500, 0o3)
const newSlotI: Slots = new Slots('Slots', 100)
const newSlotII: Slots = new Slots('Slots', 200)
const newSlotIII: Slots = new Slots('Slots', 500)
const newBlackJackI: BlackJack = new BlackJack('Black Jack', 100)
const newBlackJackII: BlackJack = new BlackJack( 'Black Jack', 200)
const newBlackJackIII: BlackJack = new BlackJack('Black Jack', 500)



