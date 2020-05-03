const express = require('express');
const routes = express.Router();
const authMiddleware = require("./middlewares/auth");

const TokenController = require('./controllers/TokenController');
/**
 * @swagger
 * path:
 *  /token/:
 *    post:
 *      tags:
 *          - Token
 *      summary: JWT Token
 *
*      requestBody:
 *          required: true
 *          description: Tipo da ação ('start ou finish')
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties: 
 *                          clientId:
 *                              type: string
 *                          clientSecret:
 *                              type: string
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      token:
 *                          type: string
 *                  
 *       
 *        "500":
 *          description: Erro        
 */
routes.post('/token', TokenController.authorize);


// Users

const UserController = require('./controllers/UserController');

/**
 * @swagger
 * path:
 *  /users/:
 *    get:
 *      tags:
 *          - Users
 *      summary: Lista de Usuários
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *               
 */
routes.get('/users', authMiddleware, UserController.index);

/**
 * @swagger
 * path:
 *  /users/{id}:
 *    get:
 *      tags:
 *          - Users
 *      summary: Usuário por Id
 * 
 *      parameters:
 *          - name: id
 *            in: path
 *            description: Id do Usuário
 *            required: true
 *            schema:
 *              type: string
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/User'
 */
routes.get('/users/:id', authMiddleware, UserController.show);

/**
 * @swagger
 * path:
 *  /users/logon/{id}:
 *    get:
 *      tags:
 *          - Users
 *      summary: Logon do Usuário
 * 
 *      parameters:
 *          - name: id
 *            in: path
 *            description: Id do Usuário
 *            required: true
 *            schema:
 *              type: string
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Logon'
 *        "400":
 *          description: Bad Request
 */
routes.get('/users/logon/:id', authMiddleware, UserController.logon);

/**
 * @swagger
 * path:
 *  /users/:
 *    post:
 *      tags:
 *          - Users
 *      summary: Adiciona um Usuário
 *
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *       
 *        "500":
 *          description: Erro        
 */
routes.post('/users', authMiddleware, UserController.store);

/**
 * @swagger
 * path:
 *  /users/{id}:
 *    put:
 *      tags:
 *          - Users
 * 
 *      summary: Altera um Usuário
 * 
 *      parameters:
 *          - name: id
 *            in: path
 *            description: Id do Usuário
 *            required: true
 *            schema:
 *              type: string
 *
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *       
 *        "500":
 *          description: Erro        
 */
routes.put('/users/:id', authMiddleware, UserController.update);

/**
 * @swagger
 * path:
 *  /users/{id}:
 *    delete:
 *      tags:
 *          - Users
 * 
 *      summary: Deleta um Usuário
 * 
 *      parameters:
 *          - name: id
 *            in: path
 *            description: Id do Usuário
 *            required: true
 *            schema:
 *              type: string
 *
 *      responses:
 *        "200":
 *          description: Ok
  *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *       
 *        "500":
 *          description: Erro        
 */
routes.delete('/users/:id', authMiddleware, UserController.destroy);


//Vehicles

const VehicleController = require('./controllers/VehicleController');

/**
 * @swagger
 * path:
 *  /vehicles/:
 *    get:
 *      tags:
 *          - Vehicles
 *      summary: Lista de Veículos
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Vehicle'
 *               
 */
routes.get('/vehicles', authMiddleware, VehicleController.index);

/**
 * @swagger
 * path:
 *  /vehicles/:
 *    post:
 *      tags:
 *          - Vehicles
 *      summary: Adiciona um Veículo
 *
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Vehicle'
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Vehicle'
 *       
 *        "500":
 *          description: Erro        
 */
routes.post('/vehicles', authMiddleware, VehicleController.store);

/**
 * @swagger
 * path:
 *  /vehicles/{id}:
 *    get:
 *      tags:
 *          - Vehicles
 *      summary: Veículo por Id
 *      parameters:
 *          - name: id
 *            in: path
 *            description: Id do Veículo
 *            required: true
 *            schema:
 *              type: string
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Vehicle'
 */
routes.get('/vehicles/:id', authMiddleware,VehicleController.show);

/**
 * @swagger
 * path:
 *  /vehicles/{id}:
 *    put:
 *      tags:
 *          - Vehicles
 * 
 *      summary: Altera um Veículo
 * 
 *      parameters:
 *          - name: id
 *            in: path
 *            description: Id do Veículo
 *            required: true
 *            schema:
 *              type: string
 *
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Vehicle'
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Vehicle'
 *       
 *        "500":
 *          description: Erro        
 */
routes.put('/vehicles/:id', authMiddleware,VehicleController.update);

/**
 * @swagger
 * path:
 *  /vehicles/{id}:
 *    delete:
 *      tags:
 *          - Vehicles
 * 
 *      summary: Deleta um Veículo
 * 
 *      parameters:
 *          - name: id
 *            in: path
 *            description: Id do Veículo
 *            required: true
 *            schema:
 *              type: string
 *
 *      responses:
 *        "200":
 *          description: Ok
  *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Vehicle'
 *       
 *        "500":
 *          description: Erro        
 */
routes.delete('/vehicles/:id', authMiddleware, VehicleController.destroy);


//Rides

const RideController = require('./controllers/RideController');

/**
 * @swagger
 * path:
 *  /rides/:
 *    post:
 *      tags:
 *          - Rides
 *      summary: Adiciona uma Corrida
 *
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Ride'
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Ride'
 *       
 *        "500":
 *          description: Erro        
 */
routes.post('/rides', authMiddleware, RideController.ask);
/**
 * @swagger
 * path:
 *  /rides:
 *    get:
 *      tags:
 *          - Rides
 *      summary: Lista de Corridas
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Ride'
 */
routes.get('/rides', authMiddleware, RideController.history);

/**
 * @swagger
 * path:
 *  /rides/{id}:
 *    get:
 *      tags:
 *          - Rides
 *      summary: Corrida por Id
 *      parameters:
 *          - name: id
 *            in: path
 *            description: Id da Corrida
 *            required: true
 *            schema:
 *              type: string
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Ride'
 */
routes.get('/rides/:id', authMiddleware, RideController.status);

/**
 * @swagger
 * path:
 *  /rides/users/{id}:
 *    get:
 *      tags:
 *          - Rides
 *      summary: Lista de corridas do Usuário
 *      parameters:
 *          - name: id
 *            in: path
 *            description: Id do Usuário
 *            required: true
 *            schema:
 *              type: string
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Ride'
 */
routes.get('/rides/users/:id', authMiddleware, RideController.userHistory);

/**
 * @swagger
 * path:
 *  /rides/{id}:
 *    patch:
 *      tags:
 *          - Rides
 * 
 *      summary: Atualiza Horário de Início ou Fim da Corrida
 * 
 *      parameters:
 *          - name: id
 *            in: path
 *            description: Id da Corrida
 *            required: true
 *            schema:
 *              type: string
 *
 *      requestBody:
 *          required: true
 *          description: Tipo da ação ('start ou finish')
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties: 
 *                          type:
 *                              type: string
 *                          
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Ride'
 *       
 *        "500":
 *          description: Erro        
 */
routes.patch('/rides/:id', authMiddleware, RideController.updateStatus);

module.exports = routes;
