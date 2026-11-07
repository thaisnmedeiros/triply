var express = require("express"); /*Cria a API */
var router = express.Router(); /* Organiza o caminho que a api pode receber */

var viagemController = require("../controllers/viagemController"); /* recebe e trata os dados que o formulario de "nova viagem" vai dar */

/* essa parte recebe a solicitação de cadastrar nova viagem */
router.post("/cadastrar", function (req, res) { /* é a solicitacao recebida/ dados enviados */
    viagemController.cadastrar(req, res); /*resposta que o servidor envia pro navegador */
});
/* O GET consulta as informacoes que no caso sao as viagens cadastradas */
router.get("/listar/:fkUsuario", function (req, res) {
    viagemController.listarPorUsuario(req, res);
});

module.exports = router;