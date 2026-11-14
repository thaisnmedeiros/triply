// Para criar o segundo gráfico da pagina minhas-viagens que mostrará o percentual de checklists feitos

var database = require("../database/config");

//consulta o progresso dos checklists das viagens do usuário
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

// Cadastra uma nova tarefa no checklist da viagem
function cadastrarTarefa(tarefa, fkViagem) {

    var instrucaoSql = `
        INSERT INTO checklist (tarefa, fkViagem)
        VALUES (?, ?);
    `;

    var valores = [tarefa, fkViagem];

    return database.executar(instrucaoSql, valores);
}

// lista as tarefas do checklist de uma viagem especifica
function listarTarefas(fkViagem) {

    var instrucaoSql = `
        SELECT *
        FROM checklist
        WHERE fkViagem = ?;
    `;

    return database.executar(instrucaoSql, [fkViagem]);
}

module.exports = {
    listarProgresso,
    cadastrarTarefa,
    listarTarefas
};