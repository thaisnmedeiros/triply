var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email
        FROM usuario
        WHERE email = ? AND senha = SHA2(?, 256);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [email, senha]);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    // retorna a senha com 64 hexadecimais pra a senha nao ir para o banco de dados
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha)
        VALUES (?, ?, SHA2(?, 256));
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [nome, email, senha]);
}

module.exports = {
    autenticar,
    cadastrar
};


// Implementei a função SHA2() no cadastro e no login do Triply para evitar que as senhas sejam armazenadas em texto puro no banco de dados. 
// No cadastro, a senha passa pela função SHA2() antes de ser salva, gerando um hash. Já no login, a senha digitada passa pela mesma função e 
// o resultado é comparado com o hash armazenado no MySQL. 