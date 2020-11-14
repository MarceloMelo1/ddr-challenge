'use strict'

var logger = require('./logger');
var mongoose = require('./mongodb');

/**
 * @class
 * @name MongoTools
 */
class MongoTools {

    /**
     * @function isMongoConnected
     * @author Marcelo Melo
     * @param {object} req 
     * @param {object} res 
     * @param {function} next 
     * @returns void
     */
    async isMongoConnected(req, res, next) {
        try {
            // check mongo connection
            if(mongoose.connection.readyState.toString() == "1"){
                next();
            }
            else {
                logger.error({ message: 'MongoTools.isMongoConnected: ### DISCONNECTED to MongoDB' })
                res.status(500).json({ message: "Something got wrong. Please contact support." });
            }
        } catch (error) {
            logger.error({ message: 'MongoTools.isMongoConnected: ' + err })
            res.status(500).json({ message: "Something got wrong. Please contact support." });
        }
        
    }

}

module.exports = new MongoTools();