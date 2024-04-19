 //let str = "Click to Begin. \\ sentence 1 \\ sentence 2 \\ sentence 3 \\ sentence 4 \\ sentence 5 \\ sentence 6 \\ sentence 7 \\ sentence 8 \\ dancing around this heavy feeling \\ and never addressing it\\ and never addressing it\\ and never addressing it\\ and never addressing it\\ and never addressing it\\  and never addressing it \\ and never addressing it \\ and never addressing it"
 let str = "click to begin. \\ willows \\ slip \\ through \\ countless \\ bodies \\ floors";
 //let str = "Click to Begin. \\ First Sentence. \\ Middle Sentence. \\ Last Sentence.";
 let sentences = str.split("\\");
 let textOnScreen = document.getElementById("text1");
 
 let str2 = "click to begin.\\ climb \\ drunk \\ sunrise \\ rotten \\ old \\ flow";
 let sentences2 = str2.split("\\");
 let textOnScreen2 = document.getElementById("text2");

 let str3 = "click to begin. \\ up,\\ time \\ our \\ prayers \\ for \\ change";
 let sentences3 = str3.split("\\");
 let textOnScreen3 = document.getElementById("text3");

 let str4 = "click to begin. \\and  \\rays\\ sway \\ tears \\ sweat \\ grief";
 let sentences4 = str4.split("\\");
 let textOnScreen4 = document.getElementById("text4");

 let str5 = "click to begin. \\ settle \\ thread \\spiral \\ angel \\ hold \\ you";
 let sentences5 = str5.split("\\");
 let textOnScreen5 = document.getElementById("text5");

 let str6 = "click to begin. \\green \\ vines\\ wait \\ silence \\ mist \\ fall";
 let sentences6 = str6.split("\\");
 let textOnScreen6 = document.getElementById("text6");





 let counter = 0;
 


//  let citestr = "*Rob Nixon, Slow Violence";
//  let citationText = document.getElementById("citation");
//  citationText.innerHTML = citestr;

document.addEventListener("click", displayText);
textOnScreen.innerHTML = sentences[0];
textOnScreen2.innerHTML = sentences2[0];
textOnScreen3.innerHTML = sentences3[0];
textOnScreen4.innerHTML = sentences4[0];
textOnScreen5.innerHTML = sentences5[0];
textOnScreen6.innerHTML = sentences6[0];


let homeBtn = document.getElementById("homeButton");
let nextBtn = document.getElementById("nextButton");

homeBtn.style.display = "none";
nextBtn.style.display = "none";


document.addEventListener("click", playSound);

function playSound(){
    console.log("clicked")
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C2", "16n");

    const noise = new Tone.Noise("brown").start();
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
    textOnScreen2.innerHTML = sentences2[counter];
    textOnScreen3.innerHTML = sentences3[counter];
    textOnScreen4.innerHTML = sentences4[counter];
    textOnScreen5.innerHTML = sentences5[counter];
    textOnScreen6.innerHTML = sentences6[counter];
 
    // if(counter === 14){
    //   textOnScreen.style.filter = "drop-shadow(5px 10px 10px #A0522D)";
    //  // citationText.style.display = "table";
    //   textOnScreen.style.color = "#A0522D";
     
      
    //  // textOnScreen.style.filter = "none";
      
    // }else{
    //   citationText.style.display = "none";
    //   textOnScreen.style.filter = "";
    //   textOnScreen.style.color = "";
      
    // }

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

  let randPosX2 = randomIntFromInterval(pad/2, bodyWidth-pad);
  let randPosY2 = randomIntFromInterval(pad/2, bodyHeight-pad);

  let randPosX3 = randomIntFromInterval(pad/2, bodyWidth-pad);
  let randPosY3 = randomIntFromInterval(pad/2, bodyHeight-pad);

  let randPosX4 = randomIntFromInterval(pad/2, bodyWidth-pad);
  let randPosY4 = randomIntFromInterval(pad/2, bodyHeight-pad);

  let randPosX5 = randomIntFromInterval(pad/2, bodyWidth-pad);
  let randPosY5 = randomIntFromInterval(pad/2, bodyHeight-pad);

  let randPosX6 = randomIntFromInterval(pad/2, bodyWidth-pad);
  let randPosY6 = randomIntFromInterval(pad/2, bodyHeight-pad);


  
 
  textOnScreen.style.left = randPosX + "px";
  textOnScreen.style.top = randPosY + "px";

  textOnScreen2.style.left = randPosX2 + "px";
  textOnScreen2.style.top = randPosY2 + "px";

  textOnScreen3.style.left = randPosX3 + "px";
  textOnScreen3.style.top = randPosY3 + "px";

  textOnScreen4.style.left = randPosX4 + "px";
  textOnScreen4.style.top = randPosY4 + "px";

  textOnScreen5.style.left = randPosX5 + "px";
  textOnScreen5.style.top = randPosY5 + "px";

  textOnScreen6.style.left = randPosX6 + "px";
  textOnScreen6.style.top = randPosY6 + "px";



  console.log("x: ",randPosX, " y: ", randPosY );
  
}


