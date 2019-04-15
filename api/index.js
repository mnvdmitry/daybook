const express = require('express');
const BodyParser = require('body-parser');

const journals = require('./routes/journals');
const auth = require('./routes/auth');
const db = require('./db');

const app = express();

db.connect(err => {
  if (err) {
    throw err;
  } else {
    global.db = db;
  }
});

app.set('port', process.env.PORT || 8080);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(BodyParser.json());

//routes
app.use('/journals', journals);
app.use('/auth', auth);

//middleware

app.listen(8080);
