<h4 align="center">
    <img alt="Logo" title="#logo" width="300px" src=".github/logo.png">
    <br><br>
    <b>Sistema de Coleta de Resíduos</b> 
</h4>

<p align="center">
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>
  <a>
  <img alt="License" src="https://img.shields.io/github/license/vitorserrano/ecoleta?color=%237519C1">
</p>

## Índice

- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Como Instalar](#instalar)
- [Contribuições](#contribuir)

<a id="sobre"></a>

## Sobre

O Ecoleta é uma aplicação que auxilia pessoas na busca por pontos de coleta de resíduos e demais itens que são descartados.

<a id="tecnologias"></a>

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias.

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)

<a id="instalar"></a>

## Como Instalar

- ### **Pré-requisitos**

  - Primeiro você **precisa** ter o **[Node.js](https://nodejs.org/en/)** instalado em sua  máquina.
  - Também é **preciso** ter um gerenciador de pacotes: **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - E, para rodar a aplicação mobile é **essencial** ter o **[Expo](https://expo.io/)** instalado de forma global em sua máquina.

1. Faça o clone do projeto :

```sh
  $ git clone https://github.com/IdenilsonSantos/Ecoleta.git
```

2. Executando a Aplicação:

```sh
  # Instale as dependências
  $ npm install

  ## Crie o banco de dados
  $ cd server
  $ npm run knex:migrate
  $ npm run knex:seed

  # Inicie a API
  $ npm run dev

  # Inicie a aplicação web
  $ cd web
  $ npm start

  # Inicie a aplicação mobile
  $ cd mobile
  $ npm start
```

<a id="contribuir"></a>

## Como contribuir

- Faça um Fork desse repositório,
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Commit suas mudanças: `git commit -m 'feat: My new feature'`
- Push a sua branch: `git push origin my-feature`

## License

Esse projeto está sob a licença MIT.