$(function(){

    let estante = new Array();
    $("#add_acervo").click(function(){
        let titulo = $("#titulo").val();
        let descricao = $("#descricao").val();
        let genero = $("#genero").val();
        let autor =  $("#autor").val();
        if(titulo == "" || descricao == "" || genero == "" || autor == "")
        {
            alert("Insira valores nos campos.");
        }
        else 
        {
            let acervo = $("#acervo");
            let obj_tr = $("<tr>");
            obj_tr.append($("<td>").text(titulo));
            obj_tr.append($("<td>").text(descricao));
            obj_tr.append($("<td>").text(genero));
            obj_tr.append($("<td>").text(autor));
            let obj_img = $("<img>").attr("src", "../images/delete1.png");
            obj_img.addClass("lixeira");
            let obj_link = $("<a>").attr("href" , "#");
            obj_link.append(obj_img);
            obj_tr.append(obj_link);
            acervo.append(obj_tr);
            let livro = {
                "titulo":  titulo,
                "descricao": descricao,
                "genero": genero,
                "autor": autor
            };
            estante.push(livro);
            $("#titulo").val("");
            $("#descricao").val("");
            $("#autor").val("");
            let autores = $("#autores");
            let obj_type_search = $("<option>").text(autor);
            autores.append(obj_type_search);
        }
    })

    $("#acervo").on("click", "img", function(){
        let tam = estante.length;
        texto1 = estante[0].titulo + estante[0].descricao + estante[0].genero + estante[0].autor;
        let texto_selecionado = $(this).parents("#acervo tr").text();
        if(texto1 == texto_selecionado)
        {
            estante.splice(0,1);
        }
        else
        {
            let i;
            for(i=1;i<tam;i++)
            {
                let texto = estante[i].titulo + estante[i].descricao + estante[i].genero + estante[i].autor;
                if(texto == texto_selecionado)
                {
                    estante.splice(i,1);
                }
            }
        }
        $(this).parents("#acervo tr").remove();
    })

    $("#salvar").click(function(){
        $("input[name=acervo_post]").val(JSON.stringify(estante)).val();
    })

});