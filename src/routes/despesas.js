// para a KPI 4 da dashboard, de saldo disponivel
var express = require("express");
var router = express.Router();

var despesaController = require("../controllers/despesaController");

// Consulta os gastos das viagens do usuário
router.get("/gastos/:fkUsuario", function (req, res) {
    despesaController.listarGastos(req, res);
});

module.exports = router;

//    GET: consulta informações.