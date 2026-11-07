/* conecta com o banco de dados */
var database = require("../database/config");

function cadastrar(titulo, descricao, destino, pais, dataInicio, dataFim, orcamento, status, fkUsuario) {

    var instrucaoSql = `
        INSERT INTO viagem
        (titulo, descricao, destino, pais, dataInicio, dataFim, orcamento, status, fkUsuario)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    var valores = [
        titulo,
        descricao,
        destino,
        pais,
        dataInicio,
        dataFim,
        orcamento,
        status,
        fkUsuario
    ];

    return database.executar(instrucaoSql, valores);
}

module.exports = {
    cadastrar
};