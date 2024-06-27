document.addEventListener("DOMContentLoaded", ()=>{
    let cursor = document.querySelector('.cursor');
    // let textContent = "you've been on m y m ind";
    let textContent = "I miss my mother   Miss my mother  Miss my mother at night Ooh, she gave me life I miss my brother Miss my brother Miss my brother all day Ooh, we used to pray I miss my lover  Miss my lover Miss my lover at night Ooh, to hold me tight I'm on the freeway On the freeway  On the freeway I cry Because I can  Tears can be  So good for those who dive in them Let them run on my cheeks One more time"

    for(let i = 0; i < textContent.length; i++){
        let span = document.createElement('span');
        span.classList.add('text');
        span.style.fontSize =0.5 + "em";
        span.style.setProperty('--i', i+1);
        span.style.left = i*0.6 + "em";
        span.textContent = textContent[i];
        span.style.filter = `hue-rotate(${i*2}deg)`;
        cursor.appendChild(span);
    }
    //mousemove event to animate text with gsap
    document.addEventListener("mousemove", e => {
      gsap.to(".text", {
        x: e.clientX,
        y: e.clientY,
        stagger: 0.1
      })
    })
})