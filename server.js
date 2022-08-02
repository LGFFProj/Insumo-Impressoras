const path = require('path');
const express = require("express");
const app = express();
const PORTA = 8080;
const getStatus = require('./app/impressoras');
 
//Middleware e definições
app.use(express.static(path.join(__dirname,'views')));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    let teste = [{
        imagem : 'teste',
        kit: 'teste',
        manutencao: 'teste',
        endereco: 'Impressora 1'
    },
    {
        imagem : 'teste1',
        kit: 'teste1',
        manutencao: 'teste1',
        endereco: 'Impressora 2'
    }
];

//Rederizar o Dashboard
    res.render(path.join(__dirname, '/views/dashboard'),{
        teste
    });
});


app.listen(PORTA, () => {
    console.log(`Servidor iniciado na ports ${PORTA}`);
})



