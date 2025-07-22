const prompt = require('prompt-sync')();
const insertUser = require('./insertUser');
const fetchUser = require('./fetchUser');
const deleteUser = require('./deleteUser');

async function main() {
  while (true) {
    console.log(`
📋 MENU
1. Add User
2. View All Users
3. Delete User
4. Exit
    `);

    const choice = prompt('Choose an option: ');
    if (choice === '1') await insertUser();
    else if (choice === '2') await fetchUser();
    else if (choice === '3') await deleteUser();
    else if (choice === '4') {
      console.log('👋 Exiting...');
      break;
    } else {
      console.log('❌ Invalid choice.');
    }
 }
}

main();