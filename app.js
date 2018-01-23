const express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    yaml = require('yamljs'),
    swaggerUI = require('swagger-ui-express'),
    swaggerDoc = yaml.load('./api/swagger/swagger.yaml'),
    // set up Mongoose Connection
    mongoConn = require('./mongoConnection')();

let app = express();

// Configure morgan to log your requests, with a standard date & time format
morgan.token('time', (req, res) => new Date().toISOString());
app.use(morgan('[:time] :remote-addr :method :url :status :res[content-length] :response-time ms'));

// Setup bodyParsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Mount the APIs specific to version
// app.use('/api/v1', require('./api/v1'));
app.use(require('./api/v1'));

// Mount the SwaggerUI  Middleware
let swaggerOptions = {
    explorer: false
};
app.use('/api/docs',
    swaggerUI.serve,
    swaggerUI.setup(swaggerDoc, swaggerOptions)
);

module.exports = app;