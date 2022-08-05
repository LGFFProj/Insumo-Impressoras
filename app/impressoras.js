const lexmark = require('./query');


function resposta(callback){

    const impressoras = [
        '172.16.140.164',
        '172.16.140.31',
        '172.16.140.35',
        '172.16.140.36',
        '172.16.140.41'
    ]
    let arrStatus = [];

    for (let ip of impressoras){
        lexmark.snmpQuery(ip, function(resultado){
            //Processar impressoras desconectadas
            if ( typeof(resultado[6]) === "undefined") {
                arrStatus.push({status : 'Offline'});
            } else {
                arrStatus.push({
                    imagem : 100*(resultado[3]*10)/(resultado[0]*10),
                    toner :  100*(resultado[4]*10)/(resultado[1]*10),
                    manutencao :  100*(resultado[5]*10)/(resultado[2]*10),
                    modelo : resultado[6].toString('utf8'),
                    nome : resultado [7].toString('utf8'),
                    endereco: ip,
                    status : 'Online'
                })
            }
            //Roda o Callback quando todas as repostas forem coletadas
            if (  arrStatus.length == impressoras.length ){
                    callback(arrStatus)
            }
        })
    }
}

module.exports = { resposta }