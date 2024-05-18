let btn = document.querySelector('.btn');
let body = document.querySelector('body');
let sound = document.getElementById('audio');
let hov = document.getElementsByTagName("p");

var audio = document.getElementsByTagName("audio")[0];
audio.play();
 
let listitem = document.getElementsByClassName("movies")
listitem.onmouseover = function(){
    body.classList.toggle('on');
    sound.play();


}
