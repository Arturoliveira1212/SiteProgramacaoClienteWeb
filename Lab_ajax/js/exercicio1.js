$(function(){
                
    let zip_code = $("#cep").val();
    let url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json";
    $.get(url, function(filme){
        // let end = JSON.parse(filme);
        preenche_filme(filme);
    });
    

    // var consultar_cep = function(url)
    // {
       
    
    // var teste2 = function (texto)
    //     {
    //         // let array_titulos_se = titulo.split(",");
    //         let tam = texto.length;
    //         let array_nomes_titulos = new Array;
    //             switch(texto)
    //             {
    //                 case texto.indexOf(1) != -1: array_nomes_titulos.push("filme1"); 
    //                 case texto.indexOf(2) != -1: array_nomes_titulos.push("filme2");
    //             }
    //         return array_nomes_titulos.join(",");
    //     }

    // var filmes_parecidos = function(texto)
    // {
    //     // let tam = texto.length;
    //     // console.log(tam);
    //     let r = new Array;
             
    //         if(texto.indexOf(1) != -1)
    //         {
    //             r.push("https://rafaelescalfoni.github.io/desenv_web/img/betterCallSaul.jpg");
    //         }
    //         if(texto.indexOf(2) != -1)
    //         {
    //             r.push("Breaking Bad");
    //         }
    //         if(texto.indexOf(3) != -1)
    //         {
    //             r.push("House of Cards");
    //         }
    //         if(texto.indexOf(4) != -1)
    //         {
    //             r.push("Narcos");
    //         }
    //         if(texto.indexOf(5) != -1)
    //         {
    //             r.push("Carros");
    //         }
    //         if(texto.indexOf(6) != -1)
    //         {
    //             r.push("Carros 2");
    //         }
    //         if(texto.indexOf(7) != -1)
    //         {
    //             r.push("Uma família da pesada");
    //         }
    //         if(texto.indexOf(8) != -1)
    //         {
    //             r.push("Valente");
    //         }
    //         if(texto.indexOf(9) != -1)
    //         {
    //             r.push("Friends");
    //         }
    //         if(texto.indexOf(10) != -1)
    //         {
    //             r.push("House");
    //         }
    //         if(texto.indexOf(11) != -1)
    //         {
    //             r.push("Mulheres talentosas");
    //         }
    //         if(texto.indexOf(12) != -1)
    //         {
    //             r.push("Família moderna");
    //         }
    //         if(texto.indexOf(13) != -1)
    //         {
    //             r.push("Scarface");
    //         }
    //         if(texto.indexOf(14) != -1)
    //         {
    //             r.push("That '70s show");
    //         }
    //         if(texto.indexOf(15) != -1)
    //         {
    //             r.push("Zumbilândia");
    //         }
    //     return r.join("");
        
    // }  

    // var obj =  function (objeto)
    // {
    //     // let array = new Array;
    //     // let i = 0;
    //     var separa = objeto.map(function(item)
    //     {
    //         if(objeto.indexOf(item.rating) == -1)
    //         {
    //             let x = item.rating;
    //             return x;
    //         }
            
           
    //         // array.push(item.descricao);
    //         // return array;
    //     })
    //     return separa;
        
    //     // console.log(x);
    //     // let tam = r.length;
    //     // let array_nomes = new Array;
    //     // // for(i=0;i<tam;i++)
    //     // // {
    //     // //     // array_nomes.push(r[i]);
    //     // //     // array_nomes.push(r[i+1]);
    //     // // }
    //     // let array = new Array;
    //     // array.push(r[0]);
    //     // array.push(r[1]);
    //     // let teste = array;
    
    //     // return teste;
    // }

    var classificacao_a =  function (numero)
    {
        // let array = new Array;
        // let i = 0;
        let x;
        if(numero == 18)
        {
            x = "<img src='../images/18.png' style='width:20% height:20%; float:right;'>" ;
        }
        if(numero == 16)
        {
            x = "<img src='../images/16.png' style='width:20% height:20%; float:right;'>" ;
        }
        if(numero == 14)
        {
            x = "<img src='../images/14.png' style='width:20% height:20%; float:right;'>" ;
        }
        
        if(numero == 12)
        {
            x = "<img src='../images/12.png' style='width:20% height:20%; float:right;'>" ;
        }
        if(numero == 10)
        {
            x = "<img src='../images/10.png' style='width:20% height:20%; float:right;'>" ;
        }
        if(numero == 0)
        {
            x = "<img src='../images/livre.png' style='width:20% height:20%; float:right;'>" ;
        }
        
        return x;
        
           
        
        // console.log(x);
        // let tam = r.length;
        // let array_nomes = new Array;
        // // for(i=0;i<tam;i++)
        // // {
        // //     // array_nomes.push(r[i]);
        // //     // array_nomes.push(r[i+1]);
        // // }
        // let array = new Array;
        // array.push(r[0]);
        // array.push(r[1]);
        // let teste = array;
    
        // return teste;

    }
    
    var filme_parecido =  function (filme)
    {
        // let array = new Array;
        // let i = 0;
       
        var separa = filme.map(function(item)
        {
            console.log(item);
            // let tam = item.descricao.length;
            // console.log(item.descricao[tam-1]);
            
                // let img = $("<img>").attr("src", "../images/imagem1.png");
            let x;
            if(item == 1)
            {
                x = "<a href='#better_call'><img src='https://rafaelescalfoni.github.io//desenv_web//img//betterCallSaul.jpg' style='width:30%;'></a>";
            }
            if(item == 2)
            {
                x = "<a href='arturoliveira1212.github.io'><img src='https://rafaelescalfoni.github.io//desenv_web//img//breakingBad.png' style='width:30%;'></a>";
            }
            if(item == 3)
            {
                x = "<a href='arturoliveira1212.github.io'><img src='https://rafaelescalfoni.github.io//desenv_web//img//houseOfCards.png' style='width:30%;'></a>";
            }
            if(item == 4)
            {
                x = "<a href='arturoliveira1212.github.io'><img src='https://rafaelescalfoni.github.io//desenv_web//img//narcos.png' style='width:30%;'></a>";
            }
            if(item == 5)
            {
                x = "<a href='arturoliveira1212.github.io'><img src='https://rafaelescalfoni.github.io//desenv_web//img//carros.png' style='width:30%;'></a>";
            }
            if(item == 6)
            {
                x = "<a href='arturoliveira1212.github.io'><img src='https://rafaelescalfoni.github.io//desenv_web//img//carros2.png' style='width:30%;'></a>";
            }
            if(item == 7)
            {
                x = "<a href='arturoliveira1212.github.io'><img src='https://rafaelescalfoni.github.io//desenv_web//img//familyGuy.png' style='width:30%;'></a>";
            }
            if(item == 8)
            {
                x = "<a href='arturoliveira1212.github.io'><img src='https://rafaelescalfoni.github.io//desenv_web//img//valente.png' style='width:30%;'></a>";
            }
            if(item == 9)
            {
                x = "<a href='arturoliveira1212.github.io'><img src='https://rafaelescalfoni.github.io//desenv_web//img//friends.png' style='width:30%;'></a>";
            }
            if(item == 10)
            {
                x = "<a href='arturoliveira1212.github.io'><img src='https://rafaelescalfoni.github.io//desenv_web//img//house.png' style='width:30%;'></a>";
            }
            if(item == 11)
            {
                x = "<a href='arturoliveira1212.github.io'><img src='https://rafaelescalfoni.github.io//desenv_web//img//maosTalentosas.png' style='width:30%;'></a>";
            }
            if(item == 12)
            {
                x = "<a href='arturoliveira1212.github.io'><img src='https://rafaelescalfoni.github.io//desenv_web//img//modernFamily.png' style='width:30%;'></a>";
            }
            if(item == 13)
            {
                x = "<a href='arturoliveira1212.github.io'><img src='https://rafaelescalfoni.github.io//desenv_web//img//scarface.png' style='width:30%;'></a>";
            }
            if(item == 14)
            {
                x = "<a href='arturoliveira1212.github.io'><img src='https://rafaelescalfoni.github.io//desenv_web//img//that70s.png' style='width:30%;'></a>";
            }
            if(item == 15)
            {
                x = "<a href='arturoliveira1212.github.io'><img src='https://rafaelescalfoni.github.io//desenv_web//img//zumbilandia.png' style='width:30%;'></a>";
            }
            return x;
            
        
              
           
        //     // array.push(item.descricao);
        //     // return array;
        })
        return separa;
        
        // console.log(x);
        // let tam = r.length;
        // let array_nomes = new Array;
        // // for(i=0;i<tam;i++)
        // // {
        // //     // array_nomes.push(r[i]);
        // //     // array_nomes.push(r[i+1]);
        // // }
        // let array = new Array;
        // array.push(r[0]);
        // array.push(r[1]);
        // let teste = array;
    
        // return teste;
    }


    var obj =  function (objeto)
    {
        // let array = new Array;
        // let i = 0;
        
        var separa = objeto.map(function(item)
        {
            console.log(item.descricao);
            // let tam = item.descricao.length;
            // console.log(item.descricao[tam-1]);
            
                // let img = $("<img>").attr("src", "../images/imagem1.png");
            let x;
            if(item.rating == 5)
            {
                x = "<p><img src='../images/imagem1.png' style='width:30%;'> " + item.descricao ;
            }
            if(item.rating == 4)
            {
                x = "<p> <img src='../images/imagem2.png' style='width:30%;'> " + item.descricao;
            }
            if(item.rating == 3)
            {
                x = "<p> <img src='../images/imagem3.png' style='width:30%;'> " + item.descricao;
            }
            if(item.rating == 2)
            {
                x = "<p> <img src='../images/imagem1.png' style='width:50%;'></p><p> " + item.descricao + "</p>";
            }
            if(item.rating == 1)
            {
                x = "<p> <img src='../images/imagem1.png' style='width:50%;'></p><p> " + item.descricao + "</p>";
            }
            return x;
            
        
              
           
            // array.push(item.descricao);
            // return array;
        })
        return separa;
        
        // console.log(x);
        // let tam = r.length;
        // let array_nomes = new Array;
        // // for(i=0;i<tam;i++)
        // // {
        // //     // array_nomes.push(r[i]);
        // //     // array_nomes.push(r[i+1]);
        // // }
        // let array = new Array;
        // array.push(r[0]);
        // array.push(r[1]);
        // let teste = array;
    
        // return teste;
    }

    var preenche_filme = function(philme)
    {
        // let filme = JSON.parse(philme);
        let filme = philme;
        let tam = filme.length;
        for(i=0;i<tam;i++) 
        {
            if(filme[i].id && filme[i].titulo && filme[i].resumo && filme[i].generos && filme[i].titulosSemelhantes && filme[i].elenco && filme[i].opinioes)
            {
                // let dive1 = $("<div>");
                $("#cs").append
                (
                    $("<div>").append
                    (
                        // $("<p>").text(filme[i].id),
                        $("<h1>").text(filme[i].titulo).addClass("titulo"),
                        $("<p>").html(classificacao_a(filme[i].classificacao)).addClass("classificacao"),
                        $("<p>").html(filme[i].resumo).addClass("desc"),
                        $("<img>").attr("src" , filme[i].figura).addClass("image"),
                        $("<p>").html("<b>Elenco:</b> " + filme[i].elenco).addClass("elenco"),
                        $("<p>").html("<b>Gêneros: </b>" + filme[i].generos).addClass("genero"),
                        // $("<p>").html("<b>Títulos semelhantes: </b>" + filmes_parecidos(filme[i].titulosSemelhantes)).addClass("tit"),
                        // $("<img>").attr("src" , filmes_parecidos(filme[i].titulosSemelhantes)).addClass("image"),
                        // $("<p>").text(obj(filme[i].opinioes)),
                        
                        $("<h1>").text("Avaliações").addClass("titulo"),
                        // $("<p>").html(filme_parecido(filme[i].titulosSemelhantes)).addClass(""),
                        $("<p>").html(obj(filme[i].opinioes)).addClass("opniao"),
                        $("<p>").html("<b>Títulos semelhantes: <br></>").addClass("tit"),
                        $("<p>").html(filme_parecido(filme[i].titulosSemelhantes)).addClass("tit"),
                        // $("<p>").text(obj(filme[i].opinioes[1])),
                        // $("<p>").html("<b>Avaliações: <br></b>"),
                        
                        
                    ).addClass("col-md-6 col-sm-12 secao")
                );  
                // secao col-md-6 col-sm-4
                // col-md-6 col-sm-4
                // titulo_semelhante(filme[i].titulosSemelhantes);                    // dive1.append($("<p>").text(filme[i].id));
                //     console.log(filme[i].id);
            }
            // console.log(obj(filme[i].opinioes));
            
            // console.log(titulo_semelhante(filme[i].titulosSemelhantes));
            // console.log(filme[i].opinioes[0]);
            // if(filme[i].titulo)
            // {
            //     $("body").append($("<div>").append($("<p>").text(filme[i].titulo)));
            //         console.log(filme[i].titulo);
            // }
        }
        // console.log(teste(filme[0].titulosSemelhantes));
        // alert(endereco.nome);
        // if(end.id)
        // {
        //     $("#endereco_completo").append($("<p>").text(end.id));
        // }
        // if(end.complemento)
        // {
        //     $("#endereco_completo").append($("<p>").text(end.complemento));
        // }
        // if(end.bairro)
        // {
        //     $("#endereco_completo").append($("<p>").text(end.bairro));
        // }
        // if(end.localidade)
        // {
        //     $("#endereco_completo").append($("<p>").text(end.localidade));
        // }
        // if(end.uf)
        // {
        //     $("#endereco_completo").append($("<p>").text(end.uf));
        // }
        

        
    }

});