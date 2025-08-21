# Pokédex com Angular

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

Uma aplicação web moderna e interativa para explorar o mundo dos Pokémon, construída com o framework Angular. Este projeto serve como uma imersão profunda na arquitetura de componentes, consumo de APIs e desenvolvimento com TypeScript, representando o segundo grande marco na minha jornada de desenvolvimento front-end.

---

### A Jornada

Após dominar os fundamentos do JavaScript puro, o objetivo deste projeto é dar o próximo passo rumo ao desenvolvimento sênior: aprender a construir aplicações escaláveis e organizadas com um framework moderno.

A escolha do Angular foi estratégica para aprender sobre arquitetura de software, TypeScript e as ferramentas que grandes empresas utilizam. A Pokédex é o caso de uso perfeito, pois exige a listagem de uma grande quantidade de dados, a interação com uma API externa (PokéAPI) e a criação de múltiplas "telas" (uma lista geral e, futuramente, uma página de detalhes para cada Pokémon).

### Tecnologias Utilizadas

* **Angular (v18+):** O framework principal para estruturar toda a aplicação de forma componentizada e reativa.
* **TypeScript:** Utilizado para adicionar tipagem estática ao JavaScript, tornando o código mais robusto, previsível e fácil de manter.
* **Angular CLI:** A ferramenta de linha de comando oficial para gerar componentes, serviços e gerenciar o projeto.
* **PokéAPI:** A API REST pública utilizada como fonte de todos os dados dos Pokémon.
* **CSS3:** Para a estilização completa e criação de um design temático, responsivo e agradável.
* **Git & GitHub:** Para controle de versão e publicação do projeto.

### Principais Funcionalidades (Em Desenvolvimento)

* **Listagem Dinâmica:** Busca e exibe a primeira geração de Pokémon ao carregar a página.
* **Arquitetura Baseada em Serviços:** A lógica de chamada de API é isolada em um serviço injetável, seguindo as melhores práticas do Angular.
* **Componentização:** A interface é dividida em componentes reutilizáveis (ex: um `AppComponent` principal e um `PokemonCardComponent` para cada Pokémon).
* **Comunicação entre Componentes:** O componente pai passa os dados para os componentes filhos através de `@Input()`.
* **(Futuro) Roteamento:** Implementação de rotas para navegar entre a lista principal e a página de detalhes de cada Pokémon.
* **(Futuro) Paginação:** Carregamento de mais Pokémon conforme o usuário interage com a página.

---

### Como Rodar o Projeto Localmente

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/alvarogabandim/pokedex.git](https://github.com/alvarogabandim/pokedex.git)
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd pokedex
    ```
3.  **Instale as dependências:** (Este comando lê o arquivo `package.json` e baixa todas as ferramentas que o projeto precisa, como o Angular)
    ```bash
    npm install
    ```
4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    ng serve --open
    ```
    A aplicação estará disponível em `http://localhost:4200/`.

---

### O Que Eu Aprendi (Até Agora)

* **Setup de Ambiente Profissional:** Instalação e uso do Node.js, NPM e Angular CLI para criar e gerenciar um projeto do zero.
* **Arquitetura de Componentes:** Como pensar e estruturar uma aplicação em pequenos pedaços reutilizáveis, cada um com sua própria lógica, template e estilo.
* **Serviços e Injeção de Dependência:** A maneira correta de organizar e compartilhar código e lógica de negócios (como chamadas de API) através da aplicação.
* **TypeScript na Prática:** A importância da tipagem para criar um código mais seguro e legível.
* **Data Binding em Angular:** Utilização de diretivas como `*ngFor` e *property binding* (`[propriedade]`) para conectar os dados da lógica do componente com o template HTML.
* **Depuração de um Ambiente Moderno:** Diagnóstico de erros de compilação e importação de módulos/componentes.
