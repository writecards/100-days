//https://www.youtube.com/watch?v=s0BnHeBX0Bw&ab_channel=Codegrid

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let words = [];

let ground, wallLeft, wallRight;

let wordsToDisplay = [
  "student",
  "secretary",
  "strategy",
  "speaker",
  "storage",
  "setting",
  "signature",
  "sympathy",
  "statement"
];

let myfont;

function preload(){
    myfont = loadFont("FreeSans.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight - 60);
  engine = Engine.create();

  ground = Bodies.rectangle(width / 2, height - 20, width, 10, {
    isStatic: true,
  });
  wallLeft = Bodies.rectangle(0, height / 2, 10, height, {
    isStatic: true,
  });
  wallRight = Bodies.rectangle(width, height/2, 10, height, {
    isStatic: true,
  });
  World.add(engine.world,[ground, wallLeft, wallRight]);

  for(let i = 0; i < wordsToDisplay.length; i++){
    words.push(new Word(random(width), -200, wordsToDisplay[i]));
  }


}

function draw(){
    background(155);
    ellipse(width/2, height/2, 600, 150);
    Engine.update(engine);
    for(let word of words){
        word.show();
    }
    fill(0)
   
}

class Word{
    constructor(x, y, word){
        this.body = Bodies.rectangle(x, y, word.length * 20, 40);
        this.word = word;
        World.add(engine.world, this.body);
    }
    show(){
        let pos = this.body.position;
        let angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        stroke(0);
        strokeWeight(3);
        rect(0,0, this.word.length *30 + 80, 80, 60)
        noStroke();
        fill(0)
        textFont(myfont);
        textSize(40);
        textAlign(CENTER, CENTER);
        text(this.word.toUpperCase(), 0, 0);
        pop();

    }
}

function mouseMoved(){
    for(let word of words){
        if(dist(mouseX, mouseY, word.body.position.x, word.body.position.y) < 50){
            Body.applyForce(
                word.body,
                {x: word.body.position.x, y: word.body.position.y},
                {x: random(-0.2, 0.2), y: random(-0.2, 0.2)}
            )
        }
    }
}
