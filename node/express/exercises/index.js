const express = require('express');

const app = express();
app.use(express.json())


app.get('/ping', (_req, res) => res.json({"message": "pong"}));

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({"message":`Hello, ${name}!`})
})

app.post('/greetings', async (req, res) => {
  const { name, age } = req.body;

  if (parseInt(age, 10) <= 17) {
    return res.status(401).json({message: 'Unauthorized'})
  }
  res.status(200).json({message: `Hello, ${name}!`})
})

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
})

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado ${err.message}`)
})


app.listen(3000, () => console.log('ouvindo na porta 3000!'));