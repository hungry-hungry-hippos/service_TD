const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const db = require('../database/index');

const app = express();
const port = 3020;

app.use(morgan('dev'));
app.use(parser.json());

app.use(express.static('client/dist'));


app.listen(process.env.PORT || port, () => {
  console.log(`listening on port ${process.env.PORT || port}`);
});
