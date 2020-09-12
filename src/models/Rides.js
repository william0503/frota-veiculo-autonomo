//Criando o Schema
const uuid = require('uuid');
const dynamoose = require('dynamoose');

dynamoose.aws.sdk.config.update({
  region: process.env.DYNAMODB_REGION,
});
/**
 * @swagger
 * components:
 *  schemas:
 *      Ride:
 *        type: object
 *        properties:
 *          user:
 *              $ref: '#/components/schemas/User'
 *          vehicle:
 *             $ref: '#/components/schemas/Vehicle'
 *          startPlace:
 *              type: string
 *          finishPlace:
 *              type: string
 *          status :
 *              type: string
 *          startTime:
 *              type: date
 *          finishTime:
 *              type: date
 *
 *        required:
 *          - User
 *          - Vehicle
 *          - StartPlace
 *          - FinishPlace
 *          - Status
 *
 */
const RideSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
      required: true,
      default: uuid.v1(),
    },
    user: {
      type: Object,
      required: true,
    },
    vehicle: {
      type: Object,
      required: true,
    },
    startPlace: {
      type: String,
      required: true,
    },
    finishPlace: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    startTime: {
      type: Date,
      required: false,
    },
    finishTime: {
      type: Date,
      required: false,
    },
  },
  {
    saveUnknown: true,
  }
);

// Registrando o schema
const Ride = dynamoose.model('Ride', RideSchema);
module.exports = Ride;
