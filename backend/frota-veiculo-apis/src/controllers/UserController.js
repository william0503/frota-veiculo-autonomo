const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports={
    async index(req, res){
        
        // utilizando a desestruturação, vamos acessar os parâmetros do request
        const { page = 1 } = req.query;
        // no objeto vazio passaríamos o Where (filtros)
        const users = await User.paginate({}, { page, limit:10 });

        return res.json(users);
    },
    async show(req,res){
        const users = await User.findById(req.params.id);

        return res.json(users);
    },
    async store(req, res){
        const users = await User.create(req.body);

        return res.json(users);
    },
    
    async update(req, res){
        const users = await User.findByIdAndUpdate(req.params.id, req.body, { new:true });

        return res.json(users);
    },

    async destroy(req,res){
        const users = await User.findByIdAndRemove(req.params.id);

        return res.send();
    }
};