//mySQLと接続
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'testuser',
    password: 'testpass',
    database: 'household',
});

connection.connect((err) => {
    if(err) {
        console.error('Error connecting to MySQL database: ',err);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = connection;