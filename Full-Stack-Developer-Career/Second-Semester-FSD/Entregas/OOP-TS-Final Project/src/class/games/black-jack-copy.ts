let dealerSum: number = 0;
let yourSum: number = 0;

let dealerAceCount: number = 0;
let yourAceCount: number = 0;

let hidden:any;
let deck: string[];

let canHit: boolean = true;

window.onload = function () {
    buildDeck();
    shuffleDeck();
    startGame();
}

function buildDeck() {
    let values: string[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let types: string[] = ['C', 'D', 'H', 'S'];
    deck = []

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + '-' + types[i])

        }

    }
    //console.log(deck);

}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        const j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }

    console.log(deck);
}

function startGame() {
    hidden = deck.pop();
    dealerSum += getValue(hidden)
    dealerAceCount += checkAce(hidden)

    // console.log(hidden);
    // console.log(dealerSum);
    while (dealerSum < 17) {
        let cardImg = document.createElement('img');
        let card = deck.pop();
        cardImg.src = '../img/games-img/black-jack-render/' + card + '.png';
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card)
        document.getElementById('dealer-cards')?.append(cardImg);
    }

    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement('img');
        let card = deck.pop();
        cardImg.src = '../img/games-img/black-jack-render/' + card + '.png';
        yourSum += getValue(card);
        yourAceCount += checkAce(card)
        document.getElementById('your-cards')?.append(cardImg);
    }

    document.getElementById('hit')?.addEventListener('click', hit);
    document.getElementById('stay')?.addEventListener('click', stay);

}

function hit() {
    if (!canHit) {
        return;
    }
    let cardImg = document.createElement('img');
    let card = deck.pop();
    cardImg.src = '../img/games-img/black-jack-render/' + card + '.png';
    yourSum += getValue(card);
    yourAceCount += checkAce(card)
    document.getElementById('your-cards')?.append(cardImg);

    if(reduceAce(yourSum, yourAceCount) > 21){
        canHit = false;
    }

}

function stay(){
    dealerSum = reduceAce(dealerSum, dealerAceCount);
    yourSum = reduceAce(yourSum, yourAceCount);

    canHit = false;
    (<HTMLImageElement>document.getElementById('hidden')).src = "../img/games-img/black-jack-render/" + hidden + ".png"

    let message = '';
    if(yourSum > 21){
        message = 'You Lose!';
    }else if(dealerSum > 21){
        message = 'You Win!';
    }else if(yourSum === dealerSum){
        message = 'Tie!';
    }else if(yourSum > dealerSum){
        message = 'You Win!'
    }else if(yourSum < dealerSum){
        message = 'You Lose!'
    }

    (<HTMLDivElement>document.getElementById('dealer-sum')).innerText= dealerSum.toString();

    (<HTMLDivElement>document.getElementById('your-sum')).innerText= yourSum.toString();

    (<HTMLParagraphElement>document.getElementById('results')).innerText = message

}

function getValue(card: any): number {
    let data = card.split('-');
    let value = data[0];

    if (isNaN(value)) {
        if (value === 'A') {
            return 11;
        }
        return 10;
    }
    return parseInt(value)
}

function checkAce(card: any): number {
    if (card[0] === 'A') {
        return 1;
    }
    return 0;
}

function reduceAce(playerSum:number, playerAceCount:number):number{
    while(playerSum > 21 && playerAceCount > 0){
        playerSum -= 10;
        playerAceCount -= 1;
    }
    return playerSum
}