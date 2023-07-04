// Load environment variables from .env file
require('dotenv').config();

// Import required packages and modules
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection.js');

// Create an instance of the Express application
const app = express();

// Set the port number to use, defaulting to 3001 if not specified in the environment
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.use(routes);

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  // Start the server and listen for incoming connections on the specified port
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
}).catch((err) => {
  // Handle any errors that occur during database connection or model syncing
  console.error('Unable to connect to the database:', err);
});