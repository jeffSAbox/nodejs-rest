const conexao = require("../infra/conexao");
const moment = require("moment");

class Atendimento{

  adicionar(atendimento){

    let sql = 'INSERT INTO Atendimentos SET ?'
    let dataCriacao = new Date();
    let data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
    let arr_atendimento = {...atendimento, dataCriacao, data};

    conexao.query(sql, arr_atendimento, (erro, resultados) => {
        if(erro) {
            console.log(erro)
        } else {
            console.log(resultados)
        }
    })

  }

}

module.exports = new Atendimento;
