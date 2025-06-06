// const mysql = require('mysql');
// require('dotenv').config();

// const connection = mysql.createConnection({
//     host:  process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err.message);
//     return;
//   }
//   console.log('Connected to MySQL!');
// });

// module.exports = connection;
import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL
const sql = postgres(connectionString)

export default sql
