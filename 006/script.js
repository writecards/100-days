let mywindow = document.getElementById("window");
let outside = document.getElementById("outside");
let sound = new Audio("quietcity.mp3");
sound.volume = 1;
sound.loop = true;
let mousedn = false;

mywindow.onmousedown = function(){
    mousedn = true;
    console.log(mousedn)
}

mywindow.addEventListener("mousemove", updateWindowSize);
if(mousedn == true){
    mywindow.addEventListener("mousemove", updateWindowSize);
}

function updateWindowSize(event){
   // console.log(event.clientX);
    outside.style.width = event.clientX + "px";
    let vol = mapRange(event.clientX, 0, 1400, 1, 0.4);
    sound.volume = vol;
    console.log(vol);
    if(event.clientX > 1400){
        sound.volume = 0;
    }else{
        sound.volume = vol;
    }

}

function playSound(){
    mywindow.addEventListener("click", ()=>{
        sound.play();
    })
}



playSound();

function mapRange (value, a, b, c, d) {
    // first map value from (a..b) to (0..1)
    value = (value - a) / (b - a);
    // then map it from (0..1) to (c..d) and return it
    return c + value * (d - c);
}