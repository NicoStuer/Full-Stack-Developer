const data = [
  {
    id: 1,
    name: "Gary Goodspeed",
    status: "Alive",
    img_url:
      "https://finalspaceapi.com/api/character/avatar/gary_goodspeed.png",
  },
  {
    id: 2,
    name: "Mooncake",
    status: "Unknown",
    img_url: "https://finalspaceapi.com/api/character/avatar/mooncake.jpg",
  },
  {
    id: 3,
    name: "Quinn Ergon",
    status: "Alive",
    img_url: "https://finalspaceapi.com/api/character/avatar/quinn_ergon.jpg",
  },
  {
    id: 4,
    name: "Little Cato",
    status: "Alive",
    img_url: "https://finalspaceapi.com/api/character/avatar/little_cato.jpg",
  },
];

//proceso sincrónico:
//1- traigo la data
//2- muestro la data
//todos felices

// const getData = () => {
//   console.clear();
//   return data
// }
// console.log(getData());

//mundo real, procedimiento asincrónico simulado
//retorna undefined porque el console.log se ejecuta de inmediato,
//pero la función retornará los datos 2 segundos más tarde.

// const getData = () => {
//   console.clear();
//   setTimeout(() => {
//     return data
//   }, 0)
// }
// console.log(getData());

//para manejar un procedimiento asincrónico de manera adecuada,
//utilizamos promesas, una promesa devuelve un resultado cuando
//haya terminado su ejecución. Puede devolver resolved o rejected.
//Pero nunca va a retornar undefined. La promesa corre durante
//un ciclo que tiene etapas o estados:
//1- pending
//2- fullfilled
//3- rejected

const ul = document.querySelector("#list");

const getData = () => {
  console.log("Inicia la funcion async");
  const err = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (err) {
        reject("Error 404, not foun, ...");
      }
      resolve(data);
    }, 3000);
  });
};

getData()
  .then((res) => {
    console.log(res);
    buildList(res);
  })
  .catch((err) => console.log(err));

const buildList = (data) => {
  data.forEach((element) => {
    const li = document.createElement("li");
    li.innerText = element.name;
    ul.appendChild(li);
  });
};

//Metodo setInterval: permite ejecutar el codigo interno,
//cada n milisegundos

let timer = 0;
const clock = setInterval(() => {
  while (timer < 5) {
    console.count(++timer);
  }
  clearInterval(clock);
}, 1000);

//Metodo setTimeout: permite ejecutar el codigo interno despues de n segundos.

setTimeout(() => {
  console.log("Kept you waiting, hu?");
}, 2000);

const activate = document.getElementById("activation");
const timeToRun = document.getElementById("timeToRun");

activate.addEventListener("click", () => {
  timerInicio = 5;
  let timerInicioSet = setInterval(() => {
    document.getElementById(
      "kbom"
    ).innerHTML = `<p>La cuenta regrsiva comenzara en ${timerInicio} segundos... </p>`;
    timerInicio--;
    if (timerInicio === 0) {
      clearInterval(timerInicioSet);
    }
  }, 1000);
  setTimeout(() => {
    let timer = timeToRun.value;
    const countDown = setInterval(() => {
      timer--;
      document.getElementById("kbom").innerHTML = `<p>${timer}</p>`;

      if (timer < 0) {
        document.getElementById("kbom").innerHTML = `<p>BOOM!!!</p>`;
        clearInterval(countDown);
      }
    }, 1000);
  }, 5000);
});

// async function hacerRequest() {
//   try {
//     var url = 'URL_DE_LA_API'; // Reemplaza con la URL de la API que deseas consultar

//     var response = await fetch(url);
//     var data = await response.json();

//     // Aquí puedes manipular la respuesta de la API
//     console.log(data);
//   } catch (error) {
//     // Manejo de errores
//     console.log(error);
//   }
// }

