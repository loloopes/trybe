// // apiScript.js     
// const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {
//   const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };

//   fetch(API_URL, myObject)
//     .then(response => response.json())
//     .then(data => console.log(data));
// };

// window.onload = () => fetchJoke();



const promiseTest = () => new Promise((resolve, reject) => {

  let array = [];
  
  for (let i = 1; i <= 50; i++) {
    array.push(Math.pow(Math.random()*50,1.5))
  }

  let sum = array.reduce((acc, cV) => acc + cV, 0);

  if (sum < 8000) {
    return resolve(sum);
  } 
    reject(sum);
  
})

promiseTest()
  .then((sum) => console.log(`${sum} e < 8000`))
  .catch((sum) => console.log(`${sum} e > 8000`))

