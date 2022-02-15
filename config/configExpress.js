const express = require('express');
const consign = require('consign');

module.exports = () => {

  const app = express();

  app.listen(3000, () => {console.log('Servidor rodando...')});

  consign()
    .include("controllers")
    .into(app);

  return app;

}
