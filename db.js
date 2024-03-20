const mongoose = require('mongoose');

// Use dotenv or another method to load environment variables
require('dotenv').config();

// Retrieve the MongoDB connection URL from environment variables
const mongoURL = process.env.MONGO_DB_CONNECTION;

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const connection = mongoose.connection;

// Event listeners for MongoDB connection events

// If there is an error during the connection
connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

// If the connection is successful
connection.on('connected', () => {
    console.log('MongoDB connected successfully');
});

// If the connection is disconnected
connection.on('disconnected', () => {
    console.warn('MongoDB disconnected');
});

// If Node.js process ends, close the MongoDB connection
process.on('SIGINT', () => {
    connection.close(() => {
        console.log('MongoDB connection closed due to Node.js process termination');
        process.exit(0);
    });
});

// Export the Mongoose instance to be used in other parts of the application
module.exports = mongoose;
