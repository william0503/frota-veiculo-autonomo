const mongoose = require('mongoose');
const vehicleService = require('../services/VehicleService');
const Ride = mongoose.model('Ride');

module.exports = {
    async getRide(id){
        return await Ride.findById(id);
    },
    async getRides(page){
        console.log('getRides')
        return await Ride.paginate({}, { page, limit:10, sort: {startTime: -1} });
    },
    async getCurrentRide(telephone){
        console.log(telephone)
        return await Ride.find({'user.telephone': telephone, 'finishTime': null });
    },
    async getUserRides(telephone,page){
        console.log(telephone)
        return await Ride.paginate({'user.telephone': telephone, 'finishTime': { $ne: null }}, { page, limit:10, sort: {finishTime: -1} });
    },
    async askNewRide(user, vehicle, startPlace, finishPlace){
        return await Ride.create({
            user: user,  
            vehicle: vehicle,
            startPlace: startPlace,
            finishPlace: finishPlace,
            status: 'asked'
        });
    },
    async startRide(ride){

        ride.startTime = new Date();
        ride.status = 'started';

        return await Ride.findByIdAndUpdate(ride._id, ride, { new: true });
    },
    async finishRide(ride){

        ride.finishTime = new Date();
        ride.status = 'finished';
            
        //ride.vehicle = vehicleService.setVehicleAvailable(ride.vehicle);
        vehicleService.setVehicleAvailable(ride.vehicle);

        return await Ride.findByIdAndUpdate(ride._id, ride, { new: true });
    },
    async checkBusyUser(user){
        return await Ride.findOne({$and:[{"user.telephone": user.telephone}, {$or:[{status: "asked"},{status:"started"}]}]});
    }
}