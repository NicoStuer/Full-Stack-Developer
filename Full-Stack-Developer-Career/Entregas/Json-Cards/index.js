import data from "./data.js";

const dataRequest = JSON.parse(data);

const templateCard = document.getElementById('card-javascript').content;
const cards = document.getElementById('cards');
const templateCardClone = templateCard.cloneNode(true) 
const fragment = document.createDocumentFragment()


const paintUsers = (data) => {
    data.forEach(user => {
        if(templateCardClone){
        templateCardClone.querySelector('#img').setAttribute('src', user.picture.thumbnail)
        templateCardClone.querySelector('#name').textContent = user.name.first
        templateCardClone.querySelector('#last-name').textContent = user.name.last
        templateCardClone.querySelector('#address').textContent = user.location.street.name + ' ' + user.location.street.number

        const clone = templateCardClone.cloneNode(true)
        fragment.appendChild(clone)
    }
    })
    cards.appendChild(fragment)
}


paintUsers(dataRequest)


