const mysql = require('mysql2');
require('dotenv').config();

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

let db;

function connectWithRetry(retries = 5, delay = 2000) {
  db = mysql.createConnection(config);

  db.connect((err) => {
    if (err) {
      console.error(`❌ MySQL connection failed: ${err.message}`);
      if (retries > 0) {
        console.log(`🔁 Retrying in ${delay / 1000}s... (${retries} retries left)`);
        setTimeout(() => connectWithRetry(retries - 1, delay), delay);
      } else {
        console.error('❌ All retries exhausted. Exiting.');
        process.exit(1);
      }
    } else {
      console.log('✅ Connected to MySQL');
    }
  });
}

connectWithRetry(); // Start connection attempts

module.exports = db;