// hacerRequest();
// En el ejemplo anterior, la función hacerRequest() se declara como async para permitir el uso de await. Dentro de la función, se hace la solicitud a la API utilizando fetch() y se espera a que la respuesta se resuelva con await. Luego, se convierte la respuesta en formato JSON y se asigna a la variable data. Finalmente, puedes manipular y trabajar con los datos de la API según tus necesidades.

// Recuerda reemplazar 'URL_DE_LA_API' con la URL real de la API a la que deseas hacer la solicitud. Ten en cuenta que este ejemplo utiliza la sintaxis async/await, que está disponible a partir de ECMAScript 2017.

const API_URL = "https://jsonplaceholder.typicode.com";

const HTMLResponse = document.querySelector("#app");
const tpl = document.createElement("ul");

//fetch nos proporciona el metodo json() q parchea la informacion de la api
fetch(`${API_URL}/users`)
  .then((response) => response.json())
  .then((user) => {
    // const tpl = user.map(user => `<li>${user.name} ✉ ${user.email} </li>`)
    // HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    user.forEach((user) => {
      let elem = document.createElement("li");
      elem.appendChild(document.createTextNode(`${user.name} ✉ ${user.email}`));
      tpl.appendChild(elem);
    });

    HTMLResponse.appendChild(tpl);
  });
// const xhr = new XMLHttpRequest();

// function onRequestHandler() {
//   if (this.readyState === 4 && this.status === 200) {
//     // 0 = UNSET, no se ha llamado al metodo OPEN.
//     // 1 = OPENED, se ha llamado al metodo OPEN.
//     // 2 = HEADERS_RECEIVED, se esta llamando al metodo send().
//     // 3 = LOADING, esta cargando, es decir, esta recibiendo la respuesta.
//     // 4 = DONE, se ha completado la operacion.
//     const data = JSON.parse(this.response);
//     console.log(data);
//     const HTMLResponse = document.querySelector('#app');

//     const tpl = data.map(user => `<li>${user.name} ✉ ${user.email} </li>`);
//     HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
//   }
// }

// xhr.addEventListener("load", onRequestHandler);
// xhr.open("GET", `${API_URL}/users`);
// xhr.send();

const datos = [
  {
    id: 1,
    title: "Iron Man",
    year: 2008,
  },
  {
    id: 2,
    title: "Spiderman: Homecoming",
    year: 2017,
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    year: 2019,
  },
];

//const datos = []

//  const getDatos = () => {
//   return datos
//  }

const getDatos = () => {
  return new Promise((resolve, reject) => {
    if(datos.length === 0){
      reject(new Error('No existen datos'))
    }
    setTimeout(() => {
      resolve(datos);
    }, 1500);
  });
};

// getDatos().then((datos) => console.log(datos))
async function fetchingDatos() {
  try {
    const datosFetched = await getDatos();
    console.log(datosFetched);
  } catch (error) {
    console.log(error.message);
  }
}

fetchingDatos();


fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(res => res.json())
.then(response => {
  console.log(response);
})


const aplicacion = document.querySelector(".container");


//fetch nos proporciona el metodo json() q parchea la informacion de la api
fetch(`${API_URL}/users`)
  .then((res) => res.json())
  .then(data => {
    data.forEach(usuario => {
      console.log(usuario.name);
      const p = document.createElement('p')
      p.setAttribute('id', usuario.id)
      p.addEventListener('click', function(){
        window.location.href = `./usuario.html?id=${usuario.id}`
      })
      p.innerHTML = usuario.name
      aplicacion.appendChild(p)
    })
    //console.log(data)
  })
  .catch(err => console.log(err))
  // .then((user) => {
  //   // const tpl = user.map(user => `<li>${user.name} ✉ ${user.email} </li>`)
  //   // HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
  //   user.forEach((user) => {
  //     let elem = document.createElement("li");
  //     elem.appendChild(document.createTextNode(`${user.name} ✉ ${user.email}`));
  //     tpl.appendChild(elem);
  //   });

  //   HTMLResponse.appendChild(tpl);
  // });