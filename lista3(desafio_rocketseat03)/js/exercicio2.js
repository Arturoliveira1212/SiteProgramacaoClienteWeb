function getRandomColor() 
{
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++)
    {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var buttonElement = document.getElementById("botao");
buttonElement.onclick=function click()
{
    var element= document.createElement('div');
    var text=document.createTextNode(' ');
    element.appendChild(text);
    var tela= document.querySelector('form');
    element.style.height='100px';
    element.style.width='100px';
    element.style.backgroundColor= 'red';
    element.style.color = "#ffffff";
    element.style.color.opacity = 4;
    element.style.marginBottom='10px';
    tela.appendChild(element);   

    element.onmouseover = function passa()
    {
     element.style.backgroundColor= getRandomColor();
    }
}