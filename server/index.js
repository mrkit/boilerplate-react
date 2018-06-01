const express = require('express'),
      server = express(),
      resolve = require('path').resolve,
      morgan = require('morgan'),
      bodyParser = require('body-parser');

server.use('/assets', express.static(resolve(__dirname, '..', 'assets')));
server.use([
  express.static(resolve(__dirname, '..', 'dist')),
  morgan('dev'),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true })
]);

server.get('/*', (req, res) => res.sendFile(resolve(__dirname, '..', 'dist', 'index.html')));

server.use((err, req, res, next) => {
  if(err) console.log(`Catch-All Error Message: ${err.message}`);
});

