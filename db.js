const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'DariaDragun1',
  database : 'movedb'
});

module.exports = connection;