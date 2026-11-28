// Abre e fecha o submenu de viagens
//através do DOM, o HTML deixa o JS acessar e modificar elementos da pagina
function alternarMenuViagens() {

    let submenu = document.getElementById("submenu_viagens");
    let seta = document.getElementById("seta_viagens");

    if (submenu.style.display == "block") {
        submenu.style.display = "none";
        seta.innerHTML = "▾";

    } else {
        //se o menu estiver aberto, a ação do "botão" é fechar e vice versa ("alternância de estado")
        submenu.style.display = "block";
        seta.innerHTML = "▴";
    }
}

// Busca as viagens cadastradas pelo usuário
function carregarMenuViagens() {

    //tenta identificar o id do usuario que ta logado pra buscar as viagens que ele tem
    let idUsuario = sessionStorage.ID_USUARIO;

    //se nao tiver um usuario armazenado, encerra a função
    if (!idUsuario) {
        return;
    }

    // faz uma requisição pra o backend listar as viagens de um usuario
    fetch(`/viagens/listar/${idUsuario}`)

        //mostra o que acontece quando a resposta for concluida
        .then(function (resposta) {
            //converte pra dados que posso manipular no JS, ex: [{"id viagem":1, "titulo": X}, {viagem2}]
            return resposta.json();
        })

        //trabalha com os dados convertidos
        .then(function (viagens) {
            let lista = document.getElementById("lista_menu_viagens");
            lista.innerHTML = "";
            //percorre o JS de viagens e lista, ex: i = 0 é recife, i = 1 é Mossoró
            for (let i = 0; i < viagens.length; i++) {
                //coloca o destino do link quando a pessoa clicar na viagem que quer ver
                // mesma coisa de <a href="minha-viagem.html"></a>
                let link = document.createElement("a");
                link.href = "minha-viagem.html";
                // mostra o titulo da viagem, como se fosse <a href="minha-viagem.html">Férias em Recife</a>
                link.textContent = viagens[i].titulo;

                //é uma função anônima que é executada quando o usuario clicar no link
                link.onclick = function () {
                    //vincula o que foi clicaco ao ID da viagem clicada
                    sessionStorage.ID_VIAGEM = viagens[i].idViagem;
                };

                if (
                    window.location.pathname.endsWith("minha-viagem.html") &&
                    sessionStorage.ID_VIAGEM == viagens[i].idViagem
                ) {
                    link.className = "viagem-selecionada";
                }

                //coloca as viagens como se fosse "filho" do botao "Minhas viagens". quando clica aparecem embaixo, depois de passar pelo for
                lista.appendChild(link);
            }

        })

        .catch(function (erro) {
            console.log("Erro ao carregar menu de viagens:", erro);
        });
}

//executa a função automaticamente quando o HTML carrega, parece com o onclick, mas ativa um evento no JS pra mostrar as viagens
document.addEventListener("DOMContentLoaded", carregarMenuViagens);