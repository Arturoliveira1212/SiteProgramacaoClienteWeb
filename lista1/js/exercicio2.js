/* Indicar qual dos dois números é o maior. */

function retorno()
{
    var n1=document.getElementById("entrada1").value;
    var n2=document.getElementById("entrada2").value;

    n1=parseInt(n1);
    n2=parseInt(n2);
    var resultado;
    resultado=compara(n1,n2);
    
    alert(resultado);
}

function compara(n1,n2)
{
    if(n1>n2)
    {
        resultado=n1 + " é maior que " + n2;
    }
    else if(n2>n1)
    {
        resultado=n2 + " é maior que " + n1;;
    }
    else if(n1==n2)
    {
        resultado=n1 + " é igual a " + n2;;
    }
    return resultado;
}