const mongoose = require('mongoose');

const vehicleService = require('../services/VehicleService');
const rideService = require('../services/RideService');
const userService = require('../services/UserService');

module.exports = {
  async status(req, res) {
    return res.json(await rideService.getRide(req.params.id));
  },
  async history(req, res) {
    return res.json(await rideService.getRides());
  },
  async currentRide(req, res) {
    const telephone = req.params.id;
    return res.json(await rideService.getCurrentRide(telephone));
  },
  async userHistory(req, res) {
    const telephone = req.params.id;
    const { page = 1 } = req.query;

    return res.json(await rideService.getUserRides(telephone, page));
  },
  async ask(req, res) {
    const { telephone, startPlace, finishPlace } = req.body;

    const user = await userService.findUserByTelephone(telephone);

    if (!user) {
      return res.status(400).send('Usuário não encontrado');
    } else {
      const busyUser = await rideService.checkBusyUser(user);
      console.log(busyUser);
      if (busyUser[0]) {
        return res.status(403).send('O usuário já está em uma corrida');
      }
    }
    console.log('validado');
    let vehicle = await vehicleService.getAvailableVehicle();
    console.log('obteve veiculo');
    console.log(vehicle);
    if (vehicle[0]) {
      vehicle = await vehicleService.setVehicleBusy(vehicle[0]);
      console.log('definiu ocupado');
    } else {
      console.log('vai criar veiculo');
      vehicle = await vehicleService.createVehicle();
      console.log('criou veiculo');
    }

    const ride = await rideService.askNewRide(
      user,
      vehicle,
      startPlace,
      finishPlace
    );

    return res.status(201).json(ride);
  },
  async updateStatus(req, res) {
    let ride = await rideService.getRide(req.params.id);

    if (!ride) {
      return res.status(400).send('Corrida não encontrada');
    }

    const { type } = req.body;

    switch (type) {
      case 'start':
        if (ride.status == 'started') {
          return res.status(400).send('Corrida já iniciada');
        } else if (ride.status == 'finished') {
          return res.status(400).send('Corrida já encerrada');
        }
        return res.json(await rideService.startRide(ride));
      case 'finish':
        if (ride.status == 'asked') {
          return res.status(400).send('Corrida não iniciada');
        } else if (ride.status == 'finished') {
          return res.status(400).send('Corrida já encerrada');
        }
        return res.json(await rideService.finishRide(ride));
      default:
        return res.status(400).send('O valor aguardado é start ou finish.');
    }
  },
};
