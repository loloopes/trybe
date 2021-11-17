const express = require('express');
const bodyParser = require('body-parser');


const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];


const app = express();

app.use(bodyParser.json());

app.post('/recipes', function(req, res) {
  const { id, name, price } = req.body;
  recipes.push({id, name, price});
  res.status(201).json({Message: 'Congrats, recipe created!!'})
})