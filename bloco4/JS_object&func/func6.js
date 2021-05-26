//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

number = 5;
sum = 0;

function Sum(number)


for (let i=0; i<=number; i+=1){
  sum = sum + i;
}
console.log(Sum(number))