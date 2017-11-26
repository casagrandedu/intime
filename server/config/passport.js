const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const _ = require('lodash');
const Users = require('./../models/users');

passport.serializeUser(function(user, done) {
  done(null, (user.idUsuario));
});

passport.deserializeUser(function(id, done) {
  Users.findOne({
      where: {
        idUsuario: id
      }
    })
    .then(user => {
      done(null, user);
    }, err => {
      done(err);
    });
});

passport.use('local-login', new LocalStrategy({
  usernameField: 'nome',
  passwordField: 'senha',
  passReqToCallback: true
}, (req, nome, senha, done) => {
  Users.findOne({
      where: {nome}
    })
    .then(user => {
      if (!user) {
        return done(null, false, req.flash('loginMessage', 'Nome de usuário inválido.'));
      }

      if (!Users.validPassword(senha, user.senha)) {
        return done(null, false, req.flash('loginMessage', 'Senha errada.'));
      }

      return done(null, user);
    }, err => {
      console.log('d');
      return done(err);
    });
}));

module.exports = passport;
