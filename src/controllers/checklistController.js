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

module.exports = {
    listarProgresso,
    cadastrarTarefa,
    listarTarefas
};

//O model vai consultar o banco e retornar:
// [{
//        fkViagem: 1,
//      totalTarefas: 3,
//        tarefasConcluidas: 
// }]