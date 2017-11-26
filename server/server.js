require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const sequelize = require('./config/sequelize');
const passport = require('./config/passport');

const app = express();
const port = process.env.PORT;

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
app.use('/', express.static('./files/public'));
app.use(passport.initialize());
app.use(passport.session());

require('./routes')(app, passport);

app.listen(port, () => console.log(`App rodando na porta ${port}`));
