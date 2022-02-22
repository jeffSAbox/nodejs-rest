const conexao = require("../infra/conexao");
const moment = require("moment");

class Atendimento{

  adicionar(atendimento, res)
  {

    let sql = 'INSERT INTO Atendimentos SET ?'
    let dataCriacao = new Date();
    let data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
    let arr_atendimento = {...atendimento, dataCriacao, data};

    conexao.query(sql, arr_atendimento, (erro, resultados) => {
        if(erro) {
            res.status(400).json(erro);
        } else {
            res.status(200).json(resultados);
        }
    })

  }

  listarTodos(res)
  {
    let sql = "SELECT * FROM Atendimentos";

    conexao.query(sql, (erro, resultado) => {
      if(erro)
      {
        res.status(400).send(erro);
      }
      else
      {
        res.status(200).send(resultado);
      }
    });
  }

  listarPorId(id, res)
  {

    let sql = `SELECT * FROM Atendimentos WHERE id=${id}`;

    conexao.query(sql, (erro, resultados) => {

      if( erro )
      {
        res.status(400).send(erro);
      }
      else
      {
        let result_atendimento = resultados[0];
        res.status(200).send(result_atendimento);
      }

    });

  }

  atualizar(id, atualizacoes, res)
  {

    let sql = "UPDATE Atendimentos SET ? WHERE id = ?";

    if( atualizacoes.data )
    {
      atualizacoes.data = moment(atualizacoes.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
    }

    conexao.query(sql, [atualizacoes, id], (erro, resposta) => {

      if( erro )
      {
        res.status(400).json(resposta);
      }
      else
      {
        res.status(200).json(resposta);
      }

    });

  }

}

module.exports = new Atendimento;
