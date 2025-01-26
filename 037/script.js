//following https://www.youtube.com/watch?v=_gz8FMduwRc&list=PLxl8HNCwRbBT1bxgMRlGyxB7wjOmPF0zv&index=9&ab_channel=WebBae

let imgUrl = "durian.jpg";
let img;
let particles = [];

const particleSize = 10;
const RESOLUTION = 8;
const MAX_FORCE = 10;
const MIN_FORCE = 0;
const FORCE_VAL = 120;

function preload() {
  img = loadImage(imgUrl);
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  image(img, 0, 0, windowWidth, windowHeight);
  createParticles();
}

function draw() {
  background(30);
  push();
  fill(0, 255, 0);
  text("what does it mean to archive?", 200, 200);
  text("who is this archive for? who gets to see it?", 350, 250);
  text("is this the best medium?", 500, 200);
  text("i dreamed of queer chimerica, but not like this.", 700, 250);
  text("what does it mean to archive?", 900, 300);
  pop();

  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
//   image(img, 0, 0, width, height);
//   //image(img, 0, 0, windowWidth, windowHeight);
// }

function createParticles() {
  for (i = 0; i < width; i += RESOLUTION) {
    for (let j = 0; j < height; j += RESOLUTION) {
      let x = (i / width) * img.width;
      let y = (j / height) * img.height;
      const color = img.get(x, y);
      particles.push(
        new Particle(i + particleSize / 2, j + particleSize / 2, color)
      );
    }
  }
}

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.targetX = x;
    this.targetY = y;
  }
  update() {
    //steps:
    //get vectors for mouse, target, and current pos
    let mouseVector = createVector(mouseX, mouseY);
    let currentVector = createVector(this.x, this.y);
    let targetVector = createVector(this.targetX, this.targetY);

    //calc vector from mouse to particle and its magnitude/dist
    let fromMouseToParticle = p5.Vector.sub(currentVector, mouseVector);
    let distanceToMouse = fromMouseToParticle.mag();

    //calc vector from particle to target and its magnitude/dist
    let fromParticleToTarget = p5.Vector.sub(targetVector, currentVector);
    let distanceToTarget = fromParticleToTarget.mag();
    let totalForce = createVector(0, 0);

    //if mouse is within 100 px, reuplsive force
    if (distanceToMouse < FORCE_VAL) {
      let repulsionForce = map(
        distanceToMouse,
        0,
        FORCE_VAL,
        MAX_FORCE,
        MIN_FORCE
      );
      fromMouseToParticle.setMag(repulsionForce);
      totalForce.add(fromMouseToParticle);
    }

    //if particle is not at target, attractive force
    if (distanceToMouse > 0) {
      let attractionForce = map(
        distanceToTarget,
        0,
        FORCE_VAL,
        MIN_FORCE,
        MAX_FORCE
      ); // min max swap bc attraction
      fromParticleToTarget.setMag(attractionForce);
      totalForce.add(fromParticleToTarget);
    }
    //add forces to position
    this.x += totalForce.x;
    this.y += totalForce.y;
  }
  draw() {
    fill(this.color);
    noStroke();

    rectMode(CENTER);
    rect(this.x, this.y, particleSize);
  }
}
