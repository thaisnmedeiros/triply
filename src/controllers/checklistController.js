// Importa o Model do checklist
var checklistModel = require("../models/checklistModel");

function listarProgresso(req, res) {
    // Recupera o ID do usuário informado na rota
    let fkUsuario = req.params.fkUsuario;

    if (fkUsuario == undefined) {
        res.status(400).send("O usuário não foi identificado!");
    } else {

        checklistModel.listarProgresso(fkUsuario)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).send("Erro ao consultar o checklist!");
            });
    }
}

// Cadastra uma nova tarefa no checklist da viagem
function cadastrarTarefa(req, res) {
    //recebe o texto da tarefa que o usuario colocar
    let tarefa = req.body.tarefaServer;
    //recebe o id da viagem
    let fkViagem = req.body.fkViagemServer;

    if (tarefa == undefined || tarefa == "" ||
        fkViagem == undefined || fkViagem == "") {

        res.status(400).send("Preencha a tarefa e identifique a viagem!");

    } else {
        //o controller chama checklistModel.cadastrarTarefa() para salvar a tarefa no MySQL
        checklistModel.cadastrarTarefa(tarefa, fkViagem)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log("Erro ao cadastrar tarefa:", erro);
                res.status(500).send("Erro ao cadastrar tarefa!");
            });
    }
}

// lista as tarefas cadastradas no checklist da viagem
function listarTarefas(req, res) {

    // recupera o ID da viagem
    let fkViagem = req.params.fkViagem;

    if (fkViagem == undefined) {
        res.status(400).send("A viagem não foi identificada!");
    } else {

        checklistModel.listarTarefas(fkViagem)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log("Erro ao listar tarefas:", erro);
                res.status(500).send("Erro ao listar tarefas!");
            });
    }
}

// Atualiza uma tarefa do checklist quando o usuario marca ou desmarca o checklist (atualiza o valor p/ 0 ou 1)
function atualizarTarefa(req, res) {

    // Recupera os dados enviados pelo JavaScript
    let idChecklist = req.body.idChecklistServer;
    let concluida = req.body.concluidaServer;
    let fkViagem = req.body.fkViagemServer;

    // Verifica se os dados foram enviados
    if (idChecklist == undefined ||
        concluida == undefined ||
        fkViagem == undefined) {

        res.status(400).send("Dados da tarefa não informados!");

    } else if (concluida != 0 && concluida != 1) {

        res.status(400).send("Status da tarefa inválido!");

    } else {

        checklistModel.atualizarTarefa(idChecklist, concluida, fkViagem)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log("Erro ao atualizar tarefa:", erro);
                res.status(500).send("Erro ao atualizar tarefa!");
            });
    }
}

module.exports = {
    listarProgresso,
    cadastrarTarefa,
    listarTarefas,
    atualizarTarefa
};

//O model vai consultar o banco e retornar:
// [{
//        fkViagem: 1,
//      totalTarefas: 3,
//        tarefasConcluidas: 
// }]