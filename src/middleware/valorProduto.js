const valorProduto = function(req, res, next) {
    let valor = req.body.preco;
    if(valor < 100){
        res.send('O valor do produto não pode ser menor que 100');
    } else {
        next();
    }
}

module.exports = valorProduto