const mysql = require('mysql');
require('dotenv').config();

const con = mysql.createPool({
    host: 'localhost' || process.env.DB_HOST,
    user: 'root' || process.env.DB_USER,
    password: '' || process.env.DB_PASS,
    database: 'nirav' || process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

con.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Database is Connect Successfully..');
        // connection.release();
    }
});

module.exports = con;
