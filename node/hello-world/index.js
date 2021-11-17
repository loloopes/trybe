const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');

const age = readline.questionInt('Qual sua idade? ');

console.log(`Hello ${name} of ${age} years old, welcome to the world!`)