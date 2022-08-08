const getStatus = require('./impressoras');

//Modificar a função no futuro para organizar o array de resposta doutras maneiras
//mas o padrão vai ser pelo menor toner primeiro.
function sort (callback){
    getStatus.resposta(function (resposta){
        
        //Ordem de Cadastro
        let resultado = resposta.sort((a, b) => a.ordem - b.ordem)
        
        callback(resultado);
    })
}

module.exports = { sort }


//Feito por André (Doce como mel)