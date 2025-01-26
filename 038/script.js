// following https://www.youtube.com/watch?v=VyXxSNcgDtg&ab_channel=PattVira

//let m;

let molds = [];
let num = 1005;
let d;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  for (let i = 0; i < num; i++) {
    molds[i] = new Mold();
  }
  d = pixelDensity();
}

function draw() {
  background(0, 10);
  loadPixels();

  for (let i = 0; i < num; i++) {
    molds[i].update();
    molds[i].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
