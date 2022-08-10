//Evento para quando apertar o botão "DASHBOARD"
document.getElementById('dashboard').addEventListener('click', () => {
    document.getElementById('container_cadastro').style.display = 'none';
    document.getElementById('container_relatorio').style.display = 'none';
    document.getElementById('container_dashboard').style.display = 'flex';
    document.getElementById('dashboard').style.backgroundColor = '#c2c2c2';
    document.getElementById('cadastro').style.backgroundColor = '#2b63cb83';
    document.getElementById('relatorio').style.backgroundColor = '#2b63cb83';
})

//Evento para quando apertar o botão "CADASTRO"
document.getElementById('cadastro').addEventListener('click', () => {
    document.getElementById('container_dashboard').style.display = 'none';
    document.getElementById('container_relatorio').style.display = 'none';
    document.getElementById('container_cadastro').style.display = 'flex';
    document.getElementById('cadastro').style.backgroundColor = '#c2c2c2'
    document.getElementById('dashboard').style.backgroundColor = '#2b63cb83'
    document.getElementById('relatorio').style.backgroundColor = '#2b63cb83';
})

//Evento para quando apertar o botão "RELATÓRIO"
document.getElementById('relatorio').addEventListener('click', () => {
    document.getElementById('container_dashboard').style.display = 'none';
    document.getElementById('container_cadastro').style.display = 'none';
    document.getElementById('container_relatorio').style.display = 'flex';
    document.getElementById('relatorio').style.backgroundColor = '#c2c2c2';
    document.getElementById('dashboard').style.backgroundColor = '#2b63cb83';
    document.getElementById('cadastro').style.backgroundColor = '#2b63cb83';

})