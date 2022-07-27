const lexmark = require('./query');


function resposta(callback){

    let impressoras = [
        '172.16.140.164',
        '172.16.140.31',
        '172.16.140.35',
        '172.16.140.36'
    ]

    let arrStatus = [];
    
    impressoras.forEach( ip => lexmark.snmpQuery(ip, function(resultado){
        arrStatus.push({
            imagem : 100*(resultado[3]*10)/(resultado[0]*10) + '%',
            toner :  100*(resultado[4]*10)/(resultado[1]*10) + '%',
            manutencao :  100*(resultado[5]*10)/(resultado[2]*10) + '%',
            modelo : resultado[6].toString('utf8'),
            nome : resultado [7].toString('utf8'),
            endereco: ip
        });
        //Roda fn de callback somente quando tiver todos os objetos no array.
        if (arrStatus.length == impressoras.length){
            callback(arrStatus);
        }
    }))
};


module.exports = { resposta }