//Criando o Schema 

const mongooe = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const VehicleSchema = new mongooe.Schema({
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
mongooe.model('Vehicle', VehicleSchema);