/*
Dado o seguinte vetor de objetos:
var usuarios = [
{
nome: "Diego",
habilidades: ["Javascript", "ReactJS", "Redux"]
},
{
nome: "Gabriel",
habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
}
];
Escreva uma função que produza o seguinte resultado:
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array
com um separador utilize o join.
*/

var usuarios = 
[
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function produz()
{
    var a = 
    {
        nome: "",
        habilidades: [""]
    };
    var b = 
    {
        nome: "",
        habilidades: [""]
    };
    a=usuarios[0];
    b=usuarios[1];
    var resultado="O " + a.nome + " possui as habilidades: " + a.habilidades + "." + " O " + b.nome + " possui as habilidades: " + b.habilidades + ".";
    return resultado;
}

resultado=produz();
console.log(resultado);
document.getElementById("msg").innerHTML=resultado;
