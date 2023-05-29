const backgroundColor = document.getElementById("color").style.backgroundColor = "#fcf79f";
const pTags = document.getElementsByTagName("p");
const hTags = document.getElementsByTagName("h2");



for (let i = 0; i < pTags.length; i++) {
    pTags[i].style.color = "#0ca001"
    if(pTags[i].id == "destacado"){
        pTags[i].style.fontSize = "24px"
    }
};

for (let i = 0; i < hTags.length; i++) {
    hTags[i].style.fontFamily = "Arial"
};

let pEnlace = document.createElement("a");
pEnlace.setAttribute("href", "https://www.lipsum.com")
let contenido = document.createTextNode("Enlace Externo");
pEnlace.appendChild(contenido);
document.getElementById("link").appendChild(pEnlace)

