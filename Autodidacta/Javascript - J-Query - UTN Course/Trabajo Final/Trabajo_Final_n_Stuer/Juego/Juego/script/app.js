var lenguajes_de_programacion = [
  "python",
  "javascript",
  "mongodb",
  "json",
  "java",
  "html",
  "css",
  "c",
  "csharp",
  "golang",
  "kotlin",
  "php",
  "sql",
  "ruby",
];

let respuesta = "";
let erroresPermitidos = 5;
let errores = 0;
let adivinados = [];
let condicionPalabra = null;

function palabraAleatoria() {
  respuesta =
    lenguajes_de_programacion[
      Math.round(Math.random() * lenguajes_de_programacion.length)
    ];
}

function generarBotones() {
  let botonesHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letra) =>
        `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` +
        letra +
        `'
        onClick="teclaPrecionada('` +
        letra +
        `')"
      >
        ` +
        letra +
        `
      </button>
    `
    )
    .join("");

  document.getElementById("teclado").innerHTML = botonesHTML;
}

function teclaPrecionada(seleccionLetra) {
  adivinados.indexOf(seleccionLetra) === -1
    ? adivinados.push(seleccionLetra)
    : null;
  document.getElementById(seleccionLetra).setAttribute("disabled", true);

  if (respuesta.indexOf(seleccionLetra) >= 0) {
    palabraAdivinada();
    chequearSiGano();
  } else if (respuesta.indexOf(seleccionLetra) === -1) {
    errores++;
    actualizarErrores();
    chequearSiPerdio();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById("imagenAhorcado").src =
    "./imagenes/" + errores + ".png";
}

function chequearSiGano() {
  if (condicionPalabra === respuesta) {
    document.getElementById("teclado").innerHTML = "Ganaste!!!";
  }
}

function chequearSiPerdio() {
  if (errores === erroresPermitidos) {
    document.getElementById("palabraDestacada").innerHTML =
      "La respuesta correcta es: " + respuesta;
    document.getElementById("teclado").innerHTML = "Perdiste!!!";
  }
}

function palabraAdivinada() {
  condicionPalabra = respuesta
    .split("")
    .map((letra) => (adivinados.indexOf(letra) >= 0 ? letra : " _ "))
    .join("");

  document.getElementById("palabraDestacada").innerHTML = condicionPalabra;
}

function actualizarErrores() {
  document.getElementById("errores").innerHTML = errores;
}

function reset() {
  errores = 0;
  adivinados = [];
  document.getElementById("imagenAhorcado").src = "./imagenes/0.png";

  palabraAleatoria();
  palabraAdivinada();
  actualizarErrores();
  generarBotones();
}

document.getElementById("erroresPermitidos").innerHTML = erroresPermitidos;

palabraAleatoria();
generarBotones();
palabraAdivinada();
