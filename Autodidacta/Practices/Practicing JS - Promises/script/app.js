//Promises

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject({ data: "Datos!" });
//     //reject('404 not found');
//   }, 3000);
// });

// promesa
//   .then((datos) => {
//     console.log("Datos:", datos);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   })
//   .finally(() => {
//     console.log("Fin");
//   });

//async await

// async function resolverPromesa() {
//     try{
//     const datos = await promesa;
//     console.log('Datos:', datos);
// }catch(error){
//     console.log("Error:", error);
// }
//   promesa
//     .then((datos) => {
//       console.log("Datos:", datos);
//     })
//     .catch((error) => {
//       console.log("Error:", error);
//     })
//     .finally(() => {
//       console.log("Fin");
//     });
//}
// console.log('Inicio del programa');
// resolverPromesa();
// console.log('Fin del programa');

// const datos = [{
//   id: 1,
//   title: 'Iron Man',
//   year: 2008
// },{
//   id: 2,
//   title: 'Spiderman: Homecoming',
//   year: 2017
// },{
//   id: 3,
//   title: 'Avengers: Endgame',
//   year: 2019
// }];

// const getDatos = () => {
//   return datos;
// }

// const getDatos = () => {
//   return new Promise((resolve, reject) => {

//     if(datos.length === 0){
//       reject(new Error('No existen datos'));
//     }
//     setTimeout(() => {
//       resolve(datos);
//     }, 1500);
//   })
// }

// // getDatos()
// //   .then((datos) => console.log(datos));

// async function fetchingData () {
//   try {
//     const dataFetched = await getDatos();
//     console.log(dataFetched);

//   }catch(err){
//     console.log(err.message);
//   }
// }

// fetchingData();

