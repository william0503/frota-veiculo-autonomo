const Vehicle = require('../models/Vehicles');
const dynamoose = require('dynamoose');

const NewLicensePlate = require('../utils/NewLicensePlate');

module.exports = {
  async createVehicle() {
    const licensePlate = NewLicensePlate();
    //console.log(licensePlate);
    const newVehicle = {
      modelName: 'Tesla Model S',
      licensePlate: licensePlate,
      status: 'busy',
    };
    //console.log(newVehicle);
    return await Vehicle.create(newVehicle);
  },
  async getAvailableVehicle() {
    return await Vehicle.scan(
      new dynamoose.Condition().where('status').eq('available')
    )
      .limit(1)
      .exec();
  },
  async setVehicleBusy(vehicle) {
    return await Vehicle.update(
      { licensePlate: vehicle.licensePlate },
      { status: 'busy' }
    );
  },
  async setVehicleAvailable(vehicle) {
    return await Vehicle.update(
      { licensePlate: vehicle.licensePlate },
      { status: 'available' }
    );
  },
};
