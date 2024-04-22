let font;
let firstLetter = [];
let secondLetter = [];
let x, y;
let xPos, yPos;
let lineVal;
function preload() {
  font = loadFont("cn_font.ttf");
}
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  x = width / 2 - 170;
  y = height / 2 + 85;

  firstLetter = font.textToPoints("男", x, y, 300, {
    sampleFactor: 0.4,
  });
  secondLetter = font.textToPoints("女", x, y, 300, {
    sampleFactor: 0.524, // make sample factors match so lengths are same
  });

  print(firstLetter.length, secondLetter.length);
  lineVal = 5;
}

function draw() {
  background(255);
  noFill();
  stroke(0);
  strokeWeight(1);



  let mX = constrain(mouseX, 0 , width);
  let mY = constrain(mouseY, 0, height);

  push()
  fill(0);
  noStroke()
  ellipse(10, 10, 20);
  ellipse(width-20, 10, 20);
  ellipse(10, height-20, 20);
  ellipse(width-20, height-20, 20);
  pop();


  for (let i = 0; i < firstLetter.length; i++) {
    
      xPos = map(mX, 100, width-100, firstLetter[i].x, secondLetter[i].x);
    
      yPos = map(mY, 0, height-100, firstLetter[i].y, secondLetter[i].y);
    push()
    translate(xPos,yPos);
    line(-lineVal,-lineVal,lineVal,lineVal)
    pop()
    if(mousePressed == true){
      lineVal++;
      console.log("pressed")
    }
    
  
  }



function mousePressed(){
  lineVal++
}
}