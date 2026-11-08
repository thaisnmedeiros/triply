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

module.exports = {
    listarGastos
};