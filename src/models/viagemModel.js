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

function listarPorUsuario(fkUsuario) {
    /*listarPorUsuario*/

    var instrucaoSql = `
        SELECT * FROM viagem
        WHERE fkUsuario = ?;
    `;

    return database.executar(instrucaoSql, [fkUsuario]);
}

module.exports = {
    cadastrar,
    listarPorUsuario
};