//Criando o Schema 

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

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
 */
const VehicleSchema = new mongoose.Schema({
    model:{
        type: String,
        required: true,
    },
    licensePlate:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        required: true
    }
});

// Registrando o mongoose paginate da Aplicação
VehicleSchema.plugin(mongoosePaginate);

// Registrando o schema
mongoose.model('Vehicle', VehicleSchema);