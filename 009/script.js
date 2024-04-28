 //let str = "Click to Begin. \\ sentence 1 \\ sentence 2 \\ sentence 3 \\ sentence 4 \\ sentence 5 \\ sentence 6 \\ sentence 7 \\ sentence 8 \\ dancing around this heavy feeling \\ and never addressing it\\ and never addressing it\\ and never addressing it\\ and never addressing it\\ and never addressing it\\  and never addressing it \\ and never addressing it \\ and never addressing it"
 let str = "click to begin. \\ 只是 \\  熊 \\ 哭着 \\ 及其\\ 审题 \\ 问";
 //let str = "Click to Begin. \\ First Sentence. \\ Middle Sentence. \\ Last Sentence.";
 let sentences = str.split("\\");
 let textOnScreen = document.getElementById("text1");
 
 let str2 = "click to begin.\\ 知识 \\ 胸 \\ 苦者 \\ 机器 \\ 身体 \\ 纹";
 let sentences2 = str2.split("\\");
 let textOnScreen2 = document.getElementById("text2");

 let str3 = "click to begin. \\ 直视\\ 凶 \\ 裤折\\ 记起 \\ 👼🪜 \\ 闻";
 let sentences3 = str3.split("\\");
 let textOnScreen3 = document.getElementById("text3");

 let str4 = "click to begin. \\芝士 \\兄 \\ 酷者 \\ 集齐 \\ 深梯 \\ 温";
 let sentences4 = str4.split("\\");
 let textOnScreen4 = document.getElementById("text4");

 let str5 = "click to begin. \\ 指使\\ 雄 \\ 枯遮 \\ 几期 \\ 慎剃 \\稳";
 let sentences5 = str5.split("\\");
 let textOnScreen5 = document.getElementById("text5");

 let str6 = "click to begin. \\知事 \\ 🐻\\ 😭 \\ 库这 \\ 什蹄 \\ 吻";
 let sentences6 = str6.split("\\");
 let textOnScreen6 = document.getElementById("text6");


 let counter = 0;
 


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
  adjustLine(
    document.getElementById('text1'), 
    document.getElementById('text2'),
    document.getElementById('line1')
  );

  adjustLine(
    document.getElementById('text2'), 
    document.getElementById('text3'),
    document.getElementById('line2')
  );

  adjustLine(
    document.getElementById('text4'), 
    document.getElementById('text5'),
    document.getElementById('line3')
  );

  adjustLine(
    document.getElementById('text4'), 
    document.getElementById('text6'),
    document.getElementById('line4')
  );

  adjustLine(
    document.getElementById('text3'), 
    document.getElementById('text6'),
    document.getElementById('line5')
  );


  
}


//https://stackoverflow.com/questions/19382872/how-to-connect-html-divs-with-lines

function adjustLine(from, to, line){

    var fT = from.offsetTop  + from.offsetHeight/2;
    var tT = to.offsetTop    + to.offsetHeight/2;
    var fL = from.offsetLeft + from.offsetWidth/2;
    var tL = to.offsetLeft   + to.offsetWidth/2;
    
    var CA   = Math.abs(tT - fT);
    var CO   = Math.abs(tL - fL);
    var H    = Math.sqrt(CA*CA + CO*CO);
    var ANG  = 180 / Math.PI * Math.acos( CA/H );
  
    if(tT > fT){
        var top  = (tT-fT)/2 + fT;
    }else{
        var top  = (fT-tT)/2 + tT;
    }
    if(tL > fL){
        var left = (tL-fL)/2 + fL;
    }else{
        var left = (fL-tL)/2 + tL;
    }
  
    if(( fT < tT && fL < tL) || ( tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)){
      ANG *= -1;
    }
    top-= H/2;
  
    line.style["-webkit-transform"] = 'rotate('+ ANG +'deg)';
    line.style["-moz-transform"] = 'rotate('+ ANG +'deg)';
    line.style["-ms-transform"] = 'rotate('+ ANG +'deg)';
    line.style["-o-transform"] = 'rotate('+ ANG +'deg)';
    line.style["-transform"] = 'rotate('+ ANG +'deg)';
    line.style.top    = top+'px';
    line.style.left   = left+'px';
    line.style.height = H + 'px';
  }


  