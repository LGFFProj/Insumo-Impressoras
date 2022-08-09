//Evento para quando apertar o botão "DASHBOARD"
document.getElementById('dashboard').addEventListener('click', () => {
    document.getElementById('container_cadastro').style.display = 'none';
    document.getElementById('container_relatorio').style.display = 'none';
    document.getElementById('container_dashboard').style.display = 'block';

})

//Evento para quando apertar o botão "CADASTRO"
document.getElementById('cadastro').addEventListener('click', () => {
    document.getElementById('container_dashboard').style.display = 'none';
    document.getElementById('container_relatorio').style.display = 'none';
    document.getElementById('container_cadastro').style.display = 'block';
})

//Evento para quando apertar o botão "RELATÓRIO"
document.getElementById('relatorio').addEventListener('click', () => {
    document.getElementById('container_dashboard').style.display = 'none';
    document.getElementById('container_cadastro').style.display = 'none';
    document.getElementById('container_relatorio').style.display = 'block';

})