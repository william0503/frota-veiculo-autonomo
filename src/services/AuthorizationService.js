const jwt = require('jsonwebtoken')

module.exports = {
    generateToken(params = {}){
        if(params.clientId === process.env.CLIENT_ID && params.clientSecret === process.env.CLIENT_SECRET){        
            return jwt.sign({id: params.clientId}, params.clientSecret, {
                expiresIn: 86400
            })
        }
        else{
            throw new Exception()
        }
    }
}