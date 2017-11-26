const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const Users = require('./../models/users');
const isLoggedIn = require('./../middlewares/isLoggedIn');

module.exports = (app, passport) => {
  app.route('/api/usuarios')
    .post((req, res) => {
      const data = _.pick(req.body, ['nome', 'senha']);

      Users.findOne({
          where: {
            nome: data.nome
          }
        })
        .then(user => {
          if (user) {
            res.json({
              success: false,
              message: 'Um usuário com esse nome já existe'
            })
          } else {
            Users.create({
              nome: data.nome,
              senha: Users.generateHash(data.senha)
            }).then(newUser => {
              res.json({
                success: true,
                message: 'Usuário criado com sucesso'
              })
            }, err => {
              res.json({
                success: false,
                message: err.message
              })
            });
          }
        }, err => {
          res.json({
            success: false,
            message: err.message
          })
        });
    })

  app.route('/login')
    .get((req, res) => {
      res.sendFile(path.join(__dirname, '../files/public/login.html'));
    })
    .post(passport.authenticate('local-login', {
      successRedirect: '/index',
      failureRedirect: '/login?err=1'
    }))

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
  });

  app.get('/index', isLoggedIn, (req, res, next) => {
    const file = path.join(__dirname, '../files/users/', req.user.nome, '/index.html');

    fs.access(file, fs.constants.F_OK, err => {
      if (err) res.send('Usuário não possui uma pasta');

      res.sendFile(file);
    })
  })

  app.get('*', (req, res) => {
    res.send('404');
  })

  return app;
}
