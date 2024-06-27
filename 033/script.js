let currentPage = 1;

function loadImage(){
    let image = Array.from({length: 29}, (_, index)=>{
        return `<img src = "images/${index}.gif">`;
    });

    let container = document.getElementById('container');
    container.innerHTML += image.join('');
}

loadImage();

window.addEventListener('scroll', ()=>{
    let {scrollTop, clientHeight, scrollHeight}=document.documentElement;
    if(scrollTop + clientHeight >= scrollHeight){
        currentPage ++;
        loadImage();
    }
})