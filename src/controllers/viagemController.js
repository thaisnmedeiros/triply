/* é responsável por receber os dados da viagem, verificar se as informações necessárias foram enviadas e encaminhá-las ao Model para salvar no banco de dados */


var viagemModel = require("../models/viagemModel");

function cadastrar(req, res) {

    let titulo = req.body.tituloServer;
    let imagemCapa = req.body.imagemCapaServer;
    let descricao = req.body.descricaoServer;
    let destino = req.body.destinoServer;
    let pais = req.body.paisServer;
    let dataInicio = req.body.dataInicioServer;
    let dataFim = req.body.dataFimServer;
    let orcamento = req.body.orcamentoServer;
    let status = req.body.statusServer;
    let fkUsuario = req.body.fkUsuarioServer;

    if (titulo == undefined) {
        res.status(400).send("O nome da viagem não foi informado!");
    } else if (destino == undefined) {
        res.status(400).send("O destino não foi informado!");
    } else if (dataInicio == undefined) {
        res.status(400).send("A data de início não foi informada!");
    } else if (dataFim == undefined) {
        res.status(400).send("A data de término não foi informada!");
    } else if (orcamento == undefined) {
        res.status(400).send("O orçamento não foi informado!");
    } else if (status == undefined) {
        res.status(400).send("O status não foi informado!");
    } else if (imagemCapa == undefined || imagemCapa == "") {
        res.status(400).send("A imagem da viagem não foi selecionada!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("O usuário não foi identificado!");
    } else {

        viagemModel.cadastrar(
            titulo,
            descricao,
            destino,
            pais,
            dataInicio,
            dataFim,
            orcamento,
            status,
            fkUsuario
        )
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function listarPorUsuario(req, res) {
    /*retorna as viagens por usuario */

    let fkUsuario = req.params.fkUsuario;

    if (fkUsuario == undefined) {
        res.status(400).send("O usuário não foi identificado!");
    } else {

        viagemModel.listarPorUsuario(fkUsuario)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    cadastrar,
    listarPorUsuario
};