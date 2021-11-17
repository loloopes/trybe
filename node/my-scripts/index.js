const readline = require('readline-sync');

const scripts = [
  {name: 'Calcular IMC', script: './imc.js'},
  {name: 'Calcular Velocidade', script: './velocidade.js'},
  {name: 'Draw', script: './draw.js'}
];

let mensagem = scripts.map((script, index) => `${index + 1} - ${script.name}` );

mensagem.unshift('Escolha um numero para executar o script correspondente')

mensagem = mensagem.join('\n');

const scriptNumber = readline.questionInt(mensagem) - 1;

const script = scripts[scriptNumber];

if (!script) return console.log('numero invalido. saindo');

require(script.script);