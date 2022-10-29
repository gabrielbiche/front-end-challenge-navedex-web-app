# Navedex web app

## O Sistema
O sistema consiste em um web app para criação e visualização de navers, possuindo informações como: nomes, idades, cargos, tempo de empresa e projetos que participou.

## API
A documentação de teste oficial da API pode se utilizada com **Postman** e está disponível na raiz do projeto. A API pode ser encontrada [**aqui**](https://navedex-api.herokuapp.com/v1/), após realizar a importação da documentação Postman faça seu cadastro utilizando email e senha na request ``` users/signup ```.

## Tecnologias utilizadas
React com JavaScript, Styled Components, Styled System e axios.

## Figma
As telas do figma fornecidas par o desenvolvimento do projeto podem ser contradas [**aqui**](https://www.figma.com/file/II8UDFm2uJFZaD0FOPcinP/Teste-Front-End?node-id=1%3A66).

## Siga os passos abaixo para executar o projeto

1. Renomeie o arquivo da raiz do projeto chamado .env.example para .env e neste defina a url para consumo da API

2. Inicie as dependências do projeto
```
 npm install
```

3. Inicie o servidor
```
npm run start
``` 

**_Vide seção scripts em package.json na raiz do projeto para conhecimento de comandos auxiliares._**

## Estrutura de diretórios

```
├── /src
|   ├── /assets
|   ├── /components
|   ├── /context
|   ├── /helpers
|   ├── /providers
|   ├── /screens
|   |   ├── /Login
|   |   ├── /NaverForm
|   |   ├── /NaversList
|   ├── /services
|   ├── /theme
```
