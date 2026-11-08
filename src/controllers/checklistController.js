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

module.exports = {
    listarProgresso
};

//O model vai consultar o banco e retornar:
// [{
//        fkViagem: 1,
//      totalTarefas: 3,
//        tarefasConcluidas: 
// }]