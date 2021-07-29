// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = numbers.find((number) => number % 3 === 0 && number % 5 === 0)

// console.log(findDivisibleBy3And5)



// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// console.log(names[0].length)

// const findNameWithFiveLetters = names.find((name) => name.length > 5)

// console.log(findNameWithFiveLetters)

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]


// const findMusic = musicas.find((musica) => musica.id === '31031685')

// console.log(findMusic)


const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((value1, value2) => value2.age - value1.age )

console.log(people);