$(function(){

    $("#botao").click(function(){
        let salario = $("#salario").val();
        console.log(salario);
        $("#resultado").text("Resultado = " + impos(salario));
    })

    $("#limpar").click(function(){
        $("#salario").val("");
        $("#resultado").text("");
    })

    function impos (salario)
    {
        salario = parseFloat(salario);
        if(salario <= 1903.99)
        {
            return "Não há taxas!";
        }
        if(salario > 1903.99 && salario <= 2826.65)
        {
            return ((salario * 0.075) - 142.80).toFixed(2) + " reais.";
        }
        if(salario > 2826.65 && salario <= 3751.05)
        {
            return ((salario * 0.15) - 354.80).toFixed(2) + " reais.";
        }
        if(salario > 3751.05 && salario <= 4664.68)
        {
            return ((salario * 0.225) - 636.13).toFixed(2) + " reais.";
        }
        if(salario > 4664.68)
        {
            return ((salario * 0.275) - 869.36).toFixed(2) + " reais.";
        }
    }

    
})