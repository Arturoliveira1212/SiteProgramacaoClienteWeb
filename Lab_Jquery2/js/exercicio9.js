$(function(){
    
    $("#entrada").keyup(function(){
        const regex_minusculas = /[a-z]/;
        const regex_maiusculas = /[A-Z]/;
        const regex_numeros = /[1-9]/;
        const regex_char_especiais = /[@#!$%&*()-+.,=]/;
        if($("#entrada").val() == '')
        {
            $("#resultado").text("");
        }
        if(regex_minusculas.test($("#entrada").val()) || regex_maiusculas.test($("#entrada").val()))
        {
            $("#resultado").text("Senha fraca");
            $("#resultado").css("color", "red");
            $("#resultado").css("font-weight" , "bolder");
        }
        if(regex_minusculas.test($("#entrada").val()) && regex_maiusculas.test($("#entrada").val()) && regex_numeros.test($("#entrada").val()))
        {
            $("#resultado").text("Senha moderada");
            $("#resultado").css("color", "orange");
            $("#resultado").css("font-weight" , "bolder");
        }
        if(regex_minusculas.test($("#entrada").val()) && regex_maiusculas.test($("#entrada").val()) && regex_numeros.test($("#entrada").val()) && regex_char_especiais.test($("#entrada").val()))
        {
            $("#resultado").text("Senha forte");
            $("#resultado").css("color", "green");
            $("#resultado").css("font-weight" , "bolder");
        }
    })

    $("#olho").on('click', function(){
        let tipe = $("#entrada").attr("type");
        console.log(tipe);
        if(tipe == "password")
        {
            $("#entrada").prop('type',"text");
            $(this).text("Ocultar");
        }
        else
        {
            $("#entrada").prop("type", "password");
            $(this).text("Mostrar");
        }
    })
});
