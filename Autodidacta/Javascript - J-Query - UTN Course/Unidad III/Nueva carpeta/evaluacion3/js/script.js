


let inputOne = document.getElementById("inputOne");
let inputTwo = document.getElementById("inputTwo");
let btnSumar = document.getElementById("sumar");
let btnRestar = document.getElementById("restar");
let btnMultiplicar = document.getElementById("multiplicar");
let btnDividir = document.getElementById("dividir");
let signo = document.getElementById("signo");
let resultado = document.getElementById("resultado");

btnSumar.addEventListener("click", () => {
    let result = parseInt(inputOne.value) + parseInt(inputTwo.value)
    signo.innerText = "+";
    resultado.innerHTML = result; 
});

btnRestar.addEventListener("click", () => {
    let result = parseInt(inputOne.value) - parseInt(inputTwo.value)
    signo.innerText = "-";
    resultado.innerHTML = result; 
});

btnMultiplicar.addEventListener("click", () => {
    let result = parseInt(inputOne.value) * parseInt(inputTwo.value)
    signo.innerText = "x";
    resultado.innerHTML = result; 
});

btnDividir.addEventListener("click", () => {
    let result = parseInt(inputOne.value) / parseInt(inputTwo.value)
    signo.innerText = "/";
    resultado.innerHTML = result; 
});



const listado = ["Star Wars", "Corazon Valiente", "Arma Mortal", "Matrix", "Gladiador" ];
for (let i = 0; i < listado.length; i++) {
    document.write(listado.sort()[i] + "<br>");
}
        

        
        
        