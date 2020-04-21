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


routes.get('/vehicles', UserController.index);
routes.post('/vehicles', UserController.store);
routes.get('/vehicles/:id',UserController.show);
routes.put('/vehicles/:id',UserController.update);
routes.delete('/vehicles/:id', UserController.destroy);


module.exports = routes;
