let str = "回收 \\ 彩电 \\ 冰箱 \\ 洗衣机 \\ 旧电脑 \\ 空调 \\ 热水器 \\ 微波炉";
 //let str = "Click to Begin. \\ First Sentence. \\ Middle Sentence. \\ Last Sentence.";
 let sentences = str.split("\\");
 let textOnScreen = document.getElementById("text1");

let counter = 0;

document.addEventListener("click", playSound);

document.addEventListener("click", displayText);

function playSound(){
    console.log("clicked")
    const synth = new Tone.Synth().toDestination();
    // let randomNotes = ["C5", "E5", "G5", "G3", "E2", "B5"]
    let randomNotes = ["G5", "C5"]
    synth.triggerAttackRelease(randomNotes[randomIntFromInterval(0, randomNotes.length-1)], "16n");

    //const noise = new Tone.Noise("pink").start();
    // make an autofilter to shape the noise
    const autoFilter = new Tone.AutoFilter({
      frequency: "0n",
      baseFrequency: 20,
      octaves: 2,
      volume: -9,
      
    }).toDestination().start();
    // connect the noise
    noise.connect(autoFilter);
    // start the autofilter LFO
    autoFilter.start();
   
}


function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function displayText(){
   console.log(counter);
    counter++;
    textOnScreen.innerHTML = sentences[counter];
    


    if(counter == sentences.length-1){
        // textOnScreen.style.display = "none";
        // homeBtn.style.display = "block";
        // nextBtn.style.display = "block";
        counter = 0;
    }
    
  
   
  let pad = 300;
  let bodyWidth = window.innerWidth;
  let bodyHeight = window.innerHeight;
  let randPosX = randomIntFromInterval(pad/2, bodyWidth-pad);
  let randPosY = randomIntFromInterval(pad/2, bodyHeight-pad);


  
 
//   textOnScreen.style.left = randPosX + "px";
//   textOnScreen.style.top = randPosY + "px";



  console.log("x: ",randPosX, " y: ", randPosY );
  
  
}


