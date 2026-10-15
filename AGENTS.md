# # [AGENTS.md](http://AGENTS.md)

## Visão geral

Estou desenvolvendo o Triply como projeto individual de Pesquisa e Inovação, no primeiro semestre de Análise e Desenvolvimento de Sistemas da São Paulo Tech School.

A proposta é reunir roteiro, gastos e preparativos da viagem em um só lugar, para facilitar o planejamento de quem quer viajar.

Estou usando a Web Data Viz disponibilizada pela faculdade como base. 

## Tecnologias

O projeto utiliza:

- HTML para montar as páginas.
- CSS para o visual.
- JavaScript para as interações.
- Node.js e Express para o backend.
- MySQL para guardar os dados.
- Chart.js para os gráficos.
- Git e GitHub para salvar o histórico do projeto.



## Comandos

Rodar no terminal, dentro da pasta do Triply:

- npm install: instala as dependências.
- node app.js: inicia o servidor.
- git status: mostra o que foi alterado.
- git add caminho/do/arquivo: prepara o arquivo para o commit.
- git commit -m "mensagem": cria o commit.
- git push origin main: envia para o GitHub.

Antes de iniciar, conferir a conexão com o banco no arquivo de ambiente.

## Arquitetura

Vou manter a organização da Web Data Viz, conforme a orientação do professor.

- public/: páginas HTML.
- public/css/: estilos.
- public/js/: JavaScript das páginas.
- public/assets/: imagens e ícones.
- public/dashboard/: páginas da dashboard.
- src/routes/: rotas da API.
- src/controllers/: valida os dados e responde às requisições.
- src/models/: faz as consultas no banco.
- src/database/: configura a conexão com o banco.
- app.js: configura e inicia o servidor.



### Como uma requisição funciona

A página usa fetch para chamar uma rota da API. A rota chama o controller, que verifica os dados e pede ao model a operação no banco. O resultado volta ao controller, que responde à página.

### Onde colocar novos arquivos

Seguir as pastas descritas acima. Por exemplo, uma nova página de cadastro fica em public/ e seu CSS em public/css/, com o link incluído no HTML.

Guardar imagens em public/assets/imgs/ e scripts do navegador em public/js/. Deixar no estilo.css apenas os estilos usados por mais de uma página.

No backend, manter as rotas, o tratamento das requisições e as consultas separados em routes, controllers e models. Usar as funções existentes como referência.

## Padrões de desenvolvimento

- Dar nomes claros, em português, como nomeViagem e cadastrarUsuario.
- Nas classes CSS, seguir o formato banner-textos.
- Usar const quando não houver reatribuição e let quando houver.
- Manter a indentação e comentar apenas o que precisar de explicação.
- Escrever os textos do site em português.
- Explicar conceitos novos usados nas alterações.
- Seguir o protótipo do Triply: fundo branco, roxo #820AD1 e detalhes em rosa.



## Commits

Fazer commits conforme as etapas forem concluídas, agrupando alterações relacionadas e explicando o que mudou.

O formato utilizado será:

```
tipo(escopo): descrição da alteração
```

O escopo identifica a parte do projeto, como inicio, cadastro ou login. Ele é opcional.

### Tipos de commits

Fazer um commit ao concluir cada etapa, com uma mensagem curta sobre a alteração.

- feat: adicionar algo novo.
- fix: corrigir um erro.
- docs: atualizar a documentação.
- chore: ajustar configurações do projeto.

Exemplos:

```
feat(inicio): adiciona botões do banner

fix(inicio): corrige tamanho da imagem

docs: adiciona [AGENTS.md](http://AGENTS.md)

chore: atualiza gitignore
```

Antes do commit, testar a alteração e conferir os arquivos selecionados. Ao finalizar uma tarefa, sugerir a mensagem do commit.

## Cuidados e restrições

- Manter a estrutura da Web Data Viz e seguir as orientações dos professores.
- Antes de remover arquivos, rotas ou tabelas, conferir se ainda são usados. Isso inclui a tabela empresa.
- Mudar apenas o necessário para a tarefa. Combinar comigo antes de adicionar bibliotecas ou tecnologias.
- Não incluir senhas ou tokens no código e nos commits. Manter node_modules/, .env e .[env.dev](http://env.dev) no .gitignore.
- Pedir autorização antes de apagar dados, descartar alterações locais ou fazer push forçado.
- Testar as mudanças e avisar o que ficou sem verificar. Se alterar um CSS compartilhado, conferir também as outras páginas.



## Regra geral

Consultar este arquivo antes de começar. Se alguma orientação estiver faltando, seguir o padrão do código existente.

Se precisar mudar o escopo ou fazer algo além do pedido, conversar comigo primeiro.

## Orientações da atividade

- Seguir os materiais e a arquitetura fornecidos pela faculdade.
- Usar outra tecnologia somente com justificativa e aprovação prévia do professor.
- Usar IA como apoio e registrar no Diário de Prompts o que pedi, aproveitei e alterei, indicando a ferramenta utilizada.
- Desenvolver por etapas, entendendo o código e conseguindo explicar cada parte.
- Manter o planejamento no Trello, os commits frequentes e os reports no Moodle.
- Configurar uma VM Linux somente para o banco de dados.