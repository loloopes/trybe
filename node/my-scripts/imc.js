const readline = require('readline-sync');

const weight = readline.questionInt('Qual seu peso em KG? ')
const height = readline.questionFloat('Qual sua altura em metros? ')

function calcIMC(weight, height) {
  const imc = (weight/Math.pow(height,2)).toFixed(2);
  if ( imc < 18.5) return ('Abaixo do peso');
  else if ( imc >= 18.5 && imc < 24.9 ) return ('Peso Normal');
  else if ( imc >= 25 && imc < 29.9 ) return ('Obesidade g1');
  else if ( imc >= 30 && imc < 34.9 ) return ('Obesidade g2');
  else if ( imc >= 35 && imc < 39.9 ) return ('Obesidade g3');
  else return ('Obesidadeg morbida');
  
}

console.log(calcIMC(weight, height));