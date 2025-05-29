const mysql = require('mysql');
require('dotenv').config();

const dns = require('dns');

dns.lookup(process.env.DB_HOST, (err, address, family) => {
  if (err) {
    console.error('DNS lookup failed:', err);
  } else {
    console.log(`Address: ${address}, Family: IPv${family}`);
  }
});


const con = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
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
