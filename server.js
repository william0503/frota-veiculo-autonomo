const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');
const requireDir = require('require-dir');

const swaggerUi = require('swagger-ui-express');
const specs = require('./src/doc/swaggerDef');
 
require('dotenv/config');

//Iniciando o App
const app = express();

app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(process.env.MONGODB_CONNECTIONSTRING,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

// Fazendo o Require do Schema
requireDir('./src/models');

// consumindo a rota
app.use('/api', require('./src/routes'));


// instanciando o swagger 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(process.env.PORT || 3000);

