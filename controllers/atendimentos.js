const Atendimento = require("../models/atendimento");

module.exports = app => {

  app.get("/atendimentos", (req, res) => {
    
    Atendimento.listarTodos(res);

  });

  app.get("/atendimentos/:id", (req, res) => {

    let id = req.params.id;

    Atendimento.listarPorId(id, res);

  });

  app.post("/atendimentos", (req, res) => {

    let atendimento = req.body;
    Atendimento.adicionar(atendimento, res);

  });
}
