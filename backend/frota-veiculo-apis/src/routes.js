const express = require('express');
const routes = express.Router();

// importando o controller 
const UserController = require('./controllers/userController');


routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:id',UserController.show);
routes.put('/users/:id',UserController.update);
routes.delete('/users/:id', UserController.destroy);
module.exports = routes;
