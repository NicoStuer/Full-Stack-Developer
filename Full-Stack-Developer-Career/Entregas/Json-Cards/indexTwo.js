import data from "./data.js";

const container = document.getElementById('users-container');

const users = JSON.parse(data)

for (let i = 0; i < users.length; i++) {
    
    const card = document.createElement('div');
    card.innerHTML = `
    <h2>${users[i].name.first} ${users[i].name.last}</h2>
    <img src=${users[i].picture.medium}>
    <p>${users[i].location.street.name} ${users[i].location.number}</p>
    `
    container.appendChild(card)
    
}