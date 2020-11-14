'use strict'

var logger = require('./logger');
var mongoose = require('./mongodb');
var CronJob = require('cron').CronJob;

const Match = require('../models/matchModel');
const Recording = require('../models/recordModel');
const Tab = require('../models/tabModel');
const mongo = require('mongodb');
const ObjectID = mongo.ObjectID;

/**
 * @class
 * @name Scheduler
 */
class Scheduler {

    /**
     * @function start
     * @author Marcelo Melo
     * @param {object} req 
     * @param {object} res 
     * @param {function} next 
     * @returns void
     */
    async start() {
        try {

            var objJob = new CronJob('* * */6 * * *', this.generateMatch(), null, true, null, null, true);
            
            objJob.start();

            logger.info({ message: '### Scheduler started ' });

            
        } catch (error) {
            logger.error({ message: 'Scheduler.start: ' + error })
        }
    }

    /**
     * @function generateMatch
     * @author Marcelo Melo
     * @param {object} req 
     * @param {object} res 
     * @param {function} next 
     * @returns void
     */
    async generateMatch() {

        try{
            // get all recordings
            let arrayRecs = await Recording.find();

            arrayRecs.map(async function(objRec){
                // check if recording was already matched
                let objMatch = await Match.findOne({'gravacaoId': objRec._id});

                if(objMatch == null){
                    // find the tab from that recording number
                    let objTab = await Tab.findOne({"$or": [{"numeroBinado": objRec.telefone},{"numeroAcesso": objRec.telefone}]});

                    if(objTab){
                        let objMatch = new Match;

                        objMatch._id = new ObjectID;
                        objMatch.gravacaoId = objRec._id;
                        objMatch.tabulacaoId = objTab._id;

                        objMatch.save();
                    }

                }
                
            });

        } catch (err) {
            logger.error({ message: 'Scheduler.generateMatch: ' + err })
        }
        
    
    }

}

module.exports = new Scheduler();