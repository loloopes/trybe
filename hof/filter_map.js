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

//Exercicio 1

// const expectedResult = [
//   'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
//   'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
//   'Fundação - Ficção Científica - Isaac Asimov',
//   'Duna - Ficção Científica - Frank Herbert',
//   'A Coisa - Terror - Stephen King',
//   'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
// ];

// function formatedBookNames() {
//   const bookGenreAuthor = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)

//   return bookGenreAuthor
// }

// assert.deepStrictEqual(formatedBookNames(), expectedResult);












//Exercicio 2

// const expectedResult = [
//   {
//     age: 31,
//     author: 'Isaac Asimov',
//   },
//   {
//     age: 38,
//     author: 'H. P. Lovecraft',
//   },
//   {
//     age: 39,
//     author: 'Stephen King',
//   },
//   {
//     age: 43,
//     author: 'George R. R. Martin',
//   },
//   {
//     age: 45,
//     author: 'Frank Herbert',
//   },
//   {
//     age: 62,
//     author: 'J. R. R. Tolkien',
//   },
// ];

// function nameAndAge() {
//   const ageAuthor = books.map((book) => {
//     return {
//       age: book.releaseYear - book.author.birthYear,
//       author: book.author.name,
//     }
//   })

//   ageAuthor.sort((age1, age2) => age1.age - age2.age)

//   return ageAuthor;
// }

// assert.deepStrictEqual(nameAndAge, expectedResult)

// // console.log(nameAndAge())








//Exercicio 3

// const expectedResult = [
//   { 
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: { name: 'Frank Herbert', birthYear: 1920 },
//     releaseYear: 1965
//   }
// ];

// function fantasyOrScienceFiction() {
//   const certainTypes = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')

//   return  certainTypes
// }

// assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult);

// console.log(fantasyOrScienceFiction())









//Exercicio 4

// const expectedResult = [
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
// ];

// function oldBooksOrdered() {
//   const oldBooks = books.filter((book) => 2021 - book.releaseYear > 60)

//   oldBooks.sort((age1, age2) => age1.releaseYear - age2.releaseYear)

//   return oldBooks
// }

// assert.deepStrictEqual(oldBooksOrdered(), expectedResult);

// console.log(oldBooksOrdered())






//Exercicio 5

// const expectedResult = [
//   'Frank Herbert',
//   'George R. R. Martin',
//   'Isaac Asimov',
//   'J. R. R. Tolkien',
// ];

// function fantasyOrScienceFictionAuthors() {
// const authors = []
// const sciFyAuthors = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
// sciFyAuthors.forEach((book) => authors.push(book.author.name))
// authors.sort()

// return authors

// }

// assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);








//Exercicio 6


// const expectedResult = [
//   'O Senhor dos Anéis',
//   'Fundação',
//   'O Chamado de Cthulhu',
// ];

// function oldBooks() {
//   // escreva seu código aqui

//   bookNames = [];
//   const livros = books.filter((book) => 2021 - book.releaseYear > 60);
//   livros.forEach((book) => bookNames.push(book.name))

//   return bookNames
// }

// assert.deepStrictEqual(oldBooks(), expectedResult);

// console.log (oldBooks())








//Exercicio 7


// const expectedResult = 'O Senhor dos Anéis';

// function authorWith3DotsOnName() {
//   // escreva seu código aqui

  
//   const specify = books.find((book) => book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3).name
//   // const specify = books.filter((book) => book.author.name.startsWith('?. ?. ?.'))
//   // const desiredItem
  
//   // const nameSplited = specify.map((string) => string.split(' '))
  
  


//   return specify
// }

// // assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);


// console.log(authorWith3DotsOnName())