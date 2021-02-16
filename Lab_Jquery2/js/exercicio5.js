$(function(){

    $("#botao").click(function(){
        let texto = $("#entrada1").val();
        let procurar = $("#entrada2").val();
        let substituir = $("#entrada3").val();
        const regex = /[0-9]/;
        if(regex.test(texto) || regex.test(procurar) || regex.test(substituir) || texto == '')
        {
            alert("Digite um valor válido.");
        }
        else
        {
            texto = texto.toLocaleLowerCase();
            let array_texto = texto.split(' ');
            for(i=0;i<array_texto.length;i++)
            {
                if(array_texto[i]==procurar)
                {
                    array_texto[i] = substituir;
                }
            }
            let texto_novo = array_texto.join(' ');
            $("#resultado").text(texto_novo);
        }
    })

    $("#limpar").click(function(){
        $("#entrada1").val("");
        $("#entrada2").val("");
        $("#entrada3").val("");
        $("#resultado").text("");
    })

});










