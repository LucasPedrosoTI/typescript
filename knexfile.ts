import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'db', 'migrations'),
    },
  },
  production: {
    client: 'mysql2',
    connection: process.env.CLEARDB_DATABASE_URL,
  },
};
