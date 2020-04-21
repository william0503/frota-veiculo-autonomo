const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports={
    async index(req, res){
        
        // utilizando a desestruturação, vamos acessar os parâmetros do request
        const { page = 1 } = req.query;
        // no objeto vazio passaríamos o Where (filtros)
        const users = await User.paginate({}, { page, limit:10 });
        console.log("Usuário(s) obtido(s): " + users)
        return res.json(users);
    },
    async show(req,res){
        const user = await User.findById(req.params.id);
        console.log("Usuário obtido: " + user)
        return res.json(user);
    },
    async store(req, res){
        const users = await User.create(req.body);        
        console.log("Usuário(s) cadastrados: " + users)
        return res.json(users);
    },
    
    async update(req, res){
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new:true });
        console.log("Usuário atualizado: " + user)

        return res.json(user);
    },

    async destroy(req,res){
        const user = await User.findByIdAndRemove(req.params.id);
        console.log("Usuário removido: " + user)
        return res.send();
    }
};