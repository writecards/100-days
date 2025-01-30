let gravity = 1;

let pendulums = [];
let num = 15;
let freq0 = 51; //freq of longest pendulum, 1/51. bc 51 swings per min
let lengthMult = 20000000;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < num; i++) {
    let period = 1 / (freq0 + i);
    let length = gravity * pow(period / TWO_PI, 2) * lengthMult;
    pendulums[i] = new Pendulum(length);
    console.log(length);
  }
}
function draw() {
  background(0);

  translate(width / 2, 0);
  for (let i = 0; i < pendulums.length; i++) {
    pendulums[i].update();
    pendulums[i].display();
  }
}
