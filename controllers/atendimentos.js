module.exports = app => {
  app.get("/atendimentos", (req, res) => res.send("rota de atendimentos"));


  app.post("/atendimentos", (req, res) => {
    console.log(req.body);
    res.send("roda de atendimentos via POST")

  });
}
