// following https://www.youtube.com/watch?v=VyXxSNcgDtg&ab_channel=PattVira

//let m;

let molds = [];
let num = 4000;
let d;
let imgUrl = "image.png";
let img;
function preload() {
  img = loadImage(imgUrl);
}
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  angleMode(DEGREES);
  //image(img, 0, 0, window.innerWidth, window.innerHeight);
  background(0, 50);

  colorMode(HSB, 360, 100, 100, 100);
  for (let i = 0; i < num; i++) {
    molds[i] = new Mold();
  }
  d = pixelDensity();
}

function draw() {
  loadPixels();

  for (let i = 0; i < num; i++) {
    molds[i].update();
    molds[i].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
