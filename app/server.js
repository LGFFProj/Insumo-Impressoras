const express = require("express");
const getStatus = require('./lexjson');
const app = express();
const PORTA = 80;

//Lista de impressoras
let impressoras = [
    '172.16.140.164'
];

app.get('/', (req,res) => {
    res.sendFile("C:\\Code\\gitcodes\\Insumo-Impressoras\\web\\dashboard.html");
});

app.post('/cadastro', (req,res) => {
    res.send('Tela de Cadastro');
})




app.listen(PORTA, () => {
    console.log(`Servidor iniciado na ports ${PORTA}`);
})



//Implementas isso aqui dentro das rotas requisitadas.
/*

let statusImpressoras = [];

impressoras.forEach(x => {
    let objResposta = app.pegaStatus(x, function(resultado){
        return resultado;
   });
});
*/


