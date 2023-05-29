const aplicacion = document.querySelector('.container');

const getUrl = new URLSearchParams(window.location.search);
let id = getUrl.get('id');


const API_URL = "https://jsonplaceholder.typicode.com/users";

fetch(`${API_URL}/${id}`)
.then(res => res.json())
.then(userID => {
    const name = document.createElement('p')
    const eMail = document.createElement('p')
    name.innerHTML = userID.name
    eMail.innerHTML = userID.email
    aplicacion.appendChild(name)
    aplicacion.appendChild(eMail)
})
.catch(err => console.log(err))