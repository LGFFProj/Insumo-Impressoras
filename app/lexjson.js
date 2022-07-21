const snmp = require("net-snmp");

//Lista dos OID's que serão consultados nas impressoras
const oids = [
    '1.3.6.1.2.1.43.11.1.1.8.1.1',
    '1.3.6.1.2.1.43.11.1.1.8.1.2',
    '1.3.6.1.2.1.43.11.1.1.8.1.3',
    '1.3.6.1.2.1.43.11.1.1.9.1.1',
    '1.3.6.1.2.1.43.11.1.1.9.1.2',
    '1.3.6.1.2.1.43.11.1.1.9.1.3'
]

let resultado = [];


function pegaStatus(ips){
    //Criar a Sessão SNMP com o IP providenciado
    let session = snmp.createSession(ips, 'public');
    session.get(oids, function (error, varbinds) {
        if (error) {
            console.error(error);
        } else {
            for (let i = 0; i < varbinds.length; i++) {
                if (snmp.isVarbindError (varbinds[i])){
                    console.error (snmp.varbindError (varbinds[i]));
                } else {
                    resultado.push((varbinds[i].value));
                };
            };
        };
        session.close();
        //Pega o Array que contem os dados coletados e traduz em porcentagem
        //JSON.stringify(Object.assign({},resultado));
        let objResposta = {};
        objResposta.imagem = 100*(resultado[3]*10)/(resultado[0]*10);
        objResposta.toner = 100*(resultado[4]*10)/(resultado[1]*10);
        objResposta.manutencao = 100*(resultado[5]*10)/(resultado[2]*10);
        return (objResposta);

    });
    
session.trap (snmp.TrapType.LinkDown, function (error){
    if (error){
        console.error (error);
    }
});

}

module.exports = { pegaStatus };



