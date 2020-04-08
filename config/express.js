var express = require('./config/express')
    ,app = express()
    ,bodyParser = require('body-parser')
    ,routes = require('../app/routes/usuario');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

module.exports = app;