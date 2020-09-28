// const mongoose = require('mongoose');
const User = require('../models/Users');

module.exports = {
  async findAll() {
    return await User.scan().exec();
  },
  async findUserByTelephone(telephone) {
    return await User.get(telephone);
  },
  async createUser(user) {
    return await User.create(user);
  },
  async update(telephone, user) {
    return Conta.update(telephone, user);
  },
  async remove(telephone) {
    Conta.delete(telephone);
  },
};
