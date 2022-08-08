const lexmark = require('./query');


function resposta(callback){

    const impressoras = [
        '172.16.140.3',
        '172.16.140.6',
        '172.16.140.8',
        '172.16.140.9',
        '172.16.140.11',
        '172.16.140.12',
        '172.16.140.13',
        '172.16.140.14',
        '172.16.140.15',
        '172.16.140.16',
        '172.16.140.17',
        '172.16.140.18',
        '172.16.140.19',
        '172.16.140.20',
        '172.16.140.21',
        '172.16.140.22',
        '172.16.140.23',
        '172.16.140.25',
        '172.16.140.26',
        '172.16.140.27',
        '172.16.140.34',
        '172.16.140.35',
        '172.16.140.36',
        '172.16.140.37',
        '172.16.140.38',
        '172.16.140.40',
        '172.16.140.41',
        '172.16.140.43',
        '172.16.140.44',
        '172.16.140.46',
        '172.16.140.47',
        '172.16.140.48',
        '172.16.140.50',
        '172.16.140.54',
        '172.16.140.55',
        '172.16.140.56',
        '172.16.140.57',
        '172.16.140.63',
        '172.16.140.65',
        '172.16.140.67',
        '172.16.140.68',
        '172.16.140.71',
        '172.16.140.73',
        '172.16.140.79',
        '172.16.140.85',
        '172.16.140.86',

    ]
    let arrStatus = [];

    for (let ip of impressoras){
        lexmark.snmpQuery(ip, function(resultado){
            //Processar impressoras desconectadas
            if ( typeof(resultado[6]) === "undefined") {
                arrStatus.push({
                    status : 'Offline',
                    endereco: ip

                });
            } else {
                arrStatus.push({
                    imagem : 100*(resultado[3]*10)/(resultado[0]*10),
                    toner :  100*(resultado[4]*10)/(resultado[1]*10),
                    manutencao :  100*(resultado[5]*10)/(resultado[2]*10),
                    modelo : resultado[6].toString('utf8'),
                    nome : resultado [7].toString('utf8'),
                    endereco: ip,
                    status : 'Online',
                    ordem: impressoras.indexOf(ip)
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