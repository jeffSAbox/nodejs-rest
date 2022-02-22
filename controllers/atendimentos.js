const { criarAtendimentos } = require("../infra/tabelas");
const Atendimento = require("../models/atendimento");

module.exports = app => {

  app.get("/atendimentos", (req, res) => {
    
    Atendimento.listarTodos(res);

  });

  app.get("/atendimentos/:id", (req, res) => {

    let id = parseInt(req.params.id);
    Atendimento.listarPorId(id, res);

  });

  app.post("/atendimentos", (req, res) => {

    let atendimento = req.body;
    Atendimento.adicionar(atendimento, res);

  });

  app.patch("/atendimentos/:id", (req, res) => {

    let id = parseInt(req.params.id);
    let atualizacoes = req.body;

    Atendimento.atualizar(id, atualizacoes, res);

  });

  app.delete("/atendimentos/:id", (req, res) => {

    let id = parseInt(req.params.id);

    Atendimento.deletar(id, res);

  });

}
