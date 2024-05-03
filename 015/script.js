let text = document.getElementById("text");
let light = document.getElementById("light");

document.addEventListener('mousemove', function(event){
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    light.style.left = mouseX + 'px';
    light.style.top = mouseY + 'px';

    let distanceX = mouseX - text.offsetLeft - text.offsetWidth / 2;
    let distanceY = mouseY - text.offsetTop - text.offsetHeight/ 2;
    
    let newShadow = '';
    for(let i = 0; i < 200; i++){
        let shadowX = -distanceX * (i / 200);
        let shadowY = -distanceY * (i / 200);
        newShadow += (newShadow ? ',' : '') + shadowX + 'px ' + shadowY + 'px 0 rgba(33, 33, 33, 1)'

    }

    text.style.textShadow = newShadow;
})