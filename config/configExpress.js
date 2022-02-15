const express = require('express');
const consign = require('consign');
const bodyParse = require('body-parser');

module.exports = () => {

  const app = express();

  app.use(bodyParse.urlencoded({ extended: true }));
  app.use(bodyParse.json());

  app.listen(3000, () => {console.log('Servidor rodando...')});

  consign()
    .include("controllers")
    .into(app);

  return app;

}
