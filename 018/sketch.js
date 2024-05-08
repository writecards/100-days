

let flowField;
let particles = [];
let numParticles = 500;
let iconImages = [];

function preload() {
  for (let i = 1; i <= 10; i++) {
    iconImages.push(loadImage('img/' + i + '.png')); // Load your icon images
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  flowField = new FlowField(20); // Size of each flow field cell
  for (let i = 0; i < numParticles; i++) {
    let x = random(width);
    let y = random(height);
    particles.push(new Particle(x, y));
  }
}

function draw() {
  background(255);
  flowField.update();
  for (let particle of particles) {
    particle.follow(flowField);
    particle.update();
    particle.display();
    particle.edges();
  }
}

class FlowField {
  constructor(scl) {
    this.resolution = scl;
    this.cols = floor(width / this.resolution);
    this.rows = floor(height / this.resolution);
    this.field = new Array(this.cols * this.rows);
    this.init();
  }

  init() {
    noiseSeed(random(99));
    let xoff = 0;
    for (let i = 0; i < this.cols; i++) {
      let yoff = 0;
      for (let j = 0; j < this.rows; j++) {
        let index = i + j * this.cols;
        let angle = noise(xoff, yoff) * TWO_PI * 4;
        let v = p5.Vector.fromAngle(angle);
        v.setMag(1);
        this.field[index] = v;
        yoff += 0.1;
      }
      xoff += 0.1;
    }
  }

//   update() {
//    
//   }

  lookup(position) {
    let column = constrain(floor(position.x / this.resolution), 0, this.cols - 1);
    let row = constrain(floor(position.y / this.resolution), 0, this.rows - 1);
    let index = column + row * this.cols;
    return this.field[index].copy();
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxspeed = 2;
    this.maxforce = 0.2; // 0.05
    this.icon = random(iconImages);
    this.randomSize = random(20,100);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  follow(flow) {
    let desired = flow.lookup(this.pos);
    desired.setMag(this.maxspeed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    this.applyForce(steer);
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    imageMode(CENTER);
   
    image(this.icon, 0, 0, this.randomSize, this.randomSize); 
    pop();
    
  }

  edges(){
    if (this.pos.x > width ) this.pos.x = 0;
    if (this.pos.x < 0 ) this.pos.x = width;
    if (this.pos.y > height ) this.pos.y = 0;
    if (this.pos.y < 0 ) this.pos.y = height;
  }

}
