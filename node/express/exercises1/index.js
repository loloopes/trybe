const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');



const PORT = 3000;

const app = express();
app.use(cors());
// app.use(express.json());
app.use(bodyParser.json())
const userRouter = require('./userRouter');
app.use('/user', userRouter);

app.listen(PORT, () => console.log('Run server localhost3000'))