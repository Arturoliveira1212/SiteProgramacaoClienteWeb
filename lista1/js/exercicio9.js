/* Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é:
					n1 * 2 + n2 * 3 + n3 * 5 
mediafinal = -----------------------------------
                            10
                            
*/

function retorno()
{
    var n1=document.getElementById("entrada1").value;
    var n2=document.getElementById("entrada2").value;
    var n3=document.getElementById("entrada3").value;

    n1=parseFloat(n1);
    n2=parseFloat(n2);
    n3=parseFloat(n3);

    var resultado=media(n1,n2,n3);
    alert("A média final do aluno é " + resultado);
}

function media(n1,n2,n3)
{
    var media_final=((n1*2)+(n2*3)+(n3*5))/10;
    return media_final;
}