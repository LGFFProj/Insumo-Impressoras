Estou tentando criar um app que utiliza SNMP para pegar dados das impressoras do meu ambiente de trabalho usando NodeJS e Express pra o painel.

Etapas do projeto;

* Escrever uma função que receba o endereço da impressora e retorne um objeto JSON com algumas informações;

    Nome da Impressora
    Online ou Offline (tratar o erro retornado pela API net-snmp)
    % de toner
    % de Kit Imagem
    % de Kit Manutenção.
            
* Começar com o ExpressJS fazer a pagina principal. (25/07)