const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery img');
const img_angle = 360 / gallery.children.length;

images.forEach((image, i) => {
    image.style.transform = `rotate3d(0, 1, 0, ${(i + 1) * img_angle}deg) translateZ(${gallery.children.length*3}rem)`;
    image.onclick = () =>{
        console.log("clicked");
        gallery.style.transform = `perspective(2000px) rotate3d(0, -1, 0, ${(i + 1) * img_angle}deg)  `;
    }
})
