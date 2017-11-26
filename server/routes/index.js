const _ = require('lodash');
const path = require('path');
const Users = require('./../models/users');

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
      res.sendFile(path.join(__dirname, './../public/index.html'));
    })
    .post(passport.authenticate('local-login', {
      successRedirect: '/index/1',
      failureRedirect: '/login'
    }))

  return app;
}
