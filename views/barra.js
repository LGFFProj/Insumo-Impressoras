function barra(){
    let input, filtro, itens, lista, valor;

    input = document.getElementById('input');
    filtro = input.value.toUpperCase();
    //Pegar a lista de Itens
    itens = document.getElementById('itens');
    ul = itens.getElementsByTagName('ul');
    lista = itens.getElementsByTagName('li');

    for (let i = 0; i < lista.length; i++){
        valor = lista[i].textContent || lista[i].innerText; 
        if (valor.toUpperCase().indexOf(filtro) > -1){
            ul[i].style.display = "flex";
        } else {
            ul[i].style.display = "none";
        }
    }
}
