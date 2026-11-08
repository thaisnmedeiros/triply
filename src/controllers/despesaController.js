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

module.exports = {
    listarGastos
};