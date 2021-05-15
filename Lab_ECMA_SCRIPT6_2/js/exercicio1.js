$(function(){

    $("#botao").click(function(){
        let valor1 = $("#val1").val();
        let valor2 = $("#val2").val();
        let operacao = $("#operação").val();
        $("#resultado").text("Resultado = " + calc(valor1,valor2,operacao));
    })

    $("#limpar").click(function(){
        $("#val1").val("");
        $("#val2").val("");
        $("#resultado").text("");
    })

    function calc (valor1, valor2, op)
    {
        valor1 = parseFloat(valor1);
        valor2 = parseFloat(valor2);
        switch(op)
        {
            case "Soma": return valor1 + valor2; break;
            case "Subtração": return valor1 - valor2; break;
            case "Multiplicação": return valor1 * valor2; break;
            case "Divisão": return valor1/valor2; break;
        }
    }

    
})