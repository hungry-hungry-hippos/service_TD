const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const expressStaticGzip = require('express-static-gzip');

const app = express();
const port = 3021;

app.use(parser.json());
app.use(morgan('dev'));
// app.use(express.static('public'));
app.use('/', expressStaticGzip('public', {
  enableBrotli: true,
  customCompressions: [{
    encodingName: 'deflate',
    fileExtension: 'zz',
  }],
  orderPreference: ['br', 'gz'],
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  },
}));

app.listen(port, (err) => {
  if (err) {
    return console.error(err, 'Failed to connect to server');
  }
  return console.log('Connect to server');
});
