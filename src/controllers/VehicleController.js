const mongoose = require('mongoose');
const Vehicle = mongoose.model('Vehicle');

module.exports={
    async index(req, res){
        
        // utilizando a desestruturação, vamos acessar os parâmetros do request
        const { page = 1 } = req.query;
        // no objeto vazio passaríamos o Where (filtros)
        const vehicles = await Vehicle.paginate({}, { page, limit:10 });

        return res.json(vehicles);
    },
    async show(req,res){
        const vehicles = await Vehicle.findById(req.params.id);

        return res.json(vehicles);
    },
    async store(req, res){
        const vehicles = await Vehicle.create(req.body);

        return res.json(vehicles);
    },
    
    async update(req, res){
        const vehicles = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new:true });

        return res.json(vehicles);
    },

    async destroy(req,res){
        const vehicles = await Vehicle.findByIdAndRemove(req.params.id);

        return res.send();
    }
};