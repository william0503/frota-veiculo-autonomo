//Criando o Schema

// const mongoose = require('mongoose');
// const mongoosePaginate = require('mongoose-paginate');
const dynamoose = require('dynamoose');

dynamoose.aws.sdk.config.update({
  region: process.env.DYNAMODB_REGION,
});

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *        type: object
 *        properties:
 *          name:
 *              type: string
 *          telephone:
 *              type: string
 *          email:
 *              type: string
 *
 *        required:
 *          - name
 *          - telephone
 *          - email
 *
 */
const UserSchema = new dynamoose.Schema({
  name: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    hashKey: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Registrando o mongoose paginate da Aplicação
//UserSchema.plugin(mongoosePaginate);

// Registrando o schema
const User = dynamoose.model('User', UserSchema);
module.exports = User;
