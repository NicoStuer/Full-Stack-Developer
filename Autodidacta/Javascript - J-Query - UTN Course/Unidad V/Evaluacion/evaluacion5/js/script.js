/*
Consignas:
Abrir el archivo evaluacion5.html y guardarlo como evaluacion5_apellido.html (ej. evaluacion5_rodriguez.html)
Partiendo del siguiente array: 
var letras = ['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];
Elaborar un pequeño script que: 
Le pida al usuario que ingrese un número entre 0 y 25, y una letra, y las almacene cada dato en una variable. 
(Pista: prompt() ) 
En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor que 25.
Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y
 el programa no muestra más mensajes.
Si el número es válido, se calcula la letra que le corresponde en el array.
Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden,
 se muestra un mensaje al usuario diciéndole que la letra que “Ha perdido”. En otro caso, se muestra un 
 mensaje indicando que el número y la letra coinciden y que “Ha ganado”.
*/

var letras = ['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];

function jugar(){
    
    let inputNum = parseInt(formulario.numero.value);
    let inputCase = formulario.letra.value.toUpperCase();
    
if(inputNum < 0  || inputNum > 25){
    formulario.result.value = "El número proporcionado no es válido";
    formulario.result.style.backgroundColor = "red";
    }else if(inputCase === letras[inputNum]){
    formulario.result.value = "Usted ha ganado"
    formulario.result.style.backgroundColor = "green";
        }else{
        formulario.result.value = "Ha Perdido";
        formulario.result.style.backgroundColor = "brown";
    }
}

