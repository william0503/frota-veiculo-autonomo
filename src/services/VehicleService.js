const mongoose = require('mongoose');
const Vehicle = mongoose.model('Vehicle');
const NewLicensePlate = require('../utils/NewLicensePlate');

module.exports = {
    async createVehicle() {
        return await Vehicle.create({
            model: 'Tesla Model S',
            licensePlate: NewLicensePlate(),
            status: 'busy'
        })
    },
    async getAvailableVehicle(){
        return await Vehicle.findOne({status: 'available'})
    },
    async setVehicleBusy(vehicle) {
        vehicle.status = 'busy'
        return await Vehicle.findByIdAndUpdate(vehicle._id, vehicle);
    },
    async setVehicleAvailable(vehicle) {
        vehicle.status = 'available'
        return await Vehicle.findByIdAndUpdate(vehicle._id, vehicle);
    }
}