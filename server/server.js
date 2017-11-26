require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const sequelize = require('./config/sequelize');
const passport = require('./config/passport');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use('/', express.static('./public'));
app.use(passport.initialize());
app.use(passport.session());

require('./routes')(app, passport);

app.listen(process.env.PORT, () => {
  console.log(`App rodando na porta ${process.env.PORT}`);
});
