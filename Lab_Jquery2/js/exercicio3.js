function contaOcorrencias(palavras, palavra)
{
	return palavras.filter((v) => (v === palavra)).length; 
}

$(function(){
  
    $("#botao").click(function(){
        let texto = $("#entrada").val();
        const regex = /[0-9]/;
        if(regex.test(texto) || texto == '')
        {
            alert("Digite um valor válido.");
        }
        else
        {
            let array_texto = texto.split(" ").map(function(palavra)
            { 
                return palavra.toLocaleLowerCase().replace(/[.,]/g, '');
            });
            let array_ocorrencias = new Array;
            let palavras_unificadas = new Array;
            let i = 0;
            let x = 0;
            let oco;
		    for(palavra of array_texto)
            { 
                if(palavras_unificadas.indexOf(palavra) == -1)
                {
                    oco = (contaOcorrencias(array_texto, palavra));
                    palavras_unificadas.push(palavra); 
                    array_ocorrencias[x] = oco;
                }
                else
                {
                    x--;
                }
                i++;
                x++;
		    }
           
            for(i=0;i<palavras_unificadas.length;i++)
            {
                let objeto_tr = $("<tr>");
                $("#acervo").append(objeto_tr);
                let objeto_td = $("<td>"); // uma linha //
                let objeto_td2 = $("<td>");
                objeto_td.text(palavras_unificadas[i]);
                objeto_td2.text(array_ocorrencias[i]);
                objeto_tr.append(objeto_td);
                objeto_tr.append(objeto_td2);                 
            }
        }        
    })

    $("#limpar").click(function(){
        $("#entrada").val("");
        $("#resultado").text("");
        $("#acervo td").remove();
    })

});
