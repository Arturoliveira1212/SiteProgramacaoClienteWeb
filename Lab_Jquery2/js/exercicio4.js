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
		    for(palavra of array_texto)
            { 
                if(palavras_unificadas.indexOf(palavra) == -1)
                {
                    let oco = (contaOcorrencias(array_texto, palavra));
                    palavras_unificadas.push(palavra); // adicionando valor ao array //
                    array_ocorrencias[x] = oco;
                }
                else
                {
                    x--;
                }
                i++;
                x++;
		    }
            let cont = 0;
            let palavra_mais_ocorrido;
            let array_empate =new Array;
            for(i=0;i<palavras_unificadas.length;i++)
            {
                var maior = Math.max.apply(null,array_ocorrencias);      
                if(array_ocorrencias[i]==maior)
                {	
                    cont++;
                    palavra_mais_ocorrido = palavras_unificadas[i];
                    array_empate[i] = palavras_unificadas[i];
                }
            }
            if(cont>1)
            {
                $("#resultado").text("Há " + array_empate.length + " palavras com " + array_ocorrencias[0] + " ocorrência(s): " + array_empate + ".");
            }
            else
            {
                $("#resultado").text("A palavra '" + palavra_mais_ocorrido + "' tem a maior ocorrência com " + maior + " aparições.");
            }
        }        
    })

    $("#limpar").click(function(){
        $("#entrada").val("");
        $("#resultado").text("");
        $("#acervo td").remove();
    })

});



