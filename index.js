const express = require('express');

const app = express();

app.listen(3000, () => console.log('servidor rodando'));

app.get("/", (req, res) => res.send("Bem vindo!"));
app.get("/atendimentos", (req, res) => res.send("rota de atendimentos"));
