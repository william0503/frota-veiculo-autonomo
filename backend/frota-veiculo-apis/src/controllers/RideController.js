const mongoose = require('mongoose');
const Ride = mongoose.model('Ride');
const User = mongoose.model('User');
const Vehicle = mongoose.model('Vehicle');

module.exports={
    async status(req,res){
        const rides = await Ride.findById(req.params.id);

        return res.json(rides);
    },
    async ask(req, res){

        const { email, startPlace, finishPlace } = req.body
        const user = await User.findOne({email: email})
        const vehicle = await Vehicle.findOne({status: "available"})
        if(!vehicle) {
            //TODO: Criar veiculo aleatorio
            vehicle = await Vehicle.create({
                model: "tesla model S",
                licensePlate: "ABC-1234",
                status: "busy"
            })
        }
        const ride = await Ride.create({
            User: user,  
            Vehicle: vehicle,
            startPlace: startPlace,
            finishPlace: finishPlace
        });

        return res.json(ride);
    },
    
    async updateStatus(req, res){

        let ride = await Ride.findById(req.params.id);
        const { type } = req.params.body;

        if(type == 'start'){
            ride.startDate = new Date();
        }
        else if (type == 'finish') {
            ride.finishDate = new Date();
        }
        else{
            //TODO Tratar erro
            throw new Exception();
        }
        
        ride = await Ride.findByIdAndUpdate(req.params.id, ride, { new: true });

        return res.json(ride);
    },
};