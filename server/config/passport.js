const _ = require('lodash');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Users = require('./../models/users');

passport.serializeUser((user, done) => done(null, (user.idUsuario)));

passport.deserializeUser((id, done) => {
  Users.findOne({
    where: {
      idUsuario: id
    },
    raw: true
  }).then(user => done(null, _.omit(user, ['senha']))).catch(err => done(err));
});

passport.use('local-login', new LocalStrategy({
  usernameField: 'nome',
  passwordField: 'senha'
}, (nome, senha, done) => {
  Users.findOne({where: {nome}})
    .then(user => (user && Users.validPassword(senha, user.senha)) ? done(null, user) : done(null, false))
    .catch(err => done(err));
}));

module.exports = passport;
