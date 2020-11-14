'use strict'

const mongoose = require('../components/mongodb');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;



// Record Data
var RecordSchema = new Schema({

    _id: ObjectId,
    telefone: String,
    ramal: String,
    dataGravacao: Date

}, {
    versionKey: false,
});

var Model = mongoose.model('gravacoes', RecordSchema);

module.exports = Model;