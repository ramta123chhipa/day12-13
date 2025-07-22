// const {Client} = require('pg')
// const Client = new Client({
//     user: postgres,
//     password: ramta@123,
//     host: localhost,
//     port: 5432,
//     database: practice_DB

// })

const prompt = require('prompt-sync')();
const pool = require('./db');

async function insertUser() {
  const name = prompt('Enter name: ');
  const email = prompt('Enter email: ');
  const age = parseInt(prompt('Enter age: '));

  try {
    await pool.query('INSERT INTO users(name, email, age) VALUES($1, $2, $3)', [name, email, age]);
    console.log('✅ User added successfully!');
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

module.exports = insertUser;
