//CRUD
//Traer todos los datos(get), Borrar datos(delete), Editar datos (put/patch), Crear (post)
import renderData from "./Funciones/RenderData.js";


const container = document.getElementById("container");

async function hacerRequest() {
  try {
    const url = "https://6476838d9233e82dd53a12de.mockapi.io/users";

    const response = await fetch(url);
    const data = await response.json();
    data.forEach((user) => {
      renderData(user, data);
    });
  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  hacerRequest();

  
});



