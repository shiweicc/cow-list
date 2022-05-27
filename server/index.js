const express = require('express');

const app = express();
const path = require('path');
const db = require('../database/index');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));
/*
For POST & PUT request:
to recognize the incoming Request Object as a JSON Object | strings or arrays
*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Read all cows from the cow list
app.get('/api/cows', (req, res) => {
  db.connection.query(db.readAll, (err, result) => {
    if (err) {
      console.log('Err get cows data!', err);
    }
    console.log('Success get cows data!', result);
    res.send(result);
  });
});

// Add a cow to the cow list
app.post('/api/cows', (req, res) => {
  // console.log('POST REQEST req.body: ', req.body);
  db.connection.query(db.addCow, [req.body.name, req.body.description], (err, result) => {
    if (err) {
      console.log('Err post cow data!', err);
    }
    console.log('Success post cow data!', result);
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
