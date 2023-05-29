/*
Consignas:
Abrir el archivo evaluacion7.html y guardarlo como evaluacion7_apellido.html (ej. evaluacion7_rodriguez.html)
Desarrollar un formulario validado con las siguientes características:
Al menos 3 campos.
3 de esos campos deben ser obligatorios.
Utilizar como mínimo 3 tipos de input distintos (por ejemplo: email, date, number).
Un pattern.
*/

const form = document.getElementById('form');
const nombreUsuario = document.getElementById('nombreUsuario');
const apellido = document.getElementById('apellido');
const edad = document.getElementById('edad');
const email = document.getElementById('email');
const contraseña = document.getElementById('contraseña');
const confirmContraseña = document.getElementById('confirmContraseña');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    Validate();
})

const sendData = (nombreUsuarioVal, sRate, Count) => {
    if(sRate === Count){
        swal("Hola " + nombreUsuarioVal , "Ya estas registrado!!!", "success");
    }
}

const SuccessMsg = (nombreUsuarioVal) => {
    let formContr = document.getElementsByClassName('form-control');
    var Count = formContr.length - 1;
    for(var i = 0; i < formContr.length; i++){
        if(formContr[i].className === "form-control success"){
            var sRate = 0 + i;
            console.log(sRate);
            sendData(nombreUsuarioVal, sRate, Count);
        }
        else{
            return false;
        }
    }
}

const esMayor = (edadVal) => {
	let diaActual = new Date();
	let diaNacimiento = new Date(edadVal);
	let diff = new Date(diaActual - diaNacimiento)
	let edad = Math.abs(diff.getUTCFullYear() - 1970);
	if (edad < 18) return false;
    return true;

}

const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length -1) return false;
    return true;
}

function Validate(){
    const nombreUsuarioVal = nombreUsuario.value.trim();
    const apellidoVal = apellido.value.trim();
    const edadVal = edad.value.trim();
    const emailVal = email.value.trim();
    const contraseñaVal = contraseña.value.trim();
    const confirmContraseñaVal = confirmContraseña.value.trim();

    //nombreUsuario
    if(nombreUsuarioVal === ""){
        setErrorMsg(nombreUsuario, 'El campo no puede estar vacio.');
    }
    else if(nombreUsuarioVal.length <=2){
        setErrorMsg(nombreUsuario, 'Min 3 Caracteres');
    }
    else{
        setSuccessMsg(nombreUsuario);
    }

    //apellido

    if(apellidoVal === ""){
        setErrorMsg(apellido, 'El campo no puede estar vacio.');
    }
    else if(apellidoVal.length <=2){
        setErrorMsg(apellido, 'Min 3 caracteres');
    }
    else{
        setSuccessMsg(apellido);
    }

    //edad
    if(edadVal === ""){
        setErrorMsg(edad, 'El campo no puede estar vacio.')
    }
    else if(!esMayor(edadVal)){
        setErrorMsg(edad, 'Usted es menor y no puede acceder.')
    }
    else{
        setSuccessMsg(edad);
    }

    //email
    if(emailVal === ""){
        setErrorMsg(email, 'El campo no puede estar vacio.');
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email, 'El email no es valido.');
    }
    else{
        setSuccessMsg(email);
    }

    //contraseña
    if(contraseñaVal === ""){
        setErrorMsg(contraseña, 'El campo no puede estar vacio.');
    }
    else if(contraseña.length <= 7){
        setErrorMsg(contraseña, 'Min 8 caracteres');
    }
    else{
        setSuccessMsg(contraseña);
    }

    //confirm contraseña
    if(confirmContraseñaVal === ""){
        setErrorMsg(confirmContraseña, 'El campo no puede estar vacio.');
    }
    else if(contraseñaVal != confirmContraseñaVal){
        setErrorMsg(confirmContraseña, 'No hay coinsidencia!');
    }
    else{
        setSuccessMsg(confirmContraseña);
    }
    SuccessMsg(nombreUsuarioVal);


}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
