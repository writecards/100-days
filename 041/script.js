//following https://youtu.be/Nxxk6th0nPQ?si=RuX_fefTaYLrBtXP
let r = 200;
let angle = 0;
let shiftingAngle2 = 90;
let shiftingAngle3 = 45;
let shiftingAngle4 = 135;
let balls = [];
let balls2 = [];
let balls3 = [];
let balls4 = [];
let num = 50;

let sound = [];
let buffer = 2.5;
let angleV = 0.3;

//let assets = [
//   "A0.mp3",
//   "A1.mp3",
//   "A2.mp3",
//   "A3.mp3",
//   "A4.mp3",
//   "A5.mp3",
//   "A6.mp3",
//   "A7.mp3",
//   "Ab1.mp3",
//   "Ab2.mp3",
//   "Ab3.mp3",
//   "Ab4.mp3",
//   "Ab5.mp3",
//   "Ab6.mp3",
//   "Ab7.mp3",
// ];
let assets = [
  "0.wav",
  "1.wav",
  "2.wav",
  "3.wav",
  "4.wav",
  "5.wav",
  "6.wav",
  "7.wav",
  "8.wav",
  "9.wav",
  "10.wav",
  "11.wav",
  "12.wav",
  "13.wav",
  "14.wav",
  "15.wav",
  "16.wav",
  "17.wav",
  "18.wav",
  "19.wav",
  "20.wav",
  "21.wav",
  "22.wav",
  "23.wav",
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
      90,
      shiftingAngle,
      sound[i % sound.length],
      buffer,
      angleV
    );
  }
  for (let i = 0; i < num; i++) {
    let shiftingAngle = (180 / num) * i;
    balls3[i] = new Ball(
      180,
      shiftingAngle,
      sound[i % sound.length],
      buffer,
      angleV
    );
  }
  for (let i = 0; i < num; i++) {
    let shiftingAngle = (180 / num) * i;
    balls4[i] = new Ball(
      270,
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
    stroke(255, 179, 255, 99);
    balls[i].update();
    balls[i].display();
    // stroke(156, 200, 219, 99);
    // balls2[i].update();
    // balls2[i].display();
    // stroke(140, 235, 52, 99);
    // balls3[i].update();
    // balls3[i].display();
    // stroke(116, 52, 235, 99);
    // balls4[i].update();
    // balls4[i].display();
  }
}
