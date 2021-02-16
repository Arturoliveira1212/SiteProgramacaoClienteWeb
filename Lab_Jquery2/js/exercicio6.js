$(function(){

    $("#botao").click(function(){
        let data = $("#entrada").val(); 
        let ano = data.substr(0,4);
        let mes = data.substr(5,2);
        let dia = data.substr(8,2);
        let hoje = new Date;
        let data1 = new Date(ano,mes - 1,dia);
        const diff = Math.abs(data1.getTime() - hoje.getTime());
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
        $("#resultado").text("Você tem " + days + " dias de vida!");
    })

    $("#limpar").click(function(){
        $("#entrada").val("");
        $("#resultado").text("");
    })

});










