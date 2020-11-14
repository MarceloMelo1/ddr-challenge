module.exports = {

    // MONGO DB CONFIG
    'db': {
        'strConnection': 'mongodb://ddr:1234@mongo-ddr:27017/ddrChallenge',
        'options': {
            'keepAlive': true,
            'keepAliveInitialDelay': 300000,
            'useCreateIndex': true,
            'useNewUrlParser': true,
            'useFindAndModify': false,
            'useUnifiedTopology': true,
            'ssl': false,
            'sslValidate': false,
            'sslCA': '',
            'sslCert': '',
            'sslKey': ''
        }
    }
};
