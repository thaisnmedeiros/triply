var express = require("express");
var router = express.Router();

var experienciaController = require("../controllers/experienciaController");

// Cadastra uma atividade no roteiro da viagem
router.post("/cadastrar", function (req, res) {
    experienciaController.cadastrarAtividade(req, res);
});

// Lista as atividades cadastradas de uma viagem
router.get("/listar/:fkViagem", function (req, res) {
    experienciaController.listarAtividades(req, res);
});

module.exports = router;