// const fs = require('fs').promises;

// fs.readFile('./simpsons.json', 'utf-8')
//   .then((fileContent) => JSON.parse(fileContent))
//   .then((simpsons) => simpsons.map(({id, name}) =>`${id} - ${name}`))
//   .then((strings) => strings.forEach(string => console.log(string)))

// async function getSimpsonById(id) {
//   const simpsons = await fs
//     .readFile('./simpsons.json', 'utf-8')
//     .then((fileContent) => JSON.parse(fileContent))

//   const chosenSimpson = simpsons.find((simpson) => simpson.id == id)

//   if (!chosenSimpson) {
//     throw new Error('id nao encontrado')
//   }

//   return chosenSimpson; 
// }

// async function filterSimpsons() {
//   const simpsons = await fs
//     .readFile('./simpsons.json', 'utf-8')
//     .then((fileContent) => JSON.parse(fileContent));

//   const newArray = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6')

//   await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
// }

// filterSimpsons()

// async function createSimpsonFamily() {
//   const simpsons = await fs
//     .readFile('./simpsons.json', 'utf-8')
//     .then((fileContent) => JSON.parse(fileContent))

//   const simpsonsFamily = simpsons.filter(simpson => ['1', '2', '3', '4'].includes(simpson.id))

//   await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));

// }

// createSimpsonFamily();

// async function addNelsonToFamily() {
//   const simpsonsFamily = await fs
//     .readFile('./simpsonsFamily.json', 'utf-8')
//     .then((fileContent) => JSON.parse(fileContent))

//   simpsonsFamily.push({"id": "8", "name": "Nelson Muntz"})

//   await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily))
// }

// addNelsonToFamily();

// function replaceNelson () {
//   return fs.readFile('./simpsonsFamily.json' , 'utf-8')
//     .then(fileContent => JSON.parse(fileContent))
//     .then(simpsons => simpsons.filter(simpson => simpson.id !== '8'))
//     .then(simpsonsWithoutNelson => simpsonsWithoutNelson.concat([{id: '8', name: 'Maggie Simpson'}]))
//     .then(simpsonWithMaggie => fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonWithMaggie)));
// }

// replaceNelson();

const fs = require('fs').promises;

async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!!'];

  const createFilePromises = strings.map((string, index) => fs.writeFile(`./file${index + 1}.txt`, string));

  await Promise.all(createFilePromises);

  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt'
  ];

  const fileContents = await Promise.all(fileNames.map(fileName => fs.readFile(fileName, 'utf-8')));

  const newFileContent = fileContents.join(' ');

  await fs.writeFile('.fileAll.txt', newFileContent);
}

arrayToFile()