'use strict'

const mongoose = require('../components/mongodb');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;



// Tab Data
var TabSchema = new Schema({

    _id: ObjectId,
    nomeCliente: String,
    protocolo: String,
    dataAtendimento: Date,
    numeroBinado: String,
    numeroAcesso:String

}, {
    versionKey: false,
});

var Model = mongoose.model('tabulacoes', TabSchema);

module.exports = Model;