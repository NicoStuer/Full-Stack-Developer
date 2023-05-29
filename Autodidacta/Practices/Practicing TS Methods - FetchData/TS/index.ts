const data: Object[] = [
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
//retorna undefined porque el console.log se ejecuta de inmediato, pero la función retornará los datos 2 segundos más tarde.

// const getData = () => {
//   console.clear();
//   setTimeout(() => {
//     return data
//   }, 0)
// }
// console.log(getData());


//para manejar un procedimiento asincrónico de manera adecuada, utilizamos promesas, una promesa devuelve un resultado cuando haya terminado su ejecución. Puede devolver resolved o rejected. Pero nunca va a retornar undefined. La promesa corre durante un ciclo que tiene etapas o estados:
//1- pending
//2- fullfilled
//3- rejected

const getData = () => {
  console.log('inicia la función async');
  const err = false
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (err) {
        reject("Error 404. Not Found... Damn it!")
      }
      resolve(data)
    }, 3000)
  })

}
getData().then((res) => {
  console.log(res);
})


