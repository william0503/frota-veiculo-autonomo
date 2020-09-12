//Criando o Schema

// const mongoose = require('mongoose');
const dynamoose = require('dynamoose');

dynamoose.aws.sdk.config.update({
  region: process.env.DYNAMODB_REGION,
});
// const mongoosePaginate = require('mongoose-paginate');

/**
 * @swagger
 * components:
 *  schemas:
 *      Vehicle:
 *        type: object
 *        properties:
 *          model:
 *              type: string
 *          licensePlate:
 *              type: string
 *          status:
 *              type: string
 *
 *        required:
 *          - model
 *          - licensePlate
 *          - status
 *
 */
const VehicleSchema = new dynamoose.Schema({
  model: {
    type: String,
    //required: true,
  },
  licensePlate: {
    type: String,
    hashKey: true,
    required: true,
  },
  status: {
    type: String,
    //required: true,
  },
});

// Registrando o mongoose paginate da Aplicação
// VehicleSchema.plugin(mongoosePaginate);

// Registrando o schema
const Vehicle = dynamoose.model('Vehicle', VehicleSchema);
module.exports = Vehicle;
