'use strict'

var ddrActions = require('../../components/actions');

class actionsController {

    constructor(){

    }

    recAction(req, res){
        
        return ddrActions.insertRecording(req, res);

    }

    tabsAction(req, res){

       return ddrActions.insertTab(req, res);

    }

    matchAction(req, res){

        return ddrActions.findMatchings(req, res);

    }

}

module.exports = new actionsController();
