const path = require('path');
const express = require("express");
const app = express();
const PORTA = 8080;
const getStatus = require('./impressoras');

//Atribuindo os caminhos
const __app = path.join(__dirname, '..', 'app');;
const __web = path.join(__dirname, '..', 'web'); 

app.use(express.static(__web));

app.get('/', (req,res) => {
    res.sendFile(path.join(__web, 'dashboard.html'));
});

app.post('/cadastro', (req,res) => {
    getStatus.resposta(function(resposta){
        res.send(resposta);
    })  
})


app.listen(PORTA, () => {
    console.log(`Servidor iniciado na ports ${PORTA}`);
})



