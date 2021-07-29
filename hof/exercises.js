const assert = require('assert');

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
//   return books.find((book) => book.author.birthYear === 1947)
// }

// assert.strictEqual(authorBornIn1947(), 'Stephen King');

// console.log(authorBornIn1947())


// function smallerName() {
//   // let nameBook;
//   // escreva aqui o seu código

//   // Variável nameBook que receberá o valor do menor nome;


  // let nameBook = books.sort((name1, name2) => name1.name.length - name2.name.length[0].name);

//   return nameBook;
// }

// console.log(smallerName())


// assert.strictEqual(smallerName(), 'Duna');

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
//   // escreva seu código aqui

//   return books.find((book) => book.name.length = 26)
// }

// assert.deepStrictEqual(getNamedBook(), expectedResult);

// console.log(getNamedBook())

// console.log(books[0].name.length)

// function authorBornIn1947() {
//   return books.find((book) => book.author.birthYear === 1947)
// }

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

//   return books.sort((book1, book2) => book2.releaseYear - book1.releaseYear)

  
// }

// assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);





























// const expectedResult = false;

// function everyoneWasBornOnSecXX() {
//   // escreva seu código aqui
//   return  books.every((book) => book.author.birthYear > 1900 && book.author.birthYear < 2000)

// }

// // console.log(books.some((book) => book.author.birthYear > 1900 && book.author.birthYear < 2000))

// assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);

// const expectedResult = true;

// function someBookWasReleaseOnThe80s() {
//   return books.some((book) => book.releaseYear > 1980 && book.releaseYear < 1990)
// }

// assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);

// console.log(books.some((book) => book.releaseYear > 1980 && book.releaseYear < 1990))

// const expectedResult = false;

// function authorUnique() {
//   // escreva seu código aqui
// }

// assert.strictEqual(authorUnique(), expectedResult);

const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui

}

assert.strictEqual(authorUnique(), expectedResult);

