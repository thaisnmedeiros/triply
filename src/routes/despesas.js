// para a KPI 4 da dashboard, de saldo disponivel
var express = require("express");
var router = express.Router();

var despesaController = require("../controllers/despesaController");

// Consulta os gastos das viagens do usuário
router.get("/gastos/:fkUsuario", function (req, res) {
    despesaController.listarGastos(req, res);
});


//KPI 2 de dashboard individual por viagem
//cria uma rota para consultar informações da viagem, recebe o ID da viagem e chama a função controller
router.get("/previstas/:fkViagem", function (req, res) {
    despesaController.buscarDespesasPrevistas(req, res);
});

// dashboard individual por viagem - cadastra uma nova despesa para a viagem selecionada
// usa POST porque é um INSERT no banco de dados
router.post("/cadastrar", function (req, res) {
    despesaController.cadastrarDespesa(req, res);
});

// Lista as despesas cadastradas de uma viagem
router.get("/listar/:fkViagem", function (req, res) {
    despesaController.listarDespesas(req, res);
});

module.exports = router;

//    GET: consulta informações.