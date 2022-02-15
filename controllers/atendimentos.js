const Atendimento = require("../models/atendimento");

module.exports = app => {

  app.get("/atendimentos", (req, res) => res.send("rota de atendimentos"));

  app.post("/atendimentos", (req, res) => {

    const atendimento = req.body;
    Atendimento.adicionar(atendimento);

    res.send("roda de atendimentos via POST")

  });
}
