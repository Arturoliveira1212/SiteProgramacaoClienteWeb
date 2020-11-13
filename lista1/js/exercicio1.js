/* Somar dois números. */

function retorno()
{
    var p1=document.getElementById("entrada1").value;
    var p2=document.getElementById("entrada2").value;
    p1=parseInt(p1);
    p2=parseInt(p2);
    var resultado=soma(p1,p2);
    alert("O resultada da soma entre " + p1 + " e " + p2 + " é " + resultado);
}

function soma (p1,p2)
{
    return p1+p2;
}
