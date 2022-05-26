const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cowlist',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!');
  }
});

// Your Database Queries Here!!
const readAll = 'SELECT * from cow';
const addCow = 'INSERT INTO cow (name, description) VALUES (?, ?)';

// Don't forget to export your functions!
module.exports = {
  connection,
  readAll,
  addCow,
};
