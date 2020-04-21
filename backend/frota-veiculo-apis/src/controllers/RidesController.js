const mongoose = require('mongoose');
const Ride = mongoose.model('Ride');

module.exports={
    async Status(req,res){
        const rides = await Ride.findById(req.params.id);

        return res.json(rides);
    },
    async Ask(req, res){
        const rides = await Ride.create(req.body);

        return res.json(rides);
    },
    
    async Start(req, res){
        const rides = await Ride.findByIdAndUpdate(req.params.id, req.body, { new:true });

        return res.json(rides);
    },

    async Finish(req, res){
        const rides = await Ride.findByIdAndUpdate(req.params.id, req.body, { new:true });

        return res.json(rides);
    },
};