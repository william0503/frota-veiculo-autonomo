const express = require('express');
const routes = express.Router();

// importando o controller 
const UserController = require('./controllers/UserController');


routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:di',UserController.show);
routes.put('/users/:id',UserController.update);
routes.delete('/users/:id', UserController.destroy);

const VehicleController = require('./controllers/VehicleController');


routes.get('/vehicles', VehicleController.index);
routes.post('/vehicles', VehicleController.store);
routes.get('/vehicles/:id',VehicleController.show);
routes.put('/vehicles/:id',VehicleController.update);
routes.delete('/vehicles/:id', VehicleController.destroy);

const RideController = require('./controllers/RideController');

routes.post('/rides', RideController.ask);
routes.get('/rides/:id',RideController.status);
routes.put('/rides/:id',RideController.start);
routes.put('/rides/:id', RideController.finish);

module.exports = routes;
