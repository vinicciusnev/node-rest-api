📄 Ficha-Resumo: Pesquisa sobre Padrões de Projeto para API REST em Node.js
1. Introdução
O uso de padrões de projeto (Design Patterns) é essencial no desenvolvimento de APIs REST para garantir que o código seja organizado, escalável e de fácil manutenção. Em projetos Node.js usando Express, adotar padrões bem definidos evita o acúmulo de código "espaguete" e facilita o crescimento do sistema.

2. Principais Padrões Utilizados
MVC (Model-View-Controller): Organiza o projeto separando a lógica de negócios (Model), a manipulação das requisições (Controller) e a resposta para o cliente (View, embora em API REST a "View" geralmente seja o JSON retornado).

Repository Pattern: Abstrai o acesso a dados, isolando a lógica de acesso ao banco de dados.

Service Layer Pattern: Coloca regras de negócio em uma camada intermediária entre Controller e Repository.

Factory Pattern: Cria objetos de forma centralizada.

Singleton Pattern: Garante que uma única instância de um objeto exista durante a aplicação (muito usado para conexões com banco de dados).

3. Padrão Escolhido para Exemplo
✅ Padrão MVC (Model-View-Controller)

Motivo: É o padrão mais adequado para organização de APIs REST em Node.js, separando claramente responsabilidades.