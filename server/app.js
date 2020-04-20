const express = require('express')

const app = express()

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../app/swagger.json');
 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/',(req,res) =>{
    return res.send("Hello World")
})

app.listen(3000)