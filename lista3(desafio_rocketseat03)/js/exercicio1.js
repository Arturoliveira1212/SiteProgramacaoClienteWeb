var buttonElement = document.getElementById("botao");
console.log(buttonElement);
buttonElement.onclick=function click()
{
    var element= document.createElement('div');
    var text=document.createTextNode(' ');
    element.appendChild(text);
    var tela= document.querySelector('body');
    element.style.height='100px';
    element.style.width='100px';
    element.style.backgroundColor='red';
    element.style.float = 'left';
    element.style.margin = '20px 0 0 10px';
    tela.appendChild(element);
}