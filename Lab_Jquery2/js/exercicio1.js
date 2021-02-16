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
            texto = texto.split("").reverse().join("");
            $("#resultado").text(texto);
        }
    })

    $("#limpar").click(function(){
        $("#entrada").val("");
        $("#resultado").text("");
    })

});










