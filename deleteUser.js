const prompt = require('prompt-sync')();
const pool = require('./db');

async function deleteUser() {
  const email = prompt('Enter email to delete: ');
  try {
    const res = await pool.query('DELETE FROM users WHERE email = $1', [email]);
    if (res.rowCount > 0) {
      console.log('✅ User deleted!');
    } else {
      console.log('⚠ No user found.');
    }
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

module.exports = deleteUser;