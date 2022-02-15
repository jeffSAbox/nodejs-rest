const configExpress = require("./config/configExpress");
const conexao = require("./infra/conexao");
const tabelas = require("./infra/tabelas");

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')

        tabelas.init(conexao);
        const app = configExpress();

        app.listen(3000, () => {console.log('Servidor rodando...')});
    }
});
