/* As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra. */

function retorno()
{
    var quantidade=document.getElementById("entrada").value;

    quantidade=parseInt(quantidade);

    var resultado=calcula_maca(quantidade);
    alert("O preço total é " + resultado + " reais");
}

function calcula_maca(quantidade)
{
    var preco;
    if(quantidade<12)
    {
        preco=1.30*quantidade;
    }
    else
    {
        preco=1.00*quantidade;
    }
    return preco;
}