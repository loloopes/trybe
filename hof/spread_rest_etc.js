// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['banana', 'laranja', 'goiaba'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['item1', 'item2', 'item3'];

// const fruitSalad = (fruit, additional) => {
//   // Esreva sua função aqui]

//   return [...specialFruit, ...additionalItens]
// };

// console.log(fruitSalad(specialFruit, additionalItens));


















// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';


// const [item1, item2, item3] = [bebida, comida, animal]

// console.log(item1, item2, item3); // arroz gato água

// // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo


















// const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const { nationality = 'Brazilian' } = person;

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));


























// const getPosition = (latitude, longitude) => ({
//   latitude,
//   longitude,});

// console.log(getPosition(-19.8157, -43.9542));












// const assert = require('assert');

// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   assert.strictEqual(rectangleArea(...rectangle), rectangle[0] * rectangle[1]); // altere a chamada da funcao rectangleArea
// });












// const assert = require('assert');

// // escreva sum abaixo

// const sum = (...values) => values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// assert.strictEqual(sum(), 0);
// assert.strictEqual(sum(1), 1);
// assert.strictEqual(sum(1, 2), 3);
// assert.strictEqual(sum(1, 2, 3), 6);
// assert.strictEqual(sum(1, 2, 3, 4), 10);


















// const assert = require('assert');



// const alex = {
//   name: 'Alex',
//   age: 26,
//   likes: ['fly fishing'],
//   nationality: 'Australian',
// };

// const gunnar = {
//   name: 'Gunnar',
//   age: 30,
//   likes: ['hiking', 'scuba diving', 'taking pictures'],
//   nationality: 'Icelandic',
// };

// // complete a assinatura da função abaixo


// const personLikes = (person) => {
//   const { name, age, likes} = person;
//   return `${name} is ${age} years old and likes ${likes.join(', ')}.`
// };

// assert.strictEqual(personLikes(alex), 'Alex is 26 years old and likes fly fishing.');
// assert.strictEqual(personLikes(gunnar), 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.');

// // console.log(personLikes(gunnar))




















const assert = require('assert');

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
const filteredPeople = (array) => {
  // const { bornIn, nationality } = array;
 return array.filter(({bornIn, nationality}) => bornIn < 2000 && bornIn > 1900 && nationality === 'Australian')
};

assert.deepStrictEqual(filteredPeople(people)[0], { name: 'Nicole', bornIn: 1992, nationality: 'Australian' });
assert.deepStrictEqual(filteredPeople(people)[1], { name: 'Toby', bornIn: 1901, nationality: 'Australian' });

// console.log(filteredPeople(people)[0])
























// const assert = require('assert');

// const myList = [1, 2, 3];

// // escreva swap abaixo

// const swappedList = (list) => {
//   const [a, b, c] = list
//   return [c,b,a]
// }

// assert.strictEqual(swappedList(myList)[0], 3);
// assert.strictEqual(swappedList(myList)[1], 2);
// assert.strictEqual(swappedList(myList)[2], 1);


// // console.log(swappedList(myList)[0])









































// const assert = require('assert');

// const palio = ['Palio', 'Fiat', 2019];
// const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
// const chiron = ['Chiron', 'Bugatti', 2016];

// // escreva toObject abaixo

// const toObject = (carro) => {
//   const [modelo, marca, ano] = carro
//   return {
//     name: modelo,
//     brand: marca,
//     year: ano,
//   }
// }


// console.log(toObject(shelbyCobra))


// assert.deepStrictEqual(toObject(palio), { name: 'Palio', brand: 'Fiat', year: 2019 });
// assert.deepStrictEqual(toObject(shelbyCobra), { name: 'Shelby Cobra', brand: 'Ford', year: 1963 });
// assert.deepStrictEqual(toObject(chiron), { name: 'Chiron', brand: 'Bugatti', year: 2016 });




























// const assert = require('assert');

// const ships = [
//   {
//     name: 'Titanic',
//     length: 269.1,
//     measurementUnit: 'meters',
//   },
//   {
//     name: 'Queen Mary 2',
//     length: 1132,
//     measurementUnit: 'feet',
//   },
//   {
//     name: 'Yamato',
//     length: 256,
//     measurementUnit: 'meters',
//   },
// ];

// // escreva shipLength abaixo
// const shipLength = ({name, length, measurementUnit}) => `${name} is ${length} ${measurementUnit} long`




// // assert.strictEqual(shipLength(ships[0]), 'Titanic is 269.1 meters long');
// // assert.strictEqual(shipLength(ships[1]), 'Queen Mary 2 is 1132 feet long');
// // assert.strictEqual(shipLength(ships[2]), 'Yamato is 256 meters long');


// console.log(shipLength(ships[0]))
























// const assert = require('assert');

// // escreva greet abaixo
// const greet = (name, greet = 'Hi') => `${greet} ${name}`


// assert.strictEqual(greet('John'), 'Hi John');
// assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
// assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');





