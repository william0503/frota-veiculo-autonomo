const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');
const requireDir = require('require-dir');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const specs = require('./swaggerDef');
 

//Iniciando o App
const app = express();

app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(
    //'mongodb://localhost:27017/frotaVeiculo',
"mongodb+srv://william0503:senha1234@cluster0-8siwt.gcp.mongodb.net/frota-autonoma?retryWrites=true&w=majority",
    { useNewUrlParser: true }
);

// Fazendo o Require do Schema
requireDir('./src/models');

// consumindo a rota
app.use('/api', require('./src/routes'));


// instanciando o swagger 
app.use('/api-docsold', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


app.listen(3001);

