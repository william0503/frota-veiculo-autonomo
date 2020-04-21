//Criando o Schema 

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const VehicleSchema = new mongoose.Schema({
    model:{
        type: String,
        required: true,
    },
    licensePlate:{
        type: String,
        required: true,
    }
});

// Registrando o mongoose paginate da Aplicação
VehicleSchema.plugin(mongoosePaginate);

// Registrando o schema
mongoose.model('Vehicle', VehicleSchema);