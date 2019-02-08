const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');

const app = express();
const port = 3021;

app.use(parser.json());
app.use(morgan('dev'));
app.use(express.static('public'));

app.listen(port, (err) => {
  if (err) {
    return console.error(err, 'Failed to connect to server');
  }
  return console.log('Connect to server');
});
