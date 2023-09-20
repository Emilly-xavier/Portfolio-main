//const collection = 'NEW_COLLECTION_NAME';

//CREATE DATABASE TEST
//USE TEST
use("test");

//apagando a collection antes de inserir novos dados
db.cardapio.drop();

//CREATE TABLE => createCollection
db.createCollection("cardapio");

db.cardapio.insertMany([
    {nome:"macarrão", preco:29.99, ingredientes:"macarrão"},
    {nome:"strogonoff", preco:59.99, ingredientes:"carne wagnu e arroz"},
    {nome:"pirão", preco:50.99, ingredientes:"farinha, frango caipira, arroz"},
    {nome:"prato do dia", preco:10.99, ingredientes:"arrox, feijão, bife"}
])

//SELECT * FROM test.cardapio;

//no mongo para selecionar vamos usar o comando find

//devolve todos os dados da collection

db.cardapio.find();

//filtrando pelo nome
//SELECT * FROM cardapio where nome="macarrão";
db.cardapio.find({nome: "macarrão"})

//para selecionar as colunas usamos a projeção
//SELECT nome, preco FROM cardapio where nome="macarrão";
db.cardapio.find({nome: "macarrão"},{nome:true,preco:true});

//FIND ({QUERY},{PROJEÇÃO})
