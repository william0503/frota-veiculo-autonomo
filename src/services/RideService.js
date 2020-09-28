const vehicleService = require('../services/VehicleService');
const Ride = require('../models/Rides');
const dynamoose = require('dynamoose');
const uuid = require('uuid');
module.exports = {
  async getRide(id) {
    return await Ride.get(id);
  },
  async getRides() {
    console.log('getRides');
    return await Ride.scan().exec();
  },
  async getCurrentRide(telephone) {
    return await Ride.scan(
      new dynamoose.Condition()
        .where('user.telephone')
        .eq(telephone)
        .and()
        .where('status')
        .not()
        .eq('finished')
    ).exec();
  },
  async getUserRides(telephone) {
    return await Ride.scan(
      new dynamoose.Condition()
        .where('user.telephone')
        .eq(telephone)
        .and()
        .where('finishTime')
        .not()
        .eq(null)
    ).exec();
  },
  async askNewRide(user, vehicle, startPlace, finishPlace) {
    const newRide = {
      id: uuid.v1(),
      user: user.toJSON(),
      vehicle: vehicle.toJSON(),
      startPlace: startPlace,
      finishPlace: finishPlace,
      status: 'asked',
    };
    console.log(newRide);
    return await Ride.create(newRide);
  },
  async startRide(ride) {
    ride.startTime = new Date();
    ride.status = 'started';

    return await ride.save();
  },
  async finishRide(ride) {
    ride.finishTime = new Date();
    ride.status = 'finished';

    //ride.vehicle = vehicleService.setVehicleAvailable(ride.vehicle);
    vehicleService.setVehicleAvailable(ride.vehicle);

    return await ride.save();
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
