require('dotenv').config();
const loggerMiddleware = require('./src/middleware/logger');
const valorProdutoMiddleware = require('./src/middleware/valorProduto');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);
app.use(valorProdutoMiddleware);

app.get('/', function(req,res){
    res.send('Bem Vindo!');
});

app.post('/produtos', (req,res) => {
    let produto = req.body

    res.send(`Produto adicionado com sucesso! Nome: ${produto.nome}, Preço: ${produto.preco}`)

})

app.put('/produtos/:id', (req,res) => {
    let id = req.params.id;
    res.send(`O produto ${id} alterado!`)
})

app.delete('/produtos/:id', (req,res) => {
    let id = req.params.id;
    res.send(`O produto ${id} foi deletado!`)
})

app.listen(port, function(){
    console.log('Servidor rodando na porta ' + port);
})