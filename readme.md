Estou tentando criar um app que utiliza SNMP para pegar dados das impressoras do meu ambiente de trabalho usando NodeJS e Express pra o painel.


Etapas do projeto;

* Escrever uma função que receba o endereço da impressora e retorne um objeto JSON com algumas informações;

    Nome da Impressora
    Local (Talvez? já tem essa info no CUPS, mas e interessante centralizar tudo no painel)
    % de toner
    % de Kit Imagem
    % de Kit Manutenção (Acho que esse é o nome).
            
            **** Acho que não vou fazer nada com base de dados por enquanto, se tiver que gravar algo vou ver a possibilidade de gravar em um arquivo mesmo.


