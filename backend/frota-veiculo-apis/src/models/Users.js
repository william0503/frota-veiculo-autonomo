//Criando o Schema 

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

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
 */
const UserSchema = new mongoose.Schema({
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
mongoose.model('User', UserSchema);