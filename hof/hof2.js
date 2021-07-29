const drawNumber = () => Math.round(Math.random()*5)

const genNumbers = (num1, drawNumber ) => {
  if (num1 === drawNumber ) {
    return 'Parabens, voce ganhou'
  } 
  return 'Tente Novamente'
}

console.log(genNumbers(3, drawNumber))