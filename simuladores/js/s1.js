var botao = document.getElementById('botao');
var limpar = document.getElementById('limpar')
var select = document.getElementById('corr');
		
botao.onclick = function transformação()
{
	var inputt = document.getElementById('valor').value;
	if(inputt == '' || inputt<=0)
	{
		alert("Insira um valor válido.");
	}
	else 
	{
		if(select.value == '2')
		{
			var massa = inputt;
			massa = parseFloat(massa);
			var gramas = 23;
			var resultado = (massa/gramas);
			resultado = resultado.toFixed(2);
			var resultadoCompleto = "23 g - 1 mol <br>"  + massa + " g - X mol(s) <br><br>" + " 23 . X = 1 . " + massa + " <br> X = " + massa + "/23 <br> " + "X = " + resultado + " <br><br> " + massa + " g Na = " + resultado + " mol(s) Na";
			document.getElementById('resultado').innerHTML = resultadoCompleto;
		}
		else if(select.value == '1')
		{
			var mol = inputt;
			mol = parseFloat(mol);
			var gramas = 23;
			var resultado = (gramas*mol);
			resultado = resultado.toFixed(2);
			var resultadoCompleto = "23 g - 1 mol <br> X g - " + mol + " mol <br><br> 1 . X = 23 . " + mol + " <br> X = " + gramas*mol + "/1 <br> " + "X = " + resultado + " g <br><br> " + mol + " mol Na = " + resultado + " g Na";
			document.getElementById("resultado").innerHTML = resultadoCompleto;
		}
	}

}

limpar.onclick = function limpa()
{
	document.getElementById('resultado').innerHTML = '';
	document.getElementById('valor').value = '';
}