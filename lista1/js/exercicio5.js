/* Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário. */ 

function retorno()
{
    var salario=document.getElementById("entrada1").value;
    var reajuste=document.getElementById("entrada2").value;

    salario=parseFloat(salario);
    reajuste=parseFloat(reajuste);
    if(salario<=0 || reajuste<=0)
    {
        alert("Entrada inválida.");
    }
    else
    {
        var resultado=calcula_reajuste(salario,reajuste);
        alert("O seu novo salário é " + resultado + ".");
    }
    
}

function calcula_reajuste(salario,reajuste)
{
    var r=salario*(reajuste/100);
    var resultado=salario+r;
    return resultado;
}