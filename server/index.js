/* eslint-disable no-console */

const express = require('express');

const app = express();
const path = require('path');
const db = require('../database/index');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.get('/api/cows', (req, res) => {
  db.connection.query(db.readAll, (err, result) => {
    if (err) {
      console.log('Err get cows data!', err);
    }
    console.log('Success get cows data!', result);
    res.send(result);
  });
});

app.post('/api/cows', (req, res) => {
  res.send('Post data!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
