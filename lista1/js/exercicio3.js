/* Verificar se o número é primo. */

function retorno()
{
    var n=document.getElementById("entrada").value;
    n=parseInt(n);
    var resultado=verifica_primo(n);
    alert(resultado);

}

function verifica_primo(n)
{
    var resultado;
    var x=0;
    if(n==1)
    {
        resultado="O número " + n + " não é primo";
    }
    
    if(n>0)
    {
        for(i=1;i<=n;i++)
        {
            if ( n % i == 0 )
			{
				x ++ ;
			}
        }

        if(x==2)
        {
            resultado="O número " + n + " é primo";
        }
        else if(x>2)
        {
            resultado="O número " + n + " não é primo";
        }
    }
    return resultado;
}