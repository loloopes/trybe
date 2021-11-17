const express = require('express');
const fs = require('fs/promises');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');

const app = express();
// app.use(express.json());
app.use(bodyParser.json());

function getSimpsons() {
  return fs.readFile('./simpsons.json', 'utf-8')
  .then(fileContent => JSON.parse(fileContent));
}

function setSimpsons (newSimpsons) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

app.get('/ping', (req, res) => {
  res.status(200).json({"message": 'app no ar!'});
});

app.get('/simpsons', rescue(async(req, res) => {
  const simpsons = await getSimpsons();

  res.status(200).json(simpsons);
}));

app.get('/simpsons/:id', rescue(async (req, res) => {
  const simpsons = await getSimpsons();

  const simpson = simpsons.find(({id}) => id === req.params.id);

  if(!simpson) {
    return res.status(404).json({message: 'character not found'});
  };

  return res.status(202).json(simpson);
}));

app.post('/simpsons', rescue(async (req, res) => {
  const {id, name} = req.body;

  const simpsons = await getSimpsons();

  if (simpsons.map(({id}) => id).includes(id)) {
    return res.status(409).json({message: 'id already exists'});
  };

  simpsons.push({id, name});

  await setSimpsons(simpsons);

  res.status(200).json({message: 'character added'});
}));



app.listen(3000, () => console.log('ouvindo na porta 3000!'));