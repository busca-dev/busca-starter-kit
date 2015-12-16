# Busca Starter Kit
> Para mantermos as versões padronizadas, seguimos o [Versionamento Semântico](http://semver.org/lang/pt-BR/).

## Índice

- [Como usar?](#como-usar?)
- [Conheça melhor nossa Stack](#conheca-melhor nossa-stack)
- [Lista de tarefas automatizadas](#lista de-tarefas-automatizadas)
- [Como Contribuir?](#como-contribuir?)
- [Licença](#licença)

## Como usar?

#### 1 - Instale o nodeJS

Para instalar o nodeJS em seu sistema operacional [siga as instruções](https://nodejs.org/).

#### 2 - Instale o `grunt-cli` globalmente

```sh
$ npm install -g grunt-cli
```

#### 3 - Clone o repositório

```sh
$ git clone https://github.com/busca-dev/busca-starter-kit.git novo_projeto
```

#### 4 - Vá até a pasta e instale todas as dependências do projeto

```sh
$ cd novo_projeto
$ npm install
```
#### 5 - Inicie o ambiente de desenvolvimento.

```sh
$ grunt dev
```
*Inicia um servidor estático na porta 9000, escuta e compila todos os arquivos .jade/.styl, otimiza todas as imagens, ativa o livereload, e concatena/minifica todos os arquivos.*

## Lista de tarefas

- `$ grunt dev`: Inicia o ambiente de desenvolvimento.
- `$ grunt ap`: Disponibiliza as páginas criadas para aprovação.
- `$ grunt deploy`: Faz Deploy para o servidor do cliente.

## Conheça melhor nossa Stack

- Como template engine para HTML utilizamos [Jade](http://jade-lang.com/).
- Para o pre-processamento de CSS escolhemos o [Stylus](https://learnboost.github.io/stylus/).
- Utilizamos o [Flex Grid Framework](https://afonsopacifer.github.io/flex-grid-framework/) como sistema de grid.
- A automatização das tarefas fica a cargo do [GruntJS](http://gruntjs.com/).

## Como Contribuir?
> Encontre no  [Roadmap](https://github.com/busca-dev/busca-starter-kit/issues/1) os próximos passos do projeto, siga nosso [guia de contribuição](CONTRIBUTING.md) e ajude a contruí-los :)

## Licença

[MIT Licence](https://github.com/busca-dev/busca-starter-kit/blob/master/LICENCE.md) © [Busca Carioca Developers](https://github.com/busca-dev)
