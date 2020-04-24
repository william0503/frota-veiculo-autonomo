//Criando o Schema 

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

/**
 * @swagger
 * components:
 *  schemas:
 *      Ride:
 *        type: object
 *        properties:
 *          User:
 *              $ref: '#/components/schemas/User'
 *          Vehicle:
 *             $ref: '#/components/schemas/Vehicle'
 *          StartPlace:
 *              type: string
 *          FinishPlace:
 *              type: string
 *          Status :
 *              type: string
 *          StartTime:
 *              type: sate
 *          GoalFinish:
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
const RideSchema = new mongoose.Schema({
    User:{
        type: Object,
        required: true
    },
    Vehicle:{
        type: Object,
        required: true
    },
    StartPlace:{
        type: String,
        required: true
    },
    FinishPlace:{
        type: String,
        required: true
    },
    Status:{
        type: String,
        required: true
    },
    StartTime:{
        type: Date,
        required: false
    },
    GoalFinish:{
        type: Date,
        required: false
    }
});

// Registrando o mongoose paginate da Aplicação
RideSchema.plugin(mongoosePaginate);

// Registrando o schema
mongoose.model('Ride', RideSchema);