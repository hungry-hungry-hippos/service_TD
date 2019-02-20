const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const { findOne } = require('../database/index');

const app = express();
const port = 3020;

app.use(morgan('dev'));
app.use(parser.json());

app.use(express.static('client/dist'));

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.get('/api/:id', (req, res) => {
  const { id } = req.params;
  findOne(id, (err, data) => {
    if (err) {
      res.status(400).send(JSON.stringify(err));
    } else {
      res.status(200).send(JSON.stringify(data));
    }
  });
});

app.use('/:id', express.static('client/dist'));

// app.get('/:id', (req, res) => {
//   const { id } = req.params;
//   findOne(id, (err, data) => {
//     if (err) {
//       res.status(400).send(JSON.stringify(err));
//     } else if (data) {
//       res.set({ 'Content-Type': 'text/html' });
//       res.status(200).sendFile('index.html', { root: 'client/dist' });
//     } else {
//       res.status(404).end();
//     }
//   });
// });


app.listen(process.env.PORT || port, () => {
  console.log(`listening on port ${process.env.PORT || port}`);
});
