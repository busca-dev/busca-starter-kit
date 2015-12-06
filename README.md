# Busca Starter Kit
> Para mantermos as versões padronizadas, seguimos o [Versionamento Semântico](http://semver.org/lang/pt-BR/).

## Índice

- [Como usar?](#como-usar?)
  - [Baixe o projeto e instale as dependências](#baixe-o-projeto-e-instale-as-dependências)
  - [Conheça melhor nossa Stack](#conheça-melhor-nossa-Stack)
  - [Lista de tarefas do Grunt](#lista-de-tarefas-do-grunt)
- [Como Contribuir?](#como-contribuir?)
- [Licença](#licença)

## Como usar?

### Baixe o projeto e instale as dependências:

#### 1 - Instale o nodeJS

Para instalar o nodeJS em seu sistema operacional [siga as instruções](https://nodejs.org/).

#### 2 - Clone este repositório

```sh
$ git clone https://github.com/busca-dev/busca-starter-kit.git
```

#### 3 - Instale o `grunt-cli` e depois vá até a pasta e instale todas as dependências do projeto

```sh
$ npm install -g grunt-cli
```

```sh
$ npm install
```
#### 4 - Inicio o ambiente de desenvolvimento com o `Grunt`

```sh
$ grunt dev
```
*Inicia um servidor estático na porta 9000, escuta e compila todos os arquivos .jade/.styl, otimiza todas as imagens images da pasta img, ativa o livereload, concatena e minifica todos os arquivos*

### Conheça melhor nossa Stack

- Como template engine para HTML utilizamos [jade](http://jade-lang.com/).
- Para o pre-processamento de CSS escolhemos o [stylus](https://learnboost.github.io/stylus/).
- Utilizamos o [flex-grid-framework](https://afonsopacifer.github.io/flex-grid-framework/) como sistema de grid.
- A automatização das tarefas fica a cargo do [grunt](http://gruntjs.com/).

## Como Contribuir?
> Encontre no  [Roadmap](https://github.com/busca-dev/busca-starter-kit/issues/1) os próximos passos do nosso projeto e ajude a contruí-los :)

## Licença

[MIT Licence](https://github.com/busca-dev/busca-starter-kit/blob/master/LICENCE.md) © Busca Carioca Developers
