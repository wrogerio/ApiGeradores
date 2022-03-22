const geradoresMock = require('../mock/geradoresLista');

exports.getGeadorByCodigo = (req, res) => {
    const codigo = req.params.id;
    const gerador = geradoresMock.find(gerador => gerador.getCodigo() == codigo);

    if(gerador){
        res.send({msg: 'ok', gerador});
    }
    else{
        res.send({msg: 'erro', gerador: {}});
    }
};