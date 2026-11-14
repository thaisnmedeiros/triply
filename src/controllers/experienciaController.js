var experienciaModel = require("../models/experienciaModel");

// Cadastra uma atividade no roteiro da viagem
function cadastrarAtividade(req, res) {

    // recupera os dados enviados pelo formulário
    let nome = req.body.nomeServer;
    let dataExperiencia = req.body.dataExperienciaServer;
    let fkViagem = req.body.fkViagemServer;

    // ve se os campos foram preenchidos
    if (nome == undefined || nome == "" ||
        dataExperiencia == undefined || dataExperiencia == "" ||
        fkViagem == undefined || fkViagem == "") {

        res.status(400).send("Preencha todos os campos!");

    } else {

        experienciaModel.cadastrarAtividade(nome, dataExperiencia, fkViagem)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log("Erro ao cadastrar atividade:", erro);
                res.status(500).send("Erro ao cadastrar atividade!");
            });
    }
}

// Lista as atividades cadastradas no roteiro da viagem
function listarAtividades(req, res) {

    // Recupera o ID da viagem enviado pela URL
    let fkViagem = req.params.fkViagem;

    if (fkViagem == undefined) {
        res.status(400).send("A viagem não foi identificada!");

    } else {

        experienciaModel.listarAtividades(fkViagem)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log("Erro ao listar atividades:", erro);
                res.status(500).send("Erro ao listar atividades!");
            });
    }
}

module.exports = {
    cadastrarAtividade,
    listarAtividades
};