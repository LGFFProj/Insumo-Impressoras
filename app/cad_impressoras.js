const path = require('path');
const fs = require('fs');

    function leitura(callback){
        fs.readFile(path.join(__dirname, 'lista_impressoras.txt'), 'utf-8', function(err, buf){
            callback(eval(buf));
        })
    }

    function cadastro(objCad){
        //Pegar a string existente do Arquivo e empurra o novo cadastro pra o final do Array
        leitura(function(dados){
            dados.push(objCad);
            fs.writeFile(path.join(__dirname, 'lista_impressoras.txt'), JSON.stringify(dados) ,'utf-8', function(err){
                if (err){
                    console.log('Um erro ocorreu truta!!')
                }
                console.log('O Arquivo foi gravado.')
            })
        })
        //Gravar em arquivo o novo cadastro
    }

module.exports = { leitura, cadastro }


