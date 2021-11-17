const express = require('express');
const authMiddleware = require('./authMidd');

const app = express();

app.use(express.json());

app.get('/open', function(req, res) {
  res.send('Achinflorinfum!')
});

app.get('/fechado', authMiddleware, function (req, res) {
  res.send('closed!')
});

const recipesRouter = require('./recipesRouter');

app.use('/recipes', recipesRouter);

app.listen(3001, () => console.log('ouvindo porta 3001'))