var express = require("express"); /*Cria a API */
var router = express.Router(); /* Organiza o caminho que a api pode receber */

var viagemController = require("../controllers/viagemController"); /* recebe e trata os dados que o formulario de "nova viagem" vai dar */

router.post("/cadastrar", function (req, res) { /* é a solicitacao recebida/ dados enviados */
    viagemController.cadastrar(req, res); /*resposta que o servidor envia pro navegador */
});

module.exports = router;

/* essa parte recebe a solicitação de cadastrar nova viagem */