const Atendimento = require("../models/atendimento");

module.exports = app => {

  app.get("/atendimentos", (req, res) => {
    
    Atendimento.listarTodos(res);

  });

  app.post("/atendimentos", (req, res) => {

    let atendimento = req.body;
    Atendimento.adicionar(atendimento, res);

  });
}
