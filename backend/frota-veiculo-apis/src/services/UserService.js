const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    async findUserByTelephone(telephone) {
        return await User.findOne({telephone: telephone})
    },
    async createUser(user){
        return await User.create(user);
    }
}