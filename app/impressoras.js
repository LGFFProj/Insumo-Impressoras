const lexmark = require('./query');
const lerImpressoras = require('./cad_impressoras');

function resposta(callback){

    lerImpressoras.leitura(function(impressoras){
        let arrStatus = [];

    for (let obj of impressoras){
        lexmark.snmpQuery(obj.ip, function(resultado){
            //Processar impressoras desconectadas
            if ( typeof(resultado[6]) === "undefined") {
                arrStatus.push({
                    status : 'Offline',
                    endereco: obj.ip,
                    ordem: impressoras.indexOf(obj),
                    local: obj.setor
                });
            } else {
                arrStatus.push({
                    imagem : 100*(resultado[3]*10)/(resultado[0]*10),
                    toner :  100*(resultado[4]*10)/(resultado[1]*10),
                    manutencao :  100*(resultado[5]*10)/(resultado[2]*10),
                    modelo : resultado[6].toString('utf8'),
                    nome : resultado [7].toString('utf8'),
                    endereco: obj.ip,
                    status : 'Online',
                    ordem: impressoras.indexOf(obj),
                    local: obj.setor
                })
            }
            //Roda o Callback quando todas as repostas forem coletadas
            if (  arrStatus.length == impressoras.length ){
                    callback(arrStatus)
            }
        })
    }
    })
    
}

module.exports = { resposta }