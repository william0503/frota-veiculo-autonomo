const vehicleService = require('../services/VehicleService');
const Ride = require('../models/Rides');
const dynamoose = require('dynamoose');
module.exports = {
  async getRide(id) {
    return await Ride.get(id);
  },
  async getRides() {
    console.log('getRides');
    return await Ride.scan().exec();
  },
  async getCurrentRide(telephone) {
    console.log(telephone);
    return await Ride.scan(
      new dynamoose.Condition()
        .where('user.telephone')
        .eq(telephone)
        .and()
        .where('finishTime')
        .eq(null)
    ).exec();
  },
  async getUserRides(telephone) {
    console.log(telephone);
    return await Ride.scan(
      new dynamoose.Condition()
        .where('user.telephone')
        .eq(telephone)
        .and()
        .where('finishTime')
        .not.eq(null)
    ).exec();
  },
  async askNewRide(user, vehicle, startPlace, finishPlace) {
    return await Ride.create({
      user: user,
      vehicle: vehicle,
      startPlace: startPlace,
      finishPlace: finishPlace,
      status: 'asked',
    });
  },
  async startRide(ride) {
    ride.startTime = new Date();
    ride.status = 'started';

    return await Ride.update(ride.id, ride);
  },
  async finishRide(ride) {
    ride.finishTime = new Date();
    ride.status = 'finished';

    //ride.vehicle = vehicleService.setVehicleAvailable(ride.vehicle);
    vehicleService.setVehicleAvailable(ride.vehicle);

    return await Ride.findByIdAndUpdate(ride.id, ride);
  },
  async checkBusyUser(user) {
    return await Ride.scan(
      new dynamoose.Condition()
        .where('user.telephone')
        .eq(user.telephone)
        .and()
        .parenthesis(
          new dynamoose.Condition()
            .where('status')
            .eq('asked')
            .or()
            .where('status')
            .eq('started')
        )
    ).exec();
  },
};
