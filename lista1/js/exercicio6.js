/* O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor. */

function retorno()
{
    var custo_fabrica=document.getElementById("entrada").value;

    custo_fabrica=parseFloat(custo_fabrica);

    var resultado=calcula_preco(custo_fabrica);
    alert("O preço final do carro é " + resultado);

}

function calcula_preco(custo_fabrica)
{
    r=custo_fabrica*(0.73);
    resultado=custo_fabrica+r;
    return resultado;
}