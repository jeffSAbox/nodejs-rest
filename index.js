const configExpress = require("./config/configExpress");
const conexao = require("./infra/conexao");

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')
    }
});

const app = configExpress();
