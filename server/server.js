require('./config/config');

const express = require('express');

const app = express();

app.use('/', express.static('./public'));

app.listen(process.env.PORT, () => {
  console.log(`App rodando na porta ${process.env.PORT}`);
})
