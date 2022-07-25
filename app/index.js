const app = require('./lexjson');

let impressoras = [
    '172.16.140.164'
];

let statusImpressoras = [];

impressoras.forEach(x => {
    app.pegaStatus(x, function(resultado){
        statusImpressoras.push(resultado);
   });
});