// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = numbers.find((number) => number % 3 === 0 && number % 5 === 0)

// console.log(findDivisibleBy3And5)



// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// console.log(names[0].length)

// const findNameWithFiveLetters = names.find((name) => name.length > 5)

// console.log(findNameWithFiveLetters)

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and `F`ugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]


// const findMusic = musicas.find((musica) => musica.id === '31031685')

// console.log(findMusic)


// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// people.sort((value1, value2) => value2.age - value1.age )

// console.log(people);
































const assert = require('assert');
const { AsyncResource } = require('async_hooks');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:




// function authorBornIn1947() {
//   // escreva aqui o seu código
//   return books.find((book) => book.author.birthYear === 1947).author.name
// }

// assert.strictEqual(authorBornIn1947(), 'Stephen King');
























// function smallerName() {
//   let nameBook;
//   // escreva aqui o seu código

//   // Variável nameBook que receberá o valor do menor nome;

//   nameBook = books.reduce((accumulator, currentValue) => {
//     return accumulator.name.length > currentValue.name.length? currentValue : accumulator
//   }).name

//   return nameBook
// }

// assert.strictEqual(smallerName(), 'Duna');


// console.log(smallerName())


















// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

// function getNamedBook() {
//   let livro = books.find((book) => book.name.length === 26)

//   return livro
// }

// assert.deepStrictEqual(getNamedBook(), expectedResult);




























// const expectedResult = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: { name: 'Stephen King', birthYear: 1947 },
//     releaseYear: 1986,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: { name: 'Frank Herbert', birthYear: 1920 },
//     releaseYear: 1965,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
// ];

// function booksOrderedByReleaseYearDesc() {
//   // escreva aqui seu código
//   books.sort((value1, value2) => value2.releaseYear - value1.releaseYear )

//   return books

// }

// assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);

























// const expectedResult = false;

// function everyoneWasBornOnSecXX() {
//   // escreva seu código aqui
//   return  books.every((book) => book.author.birthYear > 1900 && book.author.birthYear < 2000)
// }

// assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);























