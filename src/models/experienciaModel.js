var database = require("../database/config");

// Cadastra uma roteiro na viagem
function cadastrarAtividade(nome, dataExperiencia, fkViagem) {

    var instrucaoSql = `
        INSERT INTO experiencia (nome, dataExperiencia, fkViagem)
        VALUES (?, ?, ?);
    `;

    var valores = [nome, dataExperiencia, fkViagem];

    return database.executar(instrucaoSql, valores);
}

// Lista as atividades cadastradas para uma viagem
// ordena de forma cronológica
function listarAtividades(fkViagem) {

    var instrucaoSql = `
        SELECT *
        FROM experiencia
        WHERE fkViagem = ?
        ORDER BY dataExperiencia;
    `;

    return database.executar(instrucaoSql, [fkViagem]);
}

module.exports = {
    cadastrarAtividade,
    listarAtividades
};