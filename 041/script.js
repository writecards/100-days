//following https://youtu.be/Nxxk6th0nPQ?si=RuX_fefTaYLrBtXP
let r = 350;
let angle = 0;
let shiftingAngle2 = 90;
let shiftingAngle3 = 45;
let shiftingAngle4 = 135;
let balls = [];
let balls2 = [];
let num = 55;

let sound = [];
let buffer = 2;
let angleV = 0.1;

let assets = [
  "A0.mp3",
  "A1.mp3",
  "A2.mp3",
  "A3.mp3",
  "A4.mp3",
  "A5.mp3",
  "A6.mp3",
  "A7.mp3",
  "Ab1.mp3",
  "Ab2.mp3",
  "Ab3.mp3",
  "Ab4.mp3",
  "Ab5.mp3",
  "Ab6.mp3",
  "Ab7.mp3",
];

function preload() {
  for (let i = 0; i < assets.length; i++) {
    sound[i] = loadSound("assets/" + assets[i]);
  }
}
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  for (let i = 0; i < num; i++) {
    let shiftingAngle = (180 / num) * i;
    balls[i] = new Ball(
      0,
      shiftingAngle,
      sound[i % sound.length],
      buffer,
      angleV
    );
  }

  for (let i = 0; i < num; i++) {
    let shiftingAngle = (180 / num) * i;
    balls2[i] = new Ball(
      180,
      shiftingAngle,
      sound[i % sound.length],
      buffer,
      angleV
    );
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  noFill();
  // stroke(255);
  // ellipse(0, 0, r * 2, r * 2);
  for (let i = 0; i < num; i++) {
    stroke(255, 179, 255);
    balls[i].update();
    balls[i].display();
    stroke(156, 200, 219);
    balls2[i].update();
    balls2[i].display();
  }
}
