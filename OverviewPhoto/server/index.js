const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');

const app = express();
const port = 3020;

app.use(morgan('dev'));
app.use(parser.json());

app.use(express.static('client/dist'));


app.listen(process.env.PORT || port, () => {
  /* eslint-disable */
  console.log(`listening on port ${process.env.PORT || port}`);
});
