const authorizationService = require('../services/AuthorizationService');

module.exports = {
    authorize(req, res) {
        const { clientId, clientSecret } = req.body

        try {
            const token = authorizationService.generateToken({ clientId, clientSecret })
            return res.status(200).send({ token })
        }
        catch(err) {
            return res.status(401).send({ error: "Invalid credentials" });
        }
    }
}