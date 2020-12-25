var nomes = ["Diego", "Gabriel", "Lucas"];
nomes.forEach(function(nome)
{
    var element = document.createElement("LI");
    element.innerHTML = nome;
    var tela = document.getElementById("lista");
    tela.appendChild(element);
})

