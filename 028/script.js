let text = document.querySelector('.text');
let textString = text.textContent;
let splitText = textString.split("");
text.textContent = " ";

for(let i = 0; i < splitText.length; i++){
    text.innerHTML += "<span>"+splitText[i]+"</span";
}
