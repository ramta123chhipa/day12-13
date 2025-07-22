
    // async function connectAndQuery() {
    //     try {
    //         await client.connect();
    //         console.log('Connected to PostgreSQL database');

    //         const res = await client.query('SELECT * FROM users1');
    //         console.log('Users1:', res.rows);
    //     } catch (err) {
    //         console.error('Error connecting or querying:', err);
    //     } finally {
    //         await client.end(); // Close the connection
    //         console.log('Connection closed');
    //     }
    // }

    // connectAndQuery();


const pool = require('./db');

async function fetchUsers() {
  try {
    const res = await pool.query('SELECT * FROM users');
    console.table(res.rows);
  } catch (err) {
    console.error('❌ Error fetching users:', err.message);
  }
}

module.exports = fetchUsers;
    
