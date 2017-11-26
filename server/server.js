require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const sequelize = require('./config/sequelize');

const app = express();

app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use('/', express.static('./public'));

require('./routes')(app);

app.listen(process.env.PORT, () => {
  console.log(`App rodando na porta ${process.env.PORT}`);
});
