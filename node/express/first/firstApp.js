const express = require('express');
const app = express();
app.use(express.json())

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];


app.post('/recipes', function(req, res) {
  const { id, name, price } = req.body;
  recipes.push({id, name, price})
  res.status(201).json({Message: 'Congrats, recipe created!!'})
})

app.get('/recipes', function(req, res) {
  // const { id, name, price } = req.body;
  // recipes.push({id, name, price});
  res.status(200).json(recipes)
})

app.get('/recipes/search', function(req, res) {
  const { name, maxPrice } = req.query;

  const filteredRec = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice))

  res.status(200).json(filteredRec);
})

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find( (r) => r.id === parseInt(id))

  if (!recipe) return res.status(404).json({message: 'Achinflorinfum'});

  res.status(200).json(recipe);
})

app.listen(3001, () => {
  console.log('App escutando 3001')
})