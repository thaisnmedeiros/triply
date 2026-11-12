// para a KPI 4 da dashboard, de saldo disponivel

var database = require("../database/config");

function listarGastos(fkUsuario) {

    var instrucaoSql = `
        SELECT
            d.fkViagem,
            SUM(d.valorRealizado) AS totalGasto
        FROM despesa d
        JOIN viagem v ON d.fkViagem = v.idViagem
        WHERE v.fkUsuario = ?
        GROUP BY d.fkViagem;
    `;

    return database.executar(instrucaoSql, [fkUsuario]);
}

// KPI 2 da dashboard individual por viagem
function buscarDespesasPrevistas(fkViagem) {

    var instrucaoSql = `
        SELECT SUM(valorPrevisto) AS totalPrevisto
        FROM despesa
        WHERE fkViagem = ?;
    `;

    return database.executar(instrucaoSql, [fkViagem]);
}

// Tela de dashboard individual de viagem - cadastra uma despesa vinculada a uma viagem
function cadastrarDespesa(descricao, categoria, valorPrevisto, valorRealizado, status, fkViagem) {

    var instrucaoSql = `
        INSERT INTO despesa
        (descricao, categoria, valorPrevisto, valorRealizado, status, fkViagem)
        VALUES (?, ?, ?, ?, ?, ?);
    `;

    var valores = [descricao, categoria, valorPrevisto, valorRealizado, status, fkViagem];

    return database.executar(instrucaoSql, valores);
}

// Lista as despesas cadastradas para uma viagem
function listarDespesas(fkViagem) {

    var instrucaoSql = `
        SELECT *
        FROM despesa
        WHERE fkViagem = ?;
    `;

    return database.executar(instrucaoSql, [fkViagem]);
}

module.exports = {
    listarGastos,
    buscarDespesasPrevistas,
    cadastrarDespesa,
    listarDespesas
};