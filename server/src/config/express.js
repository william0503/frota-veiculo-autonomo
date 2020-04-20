var express = require('express')
    ,app = express()
    ,bodyParser = require('body-parser')
    ,routes = require('../routes/usuarios');


app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes(app);

module.exports = app;