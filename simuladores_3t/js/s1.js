$(function(){

    $("#botao").click(function(){
        let solvente = $("#solvente").val();
        let soluto = $("#soluto").val();
        suluto = parseFloat(soluto);
        solvente = parseFloat(solvente);
        let mult1 = 330 * solvente;
        if(mult1 > soluto)
        {
            $("#resultado").text("Solução insaturada.");
        }
        if(mult1 < soluto)
        {
            $("#resultado").text("Solução supersaturada.");
        }
        if(mult1 == soluto)
        {
            $("#resultado").text("Solução saturada.");
        }
    })

    $("#limpar").click(function(){
        $("#solvente").val("");
        $("#soluto").val("");
        $("#resultado").text("");
    })
    
})

