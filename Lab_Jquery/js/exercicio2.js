let glossario = [
    {
        "id":1,
        "termo": "W3C",
        "definicao": "World Wide Web Consortium – escritório responsável por desenvolver normas técnicas para a Internet.",
        "autor": "José Borges.",
        "dataCriacao": "2015-04-01"
    },
    {
        "id":2,
        "termo": "HTML",
        "definicao": "HyperText Markup Language – linguagem de marcação utilizada para estruturar páginas web.",
        "autor": "Pedro Silva.",
        "dataCriacao": "2017-05-12"
    },
    {
        "id":3,
        "termo": "CSS",
        "definicao": "Cascade Style Sheet – Folhas de estilo utilizadas para configurar a visualização de  páginas web.",
        "autor": "Maria Machado.",
        "dataCriacao": "2018-10-11"
    }
];

console.log(glossario[0].termo);
$(function(){

    $("#link").click(function(){
        $(this).text("Termos cadastrados: clique na definição desejada.");
        $(this).remove();
        for(i=0;i<glossario.length;i++)
        {
            let obj_link = $("<a>").attr("href", "#");
            let obj_lista1 = $("<li>");
            let termo1 = glossario[i].termo;
            obj_lista1.append(termo1);
            obj_link.append(obj_lista1);
     
            let obj_ul = $("#lista");
            obj_ul.append(obj_link);
        }
    })

    $("#lista").on("click", "li", function(){
        
        for(i=0;i<glossario.length;i++)
        {
            if($(this).text() == glossario[i].termo)
            {
                $("#definicao").text("Definição");   
                $("#termo").text(glossario[i].termo);
                $("#descricao").text(glossario[i].definicao);
                let data =  glossario[i].dataCriacao.substring(8,10) + "/" + glossario[i].dataCriacao.substring(5,7) + "/" + glossario[i].dataCriacao.substring(0,4);
                $("#data_criacao").text("Data de criação: " + data);
                $("#autor").text("Autor: " + glossario[i].autor);
            }
        }
    })

});