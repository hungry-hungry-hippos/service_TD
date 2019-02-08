const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const { findOne } = require('../database/index');

const app = express();
const port = 3020;

app.use(morgan('dev'));
app.use(parser.json());

app.use(express.static('client/dist'));

app.get('/:id', (req, res) => {
  const { id } = req.params;
  findOne(id, (err, data) => {
    if (err) {
      res.status(400).send(JSON.stringify(err));
    } else {
      res.status(200).send(JSON.stringify(data));
    }
  });
});

// app.get('/all', (req, res) => {
//   saveFakeData((err) => {
//     if (err) {
//       res.status(400).send(JSON.stringify(err));
//     } else {
//       res.status(200).send('database is completed');
//     }
//   });
// });


app.listen(process.env.PORT || port, () => {
  console.log(`listening on port ${process.env.PORT || port}`);
});
