const userService = require('../services/UserService');
const rideService = require('../services/RideService');

const Logon = require('../models/Logon')

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;

        const users = await userService.findAll(page);

        return res.json(users);
    },
    async show(req, res) {
        const telephone = req.params.id;

        let user = await userService.findUserByTelephone(telephone)

        if (!user) {
            return res.status(400).send('Usuário não cadastrado');
        }

        return res.json(user);
    },
    async store(req, res) {
        const { telephone } = req.body

        let user = await userService.findUserByTelephone(telephone)

        if (user) {
            return res.status(400).send('Usuário já cadastrado');
        }

        user = await userService.createUser(req.body)

        return res.status(201).json(user);
    },

    async update(req, res) {
        const telephone = req.params.id;

        let user = await userService.findUserByTelephone(telephone)

        if (!user) {
            return res.status(400).send('Usuário não cadastrado');
        }

        user = await User.findByIdAndUpdate(user._id, req.body, { new: true });

        return res.json(user);
    },

    async destroy(req, res) {
        const telephone = req.params.id;

        let user = await userService.findUserByTelephone(telephone)

        if (!user) {
            return res.status(400).send('Usuário não cadastrado');
        }

        user = await User.findByIdAndRemove(user._id);

        return res.send();
    },

    async logon(req, res) {
        const telephone = req.params.id;

        const user = await userService.findUserByTelephone(telephone)

        if (!user) {
            return res.status(400).send('Usuário não cadastrado');
        }

        const ride = await rideService.checkBusyUser(user);

        const logon = new Logon(user, ride);
        
        return res.json({ 
            logon, 
            token: userService.generateToken({ id: user.telephone }) 
        });
    },
};