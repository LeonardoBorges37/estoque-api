const logger = function(req, res, next) {
    console.log(`Uma requisição foi feita para ${req.body.nome}, params: ${req.params.id}`);
    next();
}

module.exports = logger