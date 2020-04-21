const mongoose = require('mongoose');
const Ride = mongoose.model('Ride');

module.exports={
    async index(req, res){
        
        // utilizando a desestruturação, vamos acessar os parâmetros do request
        const { page = 1 } = req.query;
        // no objeto vazio passaríamos o Where (filtros)
        const rides = await Ride.paginate({}, { page, limit:10 });

        return res.json(rides);
    },
    async show(req,res){
        const rides = await Ride.findById(req.params.id);

        return res.json(rides);
    },
    async store(req, res){
        const rides = await Ride.create(req.body);

        return res.json(rides);
    },
    
    async update(req, res){
        const rides = await Ride.findByIdAndUpdate(req.params.id, req.body, { new:true });

        return res.json(rides);
    },

    async destroy(req,res){
        const rides = await Ride.findByIdAndRemove(req.params.id);

        return res.send();
    }
};