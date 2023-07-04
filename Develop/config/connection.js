// Load environment variables from .env file
require('dotenv').config();

// Import Sequelize package
const Sequelize = require('sequelize');

// Create a Sequelize instance based on the provided configuration
// If JAWSDB_URL environment variable is set (indicating usage of a Heroku database),
// use the provided URL to establish the connection
// Otherwise, use the local MySQL configuration from .env file
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
    
 // Export the Sequelize instance for use in other modules
module.exports = sequelize;