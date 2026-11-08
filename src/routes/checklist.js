var express = require("express");
var router = express.Router();

var checklistController = require("../controllers/checklistController");

// Consulta o progresso dos preparativos do usuário
router.get("/progresso/:fkUsuario", function (req, res) {
    checklistController.listarProgresso(req, res);
});

module.exports = router;