/* 
Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.

function temHabilidade(skills) {
// código aqui
}

var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false

Dica: para verificar se um vetor contém um valor, utilize o método indexOf.
*/

var habilidades=["Javascript","ReactJS","React Native"];

function tem_habilidade(hab)
{
    if(hab.indexOf("Javascript")==-1)
    {
        return false;
    }
    else
    {
        return true;
    }
}

var resultado=tem_habilidade(habilidades);
resultado+=" - O array possui a habilidade Javascript.";
console.log(resultado);
document.getElementById("msg").innerHTML=resultado;