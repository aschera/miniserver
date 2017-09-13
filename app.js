const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const express = require('express');
const index = require('./routes/index');
const error = require('./routes/error');
const resultat = require('./routes/resultat');
const ResultEntering = require('./routes/ResultEntering');
const report = require('./public/javascripts/index');

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.use('/', index);
app.use('/resultat', resultat);
app.use('/ResultEntering', ResultEntering);

app.use('/', error);

io.on('connection', socket => {
  socket.on('vote update', vote => {
    console.log('vote: ' + vote);
    io.emit('vote update', vote);
  });
});

http.listen(3000, () => {
  console.log('listening on port 3000');
});