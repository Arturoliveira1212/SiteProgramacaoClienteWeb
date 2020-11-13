/*
Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
*/

function num_par(x,y)
{
    var a=[];
    for(i=x;i<=y;i++)
    {
        if(i%2==0)
        {
            a.push(i);
        }
    }
    return a.toString();
}

function retorno()
{
    var n1=document.getElementById("entrada1").value;
    var n2=document.getElementById("entrada2").value;
    var resultado="Os números pares são " + num_par(n1,n2);
    alert(resultado);
}