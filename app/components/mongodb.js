'use strict'

var logger = require('./logger'),
    objConfig = require('../../config/' + process.env.APP_ENV.toLowerCase() + '/main'),
    mongoose = require('mongoose');


// disable findAnd Modify warning
mongoose.set('useFindAndModify', false);
// Mongo DB Connection
mongoose.connect(objConfig.db.strConnection, objConfig.db.options);

// Set up a var to test connection
var mongodb = mongoose.connection;

// Bind Connection Events
mongodb.on('error', function (err) {
    logger.error({ message: '### ERROR connecting with MongoDB' });
});

mongodb.on('reconnected', function (err) {
    logger.info({ message: '### RECONNECTED to MongoDB' });
});

mongodb.on('disconnected', function (err) {
    logger.error({ message: '### DISCONNECTED to MongoDB' });
});

mongodb.on('reconnectFailed', function (err) {
    logger.error({ message: '### RECONNECTED to MongoDB FAILED!' });
});

// Log the connection confirmation
mongodb.on('open', function () {
    logger.info({ message: '### MongoDB Database connected successfully on ' + process.env.APP_ENV.toUpperCase() });
});

module.exports = mongoose;


