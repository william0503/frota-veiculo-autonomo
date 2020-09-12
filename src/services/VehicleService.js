const Vehicle = require('../models/Vehicles');
const dynamoose = require('dynamoose');

const NewLicensePlate = require('../utils/NewLicensePlate');

module.exports = {
  async createVehicle() {
    const licensePlate = NewLicensePlate();
    console.log(licensePlate);
    return await Vehicle.create({
      model: 'Tesla Model S',
      licensePlate: licensePlate,
      status: 'busy',
    });
  },
  async getAvailableVehicle() {
    return await Vehicle.scan(
      new dynamoose.Condition().where('status').eq('available')
    )
      .limit(1)
      .exec();
  },
  async setVehicleBusy(vehicle) {
    vehicle.status = 'busy';
    return await Vehicle.update(vehicle.licensePlate, vehicle);
  },
  async setVehicleAvailable(vehicle) {
    vehicle.status = 'available';
    return await Vehicle.update(vehicle.licensePlate, vehicle);
  },
};
