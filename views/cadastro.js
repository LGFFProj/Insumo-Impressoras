const url = '/cadastro';

async function cadastro(){
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            ip: document.getElementById('ip_cad').value,
            setor: document.getElementById('setor_cad').value
        }),
        headers:{
            'Content-Type' : 'application/json'
        }
    
    })
    .then( (resposta) => resposta.json())
    .then((body) => {
        document.getElementById('resposta').innerHTML = body.setor
    })
    

}
