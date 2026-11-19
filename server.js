import dotenv from 'dotenv';
dotenv.config();

import {loggerMiddleware} from './src/middleware/index.js';
import express, { json, urlencoded } from 'express';

const app = express();
const port = 3000;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(loggerMiddleware);

app.get('/', function(req,res){
    res.status(200).json({
        "status": "OK",
        "codigo": 200,
        "mensagem": `Bem vindo`
    })
});

app.post('/produtos', (req,res) => {
    let produto = req.body

res.status(200).json({
    "status": "criado",
    "codigo": 200,
    "mensagem": `O produto foi Criado com sucesso! Nome ${produto.nome}, Valor:`
 })

})



app.put('/produtos/:id', (req,res) => {
    let id = req.params.id;
    let produto = req.body;
    res.status(201).json({
    "status": "Alterado",
    "codigo": 201,
    "mensagem": `O produto ${id} Alterado com sucesso! Nome ${produto.nome}, Valor:`
   })

})

app.delete('/produtos/:id', (req,res) => {
    let id = req.params.id;
    let produto = req.body;
       res.status(201).json({
       "status": "Deletado",
       "codigo": 201,
       "mensagem": `O produto ${id} foi Deletado`
    })
})

app.listen(port, function(){
    console.log('Servidor rodando na porta ' + port);
})