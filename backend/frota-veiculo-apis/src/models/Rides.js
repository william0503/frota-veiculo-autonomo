//Criando o Schema 

const mongooe = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const RideSchema = new mongooe.Schema({
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
    GoalPlace:{
        type: String,
        required: true
    }
});

// Registrando o mongoose paginate da Aplicação
RideSchema.plugin(mongoosePaginate);

// Registrando o schema
mongooe.model('Ride', RideSchema);