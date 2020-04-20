//Criando o Schema 

const mongooe = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongooe.Schema({
    name:{
        type: String,
        required: true,
    },
    telephone:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

// Registrando o mongoose paginate da Aplicação
UserSchema.plugin(mongoosePaginate);

// Registrando o schema
mongooe.model('User', UserSchema);