'use strict';

module.exports = function(app) {

  var actionsController = require('../controllers/v1/actionsController');
  var mongoTools = require('../components/mongoTools');

    app.route('/recording')
      .post([mongoTools.isMongoConnected, actionsController.recAction]);

    app.route('/tabs')
      .post([mongoTools.isMongoConnected, actionsController.tabsAction]);

    app.route('/matchings')
      .get([mongoTools.isMongoConnected, actionsController.matchAction]);

};
