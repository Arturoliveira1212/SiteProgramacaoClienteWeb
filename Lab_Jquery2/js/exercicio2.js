$(function(){
    function EVogal(valor)
    {
        valor = valor.toUpperCase();
        if(valor == 'A' || valor == 'E' || valor == 'I' || valor == 'O' || valor == 'U')
        {
            return true;
        }
        else
        {
            return false;
        }
    }
  
    $("#botao").click(function(){
        let texto = $("#entrada").val();
        let array_o = texto.split("");
        const regex = /[0-9]/;
        let frase = "";
        if(regex.test(texto) || texto == '')
        {
            alert("Digite um valor válido.");
        }
        else
        {
            for(i=0;i<texto.length;i++)
            {
                if(EVogal(array_o[i]))
                {
                    array_o[i] = "<strong>" + array_o[i] + "</strong>";
                }
            }
            texto = array_o.join("");
            $("#resultado").html(texto);
        }
    })

    $("#limpar").click(function(){
        $("#entrada").val("");
        $("#resultado").text("");
    })

});