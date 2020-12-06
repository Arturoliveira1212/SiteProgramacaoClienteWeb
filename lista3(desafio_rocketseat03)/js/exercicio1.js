var buttonElement = document.getElementById("botao");
console.log(buttonElement);
buttonElement.onclick=function click()
{
    var element= document.createElement('div');
    var text=document.createTextNode('o');
    element.appendChild(text);
    var tela= document.querySelector('form');
    element.style.height='100px';
    element.style.width='100px';
    element.style.backgroundColor='red';
    element.style.color='red';
    element.style.marginBottom='10px';
    tela.appendChild(element);
}