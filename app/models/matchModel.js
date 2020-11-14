'use strict'

const mongoose = require('../components/mongodb');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;



// Matching Data
var MatchSchema = new Schema({

    _id: ObjectId,
    gravacaoId: ObjectId,
    tabulacaoId: ObjectId

}, {
    versionKey: false,
});

var Model = mongoose.model('matchings', MatchSchema);

module.exports = Model;