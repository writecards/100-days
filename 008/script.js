
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


//https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
  
    document.getElementById('hour').innerHTML =  h; 
    document.getElementById('min').innerHTML =  m;
    document.getElementById('sec').innerHTML =  s;

 

    let bodyWidth = window.innerWidth;
    let bodyHeight = window.innerHeight;

 
  let pad = 400;

    let randPosX = randomIntFromInterval(pad/2, bodyWidth-pad);
    let randPosY = randomIntFromInterval(pad/2, bodyHeight-pad);


    let randPosX_h = randomIntFromInterval(pad/2, bodyWidth-pad);
    let randPosY_h = randomIntFromInterval(pad/2, bodyHeight-pad);

    let randPosX_m = randomIntFromInterval(pad/2, bodyWidth-pad);
    let randPosY_m = randomIntFromInterval(pad/2, bodyHeight-pad);

    let randPosX_s = randomIntFromInterval(pad/2, bodyWidth-pad);
    let randPosY_s = randomIntFromInterval(pad/2, bodyHeight-pad);


    
     
    document.getElementById('hour').style.left = randPosX_h + "px";
    document.getElementById('hour').style.top = randPosY_h + "px";

    document.getElementById('min').style.left = randPosX_m + "px";
    document.getElementById('min').style.top = randPosY_m + "px";

    document.getElementById('sec').style.left = randPosX_s + "px";
    document.getElementById('sec').style.top = randPosY_s + "px";

   
    document.getElementById('randCenter').style.left = bodyWidth/2 + "px";
    document.getElementById('randCenter').style.top = bodyHeight/2 + "px";

    let randInt = randomIntFromInterval(200, 1200);
    setTimeout(startTime,randInt);
    
    adjustLine(
        document.getElementById('randCenter'), 
        document.getElementById('min'),
        document.getElementById('line')
      );

      adjustLine(
        document.getElementById('randCenter'), 
        document.getElementById('sec'),
        document.getElementById('line2')
      );

      
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  window.onload = function(){
    // txt = RiTa.untokenize(words);
    // document.getElementById("text").innerHTML = txt;
    startTime();

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

  adjustLine(
    document.getElementById('hour'), 
    document.getElementById('min'),
    document.getElementById('line')
  );

  