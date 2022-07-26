const lexmark = require('./query');

let impressoras = [
    '1.1.1.1',
    '2.2.2.2',
    '3.3.3.3'
]
function resposta(callback){
    let arrStatus = [];
    impressoras.forEach( ip => lexmark.query(ip, function(resultado){
        arrStatus.push({
            imagem : 100*(resultado[3]*10)/(resultado[0]*10) + '%',
            toner :  100*(resultado[4]*10)/(resultado[1]*10) + '%',
            manutencao :  100*(resultado[5]*10)/(resultado[2]*10) + '%',
            modelo : resultado[6].toString('utf8'),
            nome : resultado [7].toString('utf8'),
        });
        //Roda fn de callback somente quando tiver todos os objetos no array.
        if (arrStatus.length == impressoras.length){
            callback(arrStatus);
        }
    }))
};

module.exports = { resposta }