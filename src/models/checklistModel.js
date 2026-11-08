// Para criar o segundo gráfico da pagina minhas-viagens que mostrará o percentual de checklists feitos

var database = require("../database/config");

function listarProgresso(fkUsuario) {

    var instrucaoSql = `
        SELECT
            c.fkViagem,
            COUNT(*) AS totalTarefas,
            SUM(c.concluida) AS tarefasConcluidas
        FROM checklist c
        JOIN viagem v ON c.fkViagem = v.idViagem
        WHERE v.fkUsuario = ?
        GROUP BY c.fkViagem;
    `;

    return database.executar(instrucaoSql, [fkUsuario]);
}

module.exports = {
    listarProgresso
};