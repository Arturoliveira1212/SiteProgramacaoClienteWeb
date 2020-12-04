var botao1 = document.getElementById('botao1');
botao1.onclick = function transformação(){

	var massa = document.getElementById('massa').value;
	massa = parseFloat(massa);
	var gramas = 23;
	var resultado = (massa/gramas);
	resultado = resultado.toFixed(2);
	var resultadoCompleto = "1 mol - 23 g <br> X mol - " + massa +" g <br> <br> 23 . X = 1 . " + massa + " <br> X = " + massa + "/" + " 23 <br> X = " + resultado + " mol(s). <br><br> " + massa + " g = " + resultado + " mol(s)";
	document.getElementById('resultado').innerHTML = resultadoCompleto;


}

var botao2 = document.getElementById('botao2');
botao2.onclick = function transformação2(){

	var mol = document.getElementById('mol').value;
	mol = parseFloat(mol);
	var gramas = 23;
	var resultado = (gramas*mol);
	resultado = resultado.toFixed(2);
	var resultadoCompleto = "23 g - 1 mol <br> X g - " + mol + " mol <br><br> 1 . X = 23 . " + mol + " <br> X = " + gramas*mol + "/1 <br> " + "X = " + resultado + " g <br><br> " + mol + " mol = " + resultado + " g";
	document.getElementById("resultado2").innerHTML = resultadoCompleto;

}
