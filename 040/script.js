let gravity = 0.8;

let pendulums = [];
let num = 15;
let freq0 = 51; //freq of longest pendulum, 1/51. bc 51 swings per min
let lengthMult = 40000000;
let c = ["#0F5FA6", "#034001", "#B9BF04", "#F27405", "#F22816"];
let osc;
let midiNote = 60;
//let midiNotes = [55, 52, 48, 45, 40, 43, 40, 36];
let midiNotes = [44];

// let midiNotes = [91, 88, 84, 79, 76, 72, 67, 64, 60, 55, 52, 48, 43, 40, 36];
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  for (let i = 0; i < num; i++) {
    let period = 1 / (freq0 + i);
    let length = gravity * pow(period / TWO_PI, 2) * lengthMult;
    let s = 15 + i * 0.5;
    pendulums[i] = new Pendulum(
      length,
      c[i % c.length],
      s,
      midiNotes[i % midiNotes.length]
    );
  }
}
function draw() {
  background(0);
  //   if (mouseIsPressed) {
  //     osc.amp(1, 0.05);
  //   } else {
  //     osc.amp(0, 0.05);
  //   }
  translate(width / 2, 0);
  for (let i = 0; i < pendulums.length; i++) {
    pendulums[i].update();
    pendulums[i].display();
  }
}
