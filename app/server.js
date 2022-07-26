const express = require("express");
const app = express();
const PORTA = 8080;
const getStatus = require('./impressoras');

app.get('/', (req,res) => {
    res.sendFile("C:\\Code\\gitcodes\\Insumo-Impressoras\\web\\dashboard.html");
});

app.post('/cadastro', (req,res) => {
    getStatus.resposta(function(resposta){
        res.send(resposta);
    })
    
})



app.listen(PORTA, () => {
    console.log(`Servidor iniciado na ports ${PORTA}`);
})



