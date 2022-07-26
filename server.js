const path = require('path');
const express = require("express");
const app = express();
const PORTA = 8080;
const getStatus = require('./app/sortncheck.js');
const dados = require ('./app/cad_impressoras');
 
//Middleware e definições
app.use(express.static(path.join(__dirname,'views')));
app.set('view engine', 'ejs');
app.use(express.json());


app.get('/', (req,res) => {
    //Chamar a função de coleta dos dados
    getStatus.sort((resultado) => {
        //Rederizar o Dashboard
        res.render(path.join(__dirname, '/views/dashboard'),{
            resultado
        })
    })
});

app.post('/cadastro', (req,res) =>{
    dados.cadastro(req.body);
    res.json({msg : 'Impressora Cadastrada'})

})


app.listen(PORTA, () => {
    console.log(`Servidor iniciado na ports ${PORTA}`);
})



