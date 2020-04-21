const express = require('express');
const routes = express.Router();

// importando o controller 
const UserController = require('./controllers/UserController');


routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:id',UserController.show);
routes.put('/users/:id',UserController.update);
routes.delete('/users/:id', UserController.destroy);

const VehicleController = require('./controllers/VehicleController');


routes.get('/vehicles', VehicleController.index);
routes.post('/vehicles', VehicleController.store);
routes.get('/vehicles/:id',VehicleController.show);
routes.put('/vehicles/:id',VehicleController.update);
routes.delete('/vehicles/:id', VehicleController.destroy);

const RideController = require('./controllers/RidesController');

routes.post('/rides', RideController.store);
routes.get('/rides/:id',RideController.show);
routes.put('/rides/:id',RideController.update);
routes.put('/rides/:id', RideController.update);

module.exports = routes;
