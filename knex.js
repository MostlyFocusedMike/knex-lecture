require('dotenv').config();

const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[env];
module.exports = require('knex')(config);

/*
connectionString: process.env.PG_CONNECTION_STRING,
ssl: { rejectUnauthorized: false },
host: process.env.PG_HOST || '127.0.0.1',
port: process.env.PG_PORT || 5432,
user: process.env.PG_USER || 'postgres',
password: process.env.PG_PASS || 'postgres',
database: process.env.database || 'postgres',
*/