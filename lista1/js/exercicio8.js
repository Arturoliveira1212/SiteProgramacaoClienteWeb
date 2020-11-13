/* Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius (baseado na fórmula abaixo): 
  C  =    F - 32
  ----   ------
    5       9   
    
*/

function retorno()
{
    var temperatura=document.getElementById("entrada").value;

    temperatura=parseFloat(temperatura);

    var resultado=Celsius_em_Fahrenheit(temperatura);
    alert(temperatura + "°C é " + resultado + "°F");
}

function Celsius_em_Fahrenheit(temperatura)
{
    var resultado=((9*temperatura)/5)+32;
    return resultado;
}