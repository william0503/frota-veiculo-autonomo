const userService = require('../services/UserService');
const rideService = require('../services/RideService');

const Logon = require('../models/Logon');

module.exports = {
  async index(req, res) {
    const users = await userService.findAll();

    return res.json(users);
  },
  async show(req, res) {
    const telephone = req.params.id;

    let user = await userService.findUserByTelephone(telephone);

    if (!user) {
      return res.status(400).send('Usuário não cadastrado');
    }

    return res.json(user);
  },
  async store(req, res) {
    const { telephone } = req.body;

    let user = await userService.findUserByTelephone(telephone);

    if (user) {
      return res.status(400).send('Usuário já cadastrado');
    }

    user = await userService.createUser(req.body);

    return res.status(201).json(user);
  },

  async update(req, res) {
    const telephone = req.params.id;

    let user = await userService.findUserByTelephone(telephone);

    if (!user) {
      return res.status(400).send('Usuário não cadastrado');
    }

    user = await userService.update(telephone, req.body);

    return res.json(user);
  },

  async destroy(req, res) {
    const telephone = req.params.id;

    let user = await userService.findUserByTelephone(telephone);

    if (!user) {
      return res.status(400).send('Usuário não cadastrado');
    }

    user = await userService.remove(telephone);

    return res.send();
  },

  async logon(req, res) {
    const telephone = req.params.id;

    let user = await userService.findUserByTelephone(telephone);

    if (!user) {
      return res.status(400).send('Usuário não cadastrado');
    }

    let ride = await rideService.checkBusyUser(user);

    //var Logon = new Logon(user);

    let logon = new Logon(user, ride);

    return res.json(logon);
  },
};
