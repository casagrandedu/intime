const _ = require('lodash');
const path = require('path');
const fs = require('fs');

const Users = require('./../models/users');
const {isLoggedIn, isNotLoggedIn} = require('./../middlewares');

module.exports = (app, passport) => {
  app.route('/login')
    .get(isNotLoggedIn, (req, res) => res.sendFile(path.join(__dirname, '../files/login.html')))
    .post(passport.authenticate('local-login', {
      successRedirect: '/index',
      failureRedirect: '/login?err=1'
    }));

  app.post('/api/usuarios', (req, res) => {
    const data = _.pick(req.body, ['nome', 'senha']);

    Users.findOne({where: {nome: data.nome}})
      .then(user => user ? Promise.reject(new Error('Um usuário com esse nome já existe')) : Users.create({
        nome: data.nome,
        senha: Users.generateHash(data.senha)
      })).then(newUser => res.json({
        success: true,
        message: 'Usuário criado com sucesso'
      })).catch(err => res.json({
        success: false,
        message: err.message
      }));
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
  });

  app.get('/', (req, res) => res.redirect('/index'));

  app.get(['/index', '/clientes'], isLoggedIn, (req, res, next) => {
    const file = path.join(__dirname, `../files/users/${req.user.nome}/${req.url.replace(/\//g, '')}.html`);

    fs.access(file, err => err ? next() : res.sendFile(file));
  })

  app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../files/404.html')));

  return app;
}
