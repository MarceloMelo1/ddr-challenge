// app Enviroment
require('dotenv').config();

// set up App resources
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var helmet = require('helmet');
var mongoSanitize = require('express-mongo-sanitize');
var registerRoutesInV1 = require('./app/routes/v1');
var logger = require('./app/components/logger');
var http = require('http');
var scheduler = require('./app/components/scheduler');

// app Startup
app.use(bodyParser.urlencoded({
    extended: true
}));
// middleware to validate json format
app.use(bodyParser.json({

    // just accept json in requests
    verify: (req, res, buf, encoding) => {
        try {
            JSON.parse(buf);
        } catch (err) {
            logger.error({
                message: 'Invalid JSON request: ' + err
            })
            res.status(400).json({
                message: "Invalid JSON Request"
            });
        }
    }

}));

app.use(helmet());
app.use(mongoSanitize());

// v1 Routes Setup
registerRoutesInV1(app);

// start up the basic Service on http
http.createServer(app).listen(80);
strPor80Protocol = 'HTTP';

// start scheduler job
scheduler.start();

logger.info({
    message: 'DDR Challenge Version ' + process.env.APP_VERSION + ' started on port 80 over ' + strPor80Protocol + ' in ' + process.env.APP_ENV.toUpperCase()
});
