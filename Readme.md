 Node.js + PostgreSQL CLI App
A simple terminal-based app to perform basic CRUD operations on a PostgreSQL database using Node.js.

📌 Features
Add a user 👤
View all users 📄
Delete a user ❌
Menu-based CLI interface
🧰 Tech Used
Node.js
PostgreSQL
npm packages: pg, dotenv, prompt-sync
📁 File Structure
project/ ├── cli.js # Main CLI menu ├── db.js # DB connection ├── insertUser.js # Add user ├── fetchUser.js # View users ├── deleteUser.js # Delete user ├── .env # Environment config └── package.json # Project config

⚙ Setup
Create DB and Table in psql:
CREATE DATABASE practice1_db;
\c practice1_db
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  age INTEGER
   );

initialize project:
npm init -y npm install pg dotenv prompt-sync

Add .env:
DB_USER=postgres DB_HOST=localhost DB_NAME=practice1_db DB_PASSWORD=yourpassword DB_PORT=5432

Run App:
node cli.js

Then choose from the menu:
Add User
View All Users
Delete User 4. Exit