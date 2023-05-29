let cantidadDeIngredientes = Number(prompt("Ingrese cantidad de ingredientes:"));
let ingredientes = [];
let titulo = document.getElementById("titulo");

while(isNaN(cantidadDeIngredientes)){
    alert("Ingrese un numero")
    cantidadDeIngredientes = Number(prompt("Ingrese cantidad de ingredientes:"));
}

titulo.innerText = `Su preparacion contiene ${cantidadDeIngredientes} ingredientes:`;
for (let i = 0; i < cantidadDeIngredientes; i++) {
    if(i == 0){
        document.write(`<ol>`);
    }else if(i == cantidadDeIngredientes){
        document.write(`</ol`);
    }
    ingredientes[i]=prompt(`Ingrese ${i + 1} ingrediente de ${cantidadDeIngredientes}.`);
    console.log(ingredientes[i]);
    document.write(`<li>${ingredientes[i]}</li>`)
}