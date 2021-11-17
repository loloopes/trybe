const express = require('express');

const app = express();

app.get('/hello', handleHelloWolrdReq);

app.listen(3001, () => {
  console.log('App ouvindo na porta 3001')
});

function handleHelloWolrdReq(req, res) {
  res.status(200).send('Hello World!')
}