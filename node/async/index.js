function doMath(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
    reject('Informe apenas numeros')

    const result = (a +b) * c;

    if (result < 50) {
      return reject('Valor muito baixo')
    }

    resolve(result);
  });
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

async function callDoMath() {
  const randomNumbers = Array.from({length:3}).map(getRandomNumber)
  // doMath(10,10,10)
  //   .then(resolve => console.log(resolve))
  //   .catch(err => console.log(err))
  
  
  // doMath(1,1,'a')
  //   .then(resolve => console.log(resolve))
  //   .catch(err => console.log(err))
  
  // doMath(1,1,1)
  //   .then(resolve => console.log(resolve))
  //   .catch(err => console.log(err))

  // doMath(...randomNumbers)
  //   .then(result => console.log(result))
  //   .catch(err => console.log(err.message))
  try {
    const result = await  doMath(...randomNumbers)
    console.log(result)
  } catch (e) {
    console.log(e.message)
  }


}

callDoMath()

// const randomNumbers = () => Array.from({length:3}).map(getRandomNumber)

// // console.log(randomNumbers())


// doMath(...randomNumbers())
//   .then(resolve => console.log(resolve))
//   .catch(err => console.log(err.message))
