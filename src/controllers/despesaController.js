// para a KPI 4 das despesas, de saldo disponivel 
var despesaModel = require("../models/despesaModel");

function listarGastos(req, res) {

    let fkUsuario = req.params.fkUsuario;

    if (fkUsuario == undefined) {
        res.status(400).send("O usuário não foi identificado!");
    } else {

        despesaModel.listarGastos(fkUsuario)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).send("Erro ao consultar as despesas!");
            });
    }
}

// pra vincular a KPI 2 da dashboard individual por viagem
function buscarDespesasPrevistas(req, res) {

    // recupera o ID da viagem enviado pela rota. ex: gramado tem id = 3
    let fkViagem = req.params.fkViagem;

    if (fkViagem == undefined) {
        res.status(400).send("A viagem não foi identificada!");
    } else {

        //consulta no SQL de acordo com o fkViagem
        despesaModel.buscarDespesasPrevistas(fkViagem)
            .then(function (resultado) {
                //envia os dados encontrados da viagem pra dashboard
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

// Dashboard individual por viagem - cadastra uma nova despesa para a viagem selecionada
function cadastrarDespesa(req, res) {

    // Recupera os dados enviados pelo formulário
    let descricao = req.body.descricaoServer;
    let categoria = req.body.categoriaServer;
    let valorPrevisto = req.body.valorPrevistoServer;
    let valorRealizado = req.body.valorRealizadoServer;
    let status = req.body.statusServer;
    let fkViagem = req.body.fkViagemServer;

    // Valida os campos obrigatórios
    if (descricao == undefined || descricao == "" ||
        categoria == undefined || categoria == "" ||
        valorPrevisto == undefined || valorPrevisto === "" ||
        status == undefined || status == "" ||
        fkViagem == undefined || fkViagem == "") {

        res.status(400).send("Preencha todos os campos obrigatórios!");
    } else {
        // Se a despesa ainda não foi paga, não há valor realizado
        if (status == "Prevista") {
            valorRealizado = null;
        }

        despesaModel.cadastrarDespesa(
            descricao,
            categoria,
            valorPrevisto,
            valorRealizado,
            status,
            fkViagem
        )
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log("Erro ao cadastrar despesa:", erro);
                res.status(500).send("Erro ao cadastrar despesa!");
            });
    }
}

// Lista as despesas cadastradas de uma viagem
function listarDespesas(req, res) {

    // Recupera o ID da viagem
    let fkViagem = req.params.fkViagem;

    if (fkViagem == undefined) {
        res.status(400).send("A viagem não foi identificada!");
    } else {

        despesaModel.listarDespesas(fkViagem)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log("Erro ao listar despesas:", erro);
                res.status(500).send("Erro ao listar despesas!");
            });
    }
}

module.exports = {
    listarGastos,
    buscarDespesasPrevistas,
    cadastrarDespesa,
    listarDespesas
};