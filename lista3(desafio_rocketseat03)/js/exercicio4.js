var nomes = ["Diego", "Gabriel", "Lucas"];
nomes.forEach(function(nome)
{
    var element = document.createElement("LI");
    element.innerHTML = nome;
    var tela = document.getElementById("lista");
    tela.appendChild(element);
})

function adicionar()
{
    var nome = document.getElementById("novo").value;
    if(nome != ' ')
    {
        var element = document.createElement("LI");
        element.innerHTML = nome;
        var tela = document.getElementById("lista");
        tela.appendChild(element);
        document.getElementById("novo").value = ' ';
    }
    else if(nome == ' ')
    {
        alert("Preencha um nome.");
    }
    
}