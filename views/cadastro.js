const url = '/cadastro';

async function cadastro(){
    let objCad = {
        ip: document.getElementById('ip_cad').value,
        setor: document.getElementById('setor_cad').value
    }
    //Confirmar dados do Cadastro
    const ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    
    if( ipformat.test(objCad.ip)){
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(objCad),
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        .then((resposta) => resposta.json())
        .then((body) => {
            document.getElementById('resposta').style.display = 'block';
            document.getElementById('resposta').innerHTML = body.msg; 

            setTimeout(function(){
                document.getElementById('resposta').style.display = 'none';
            }, 3000);
        })
    } else {
        alert("O valor digitado não é um IP valido");
    }
}
