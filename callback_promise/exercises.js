// const getPlanet = () => {
//   const mars = {
//     name: "Mars",
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: "kilometers",
//     },
//   };
//   console.log("Returned planet: ", mars);
// };

// setTimeout(getPlanet, 4000) ; // imprime Marte depois de 4 segundos





// sendMarsTemperature(temperatureInFahrenheit(getMarsTemperature())); // imprime "It is currently 47ºF at Mars", por exemplo


// sendMarsTemperature(greet(getMarsTemperature())); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo














// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo


// function sendMarsTemperature() {
//   console.log(`Mars temperature is: ${getMarsTemperature()} degree celsius`);
// }; // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// sendMarsTemperature()



















// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
// const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
// const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// // definição da função sendMarsTemperature...
// function sendMarsTemperature(action) {
//   // setTimeout((action)=>{ return action }, messageDelay())
//   return action;
// }


// setTimeout(()=> {
//   sendMarsTemperature(temperatureInFahrenheit(getMarsTemperature()));
//   sendMarsTemperature(greet(getMarsTemperature()));
//  }, messageDelay())

// // sendMarsTemperature(temperatureInFahrenheit(getMarsTemperature())); // imprime "It is currently 47ºF at Mars", por exemplo
// // sendMarsTemperature(greet(getMarsTemperature())); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

























// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random() * 11);

//   if (number <= 5) {
//     return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
//   }
//   resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
// });
































// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random()* 11);

//   if (number <= 5) {
//     return reject(number);
//   }
//   resolve(number);
// })
// .then(number => `Que sucesso =) nosso número foi ${number}`)
// .then(msg => console.log(msg))
// .catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));

































// const fetch = require('node-fetch');

// function verifiedFetch(url) {
//   return new Promise((resolve, reject) => {
//     if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
//       fetch(url)
//         .then((r) => r.json())
//         .then((r) => resolve(r.value));
//     } else {
//       reject(new Error('endpoint não existe'));
//     }
//   });
// }

// function sendJokeToFriend(name) {
//   const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
//     .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
//     .then((msg) => console.log(msg))
//     .catch((err) => err);
//     console.log(message);
//   }

// sendJokeToFriend("Anna");




// const fetch = require('node-fetch');

// async function verifiedFetch(url) {
//   if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
//     return fetch(url)
//       .then((r) => r.json())
//       .then((r) => (r.value));
//   }
//   throw new Error('endpoint não existe');
// }

// async function sendJokeToFriend(name) {
//   const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
//     .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
//     .catch((err) => err);
//   console.log(message);
// }

// sendJokeToFriend("Anna");



