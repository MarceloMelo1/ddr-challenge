# Desafio back-end: matching de informações

SET UP THE DEV ENVIROMENT
-------------------------

First Time running:

```
$ docker build -t ddr/challenge .
$ docker-compose up -d
$ docker-compose exec ddr.challenge.nodejs sh docker-config.sh
```

Install dependencies:

Run inside the container the follow commad
```
$ docker exec -it ddr.challenge.nodejs bash
$ npm install

---------------------------------------------------------------------


## Desafio
Crie um webservice que receba a entrada das entidades `Gravações` e `Tabulações` em endpoints separados e armazene no banco de dados.

- A aplicação deverá rodar uma rotina em um determinado intervalo de tempo para realizar o relacionamento entre essas duas entidades e amarzenar na tabela/collection `Matchings`;

- Um `matching` é a associação de uma gravação à uma tabulação e cada registro de gravação/tabulação poderá estar associado à somente um *matching*;

- Um `matching` entre uma gravação e uma tabulação é realizado através dos campos `tabulacoes.numeroBinado`, `tabulacoes.numeroAcesso` e `gravacoes.telefone`. Ou seja, uma correspondência é criada quando:

  ```
  (tabulacoes.numeroBinado = gravacoes.telefone) E/OU (tabulacoes.numeroAcesso = gravacoes.telefone)
  ```

- Uma entidade que já está associada à um matching não deverá ser levada em consideração nas próximas execuções do serviço de matching.

### Estrutura de dados de `tabulacoes`
| Coluna | Tipo |
| ------ | ---- |
| id | ObjectID, UUID ou sequencial (primário)
| nomeCliente | Texto
| protocolo | Alfanumérico
| dataAtendimento | Data e hora
| numeroBinado | Data e hora
| numeroAcesso | Data e hora

### Estrutura de dados de `Gravações`
| Coluna | Tipo |
| ------ | ---- |
| id | ObjectID, UUID ou sequencial (primário)
| telefone | Alfanumérico
| ramal | Alfanumérico
| dataGravacao | Data e hora

### Estrutura de dados de `Matchings`
| Coluna | Tipo |
| ------ | ---- |
| id | ObjectID, UUID ou sequencial (primário)
| gravacaoId | ObjectID, UUID ou sequencial (relacionamento)
| tabulacaoId | ObjectID, UUID ou sequencial (relacionamento)

Ao fim do processo, a aplicação deverá conter:
- 1x endpoint para armazenar uma tabulação;
- 1x endpoint para armazenar uma gravação;
- 1x endpoint para listar os matchings registrados;
- 1x serviço que rode a cada **6 horas** para realizar a correspondência dessas duas entidades.

## Stack
A aplicação deverá ser desenvolvida em NodeJS e poderá usar banco de dados relacional ou não-relacional. Poderá ser utilizado qualquer uma dessas tecnologias:
- Express, AdonisJS, Koa, NestJS, etc;
- Biblioteca de *scheduling*, ex: node-cron, node-schedule, etc;
- Mongoose, Knex, Sequelize, etc;
- Banco de dados relacional ou não relacional, ex: Postgres, MongoDb, etc.

## Dados
Utilize os arquivos [gravacoes.json](./gravacoes.json) e [tabulacoes.json](./tabulacoes.json) como exemplo de entrada de dados e o arquivo [matchings.json](matchings.json) como exemplo de saída de dados ao realizar o processo de *matching*.

## Avaliação e entrega
- Será avaliado organização de código, identação, nomenclaturas de funções e variáveis, organização de pastas/arquivos, assertividade, padrão REST e boas práticas de desenvolvimento;
- Não há data de entrega;
- Deverá ser criado um repositório aberto e enviado o link de acesso ao final do teste.
