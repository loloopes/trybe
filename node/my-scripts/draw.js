const readline = require('readline-sync');

const chosenNumber = readline.questionInt('Choose an integer from 1 to 10: ')

function checkDraw(number) {
  const randomNumber = Math.ceil(Math.random()*10)
  if (number === randomNumber) return `Won! Choosen ${chosenNumber} is equal ${randomNumber}`
  return `Lost! Chosen ${chosenNumber} is not equal ${randomNumber}`
}

console.log(checkDraw(chosenNumber))