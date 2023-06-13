const container = document.getElementById("container");

const urlGamesOfThrones = "https://thronesapi.com/api/v2/Characters";
const urlGamesOfThronesSentences =
  " https://api.gameofthronesquotes.xyz/v1/characters";

//Se define una función asincrónica llamada hacerRequest que toma dos URLs y una función de renderizado como argumentos. La función realiza solicitudes a las dos URLs utilizando fetch y luego convierte las respuestas en objetos JSON utilizando el método json(). Finalmente, invoca la función de renderizado pasando los objetos JSON como argumentos.
async function hacerRequest(urlOne, urlTwo, renderFunction) {
  try {
    let response = await fetch(urlOne);
    let responseTwo = await fetch(urlTwo);
    let dataOne = await response.json();
    let dataTwo = await responseTwo.json();

    renderFunction(dataOne, dataTwo);
  } catch (error) {
    console.log(error);
  }
}


//La función renderCards recibe dos objetos como argumentos y se encarga de renderizar tarjetas HTML utilizando los datos del primer objeto (objOne). Luego, agrega un evento de clic al contenedor container para llamar a la función targetViewAphorism cuando se hace clic en un elemento.
const renderCards = (objOne, objTwo) => {
  container.innerHTML = "";
  objOne.forEach((character) => {
    container.innerHTML += `
          <div class="card m-1 p-1 bg-danger" id="cards" style="width:18rem">
          <img class="card-img" src="${character.imageUrl}" id="img" alt="Card image cap">
          <div class="card-body text-center">
            <p class="card-text text-uppercase fw-bold" id="fullName">${character.fullName}</p>
            <p class="card-text text-uppercase fw-bold" id="character-title">${character.title}</p>
            <p class="card-text" id="family">${character.family}</p>
            <button class="btn btn-dark">Aphorisms</button>
          </div>
        </div>`;
  });
  container.addEventListener("click", (e) => {
    targetViewAphorism(e, objTwo);
  });
};

//Se invoca la función hacerRequest pasando las URLs y la función de renderizado renderCards.
hacerRequest(urlGamesOfThrones, urlGamesOfThronesSentences, renderCards);

//La función targetViewAphorism se encarga de verificar si el elemento del evento de clic es un botón y, en ese caso, llama a la función viewAphorism pasando el elemento y el objeto objectTwo.
const targetViewAphorism = (e, objectTwo) => {
  if (e.target.classList.contains("btn-dark")) {
    viewAphorism(e.target.parentElement.firstElementChild, objectTwo); //
  }
  e.stopPropagation();
};

//La función renderCalls se encarga de renderizar mensajes utilizando los datos proporcionados en callsArr y object.
const renderCalls = (callsArr, object) => {
  container.innerHTML = "";
  container.innerHTML += `<h1 class="text-white text-center">${object.innerText}</h1>`;
  callsArr.forEach((call) => {
    container.innerHTML += `
        <p class="text-white text-center">${call}</p>
   `;
  });
  container.innerHTML += `<button id="backToCards">Back</button>`;
  const backToCards = document.getElementById("backToCards");
  backToCards.addEventListener("click", () =>
    hacerRequest(urlGamesOfThrones, urlGamesOfThronesSentences, renderCards)
  );
};

//La función viewAphorism busca un personaje en el objeto objectTwo y renderiza sus mensajes.
const viewAphorism = (object, objectTwo) => {
  let characterMsg = ["I have nothing to say"];
  const name = objectTwo.find(
    (character) =>
      character.name.toLowerCase() == object.innerText.toLowerCase()
  );
  if (name == undefined) {
    renderCalls(characterMsg, object);
  } else {
    renderCalls(name.quotes, object);
  }
};
