const Sequelize = require('sequelize');
const sequelize = require('./../config/sequelize');
const bcrypt = require('bcrypt-nodejs');

const userModel = sequelize.define('usuarios', {
  idUsuario: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: Sequelize.STRING
  },
  senha: {
    type: Sequelize.STRING
  }
});

userModel.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userModel.validPassword = (pw1, pw2) => {
  return bcrypt.compareSync(pw1, pw2);
};

module.exports = userModel;
