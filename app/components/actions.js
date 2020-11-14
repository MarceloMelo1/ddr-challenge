'use strict'

const Match = require('../models/matchModel');
const Recording = require('../models/recordModel');
const Tab = require('../models/tabModel');
const logger = require('./logger');
const mongo = require('mongodb');
const ObjectID = mongo.ObjectID;


/**
 * @class
 * @name Actions
 */
class Actions {

    /**
     * @function insertRecording
     * @author Marcelo Melo
     * @param {object} req 
     * @param {object} res 
     * @param {function} next 
     * @returns void
     */
    async insertRecording(req, res, next) {

        try {
            // insert new recording
            let objRecordingModel = new Recording;

            objRecordingModel._id = new ObjectID;
            objRecordingModel.telefone = req.body.telefone;
            objRecordingModel.nomeCliente = req.body.nomeCliente;
            objRecordingModel.ramal = req.body.ramal;
            objRecordingModel.dataGravacao = req.body.dataGravacao;

            objRecordingModel.save();

            return res.status(200).json(objRecordingModel.toObject());            

        } catch (err) {
            logger.error({ message: 'Actions.insertRecording: ' + err })
            return res.status(500).json({ message: "Something got wrong. Please contact support." });
        }
    }

    /**
     * @function insertTab
     * @author Marcelo Melo
     * @param {object} req 
     * @param {object} res 
     * @param {function} next 
     * @returns void
     */
    async insertTab(req, res, next) {

        try {
            // insert new tab
            let objTabModel = new Tab;
            objTabModel._id = new ObjectID;
            objTabModel.nomeCliente = req.body.nomeCliente;
            objTabModel.protocolo = req.body.protocolo;
            objTabModel.dataAtendimento = req.body.dataAtendimento;
            objTabModel.numeroBinado = req.body.numeroBinado;
            objTabModel.numeroAcesso = req.body.numeroAcesso;

            objTabModel.save();

            return res.status(200).json(objTabModel.toObject());           

        } catch (err) {
            logger.error({ message: 'Actions.insertTab: ' + err })
            return res.status(500).json({ message: "Something got wrong. Please contact support." });
        }
    }

    /**
     * @function findMatchings
     * @author Marcelo Melo
     * @param {object} req 
     * @param {object} res 
     * @param {function} next 
     * @returns void
     */
    async findMatchings(req, res, next) {

        try {
            // find matchings
            let arrayMatchings = await Match.find();

            return res.status(200).json(arrayMatchings);            

        } catch (err) {
            logger.error({ message: 'Actions.findMatchings: ' + err })
            return res.status(500).json({ message: "Something got wrong. Please contact support." });
        }
    }

}

module.exports = new Actions();