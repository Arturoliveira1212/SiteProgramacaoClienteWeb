/* Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor. */

function retorno()
{
    var numero_carros=document.getElementById("entrada1").value;
    var total_vendas=document.getElementById("entrada2").value;
    var salario_fixo=document.getElementById("entrada3").value;
    var valor_por_carro=document.getElementById("entrada4").value;

    numero_carros=parseInt(numero_carros);
    total_vendas=parseFloat(total_vendas);
    salario_fixo=parseFloat(salario_fixo);
    valor_por_carro=parseFloat(valor_por_carro);
    if(numero_carros<=0 || total_vendas<=0 || salario_fixo<=0 || valor_por_carro<=0)
    {
        alert("Entrada inválida.");
    }
    else
    {
        var resultado=calcula_salario(numero_carros,total_vendas,salario_fixo,valor_por_carro);
        alert("O salário final é " + resultado);
    }
    
}

function calcula_salario(numero_carros,total_vendas,salario_fixo,valor_por_carro)
{
    var soma1=valor_por_carro*numero_carros;
    var soma2=(total_vendas*0.05);
    var salario_final=salario_fixo+soma1+soma2;
    return salario_final;
}