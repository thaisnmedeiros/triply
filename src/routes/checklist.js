var express = require("express");
var router = express.Router();

var checklistController = require("../controllers/checklistController");

// Consulta o progresso dos preparativos do usuário pra o grafico de barra 
router.get("/progresso/:fkUsuario", function (req, res) {
    checklistController.listarProgresso(req, res);
});

// Cadastra uma nova tarefa no checklist da viagem
router.post("/cadastrar", function (req, res) {
    checklistController.cadastrarTarefa(req, res);
});

// Lista as tarefas cadastradas de uma viagem
router.get("/listar/:fkViagem", function (req, res) {
    checklistController.listarTarefas(req, res);
});

// Atualiza o status de uma tarefa do checklist quando o usuario marca ou desmarca (atualializa a coluna "concluida" pra 0 ou 1)
router.put("/atualizar", function (req, res) {
    checklistController.atualizarTarefa(req, res);
});

module.exports = router;

//GET - CONSULTA INFORMAÇÕES
//POST - CADASTRA INFORMAÇÕES
//PUT - ATUALIZA INFORMAÇÕES