/* Considerando os dois números passado como sendo catetos de um triângulo retângulo, calcular a hipotenusa. */

function retorno()
{
    var c1=document.getElementById("entrada1").value;
    var c2=document.getElementById("entrada2").value;

    c1=parseFloat(c1);
    c2=parseFloat(c2);

    c1=Math.pow(c1,2);
    c2=Math.pow(c2,2);

    var resultado=calcula_hipotenusa(c1,c2);
    alert("O valor da hipotenusa é " + resultado);

    
}

function calcula_hipotenusa(c1,c2)
{
    var catetos=c1+c2;
    var hipotenusa=Math.sqrt(catetos);
    return hipotenusa;
}