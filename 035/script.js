function liquid(){
    let box = document.querySelector('.box');
    let e = document.createElement('div');
    e.setAttribute('class', 'drops');
    box.appendChild(e);

    let size = Math.random()*100;
    e.style.width = 15 + size + 'px';

    let boxWidth = box.clientWidth;
    e.style.left = Math.random() * boxWidth + 'px';

    setTimeout(function(){
        box.removeChild(e);
    }, 5000)
}

setInterval(function(){
    liquid();
}, 500)